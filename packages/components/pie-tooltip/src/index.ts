import {
    nothing,
    unsafeCSS,
    type PropertyValues,
    type TemplateResult,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, unsafeStatic } from 'lit/static-html.js';
import {
    dispatchCustomEvent,
    safeCustomElement,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';

import {
    componentClass,
    componentSelector,
    defaultProps,
    headingLevels,
    ON_TOOLTIP_CLOSE_EVENT,
    positions,
    sizes,
    types,
    variants,
    type TooltipMode,
    type TooltipProps,
} from './defs';
import styles from './tooltip.scss?inline';

import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';

// Valid values available to consumers
export * from './defs';

const headingId = `${componentSelector}-heading`;

/**
 * @tagname pie-tooltip
 * @event {CustomEvent} pie-tooltip-open - When the tooltip is opened.
 * @event {CustomEvent} pie-tooltip-close - When the tooltip is closed.
 * @slot content - The descriptive content of the panel. Must not contain focusable elements.
 * @slot action - An optional slot for interactive content such as a `pie-button`. Filling this slot switches the panel to a non-modal dialog.
 */
@safeCustomElement('pie-tooltip')
export class PieTooltip extends PieElement implements TooltipProps {
    @property({ type: String })
    public trigger: TooltipProps['trigger'];

    @property({ type: Boolean })
    public isOpen = defaultProps.isOpen;

    @property({ type: String })
    @validPropertyValues(componentSelector, positions, defaultProps.position)
    public position = defaultProps.position;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, types, defaultProps.type)
    public type = defaultProps.type;

    @property({ type: Boolean })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: String })
    public heading: TooltipProps['heading'];

    @property({ type: String })
    @validPropertyValues(componentSelector, headingLevels, defaultProps.headingLevel)
    public headingLevel = defaultProps.headingLevel;

    @property({ type: Object })
    public aria: TooltipProps['aria'];

    @queryAssignedElements({ slot: 'action' }) private _assignedActionElements!: Array<HTMLElement>;

    /**
     * Whether the `action` slot has content. Left `undefined` until it has been resolved on the
     * client so that a server render never emits a role the client then has to correct.
     */
    @state() private _hasActionContent: boolean | undefined;

    /**
     * Torn down on close and on disconnect, so nothing is observed while the panel is hidden.
     */
    private _triggerTrackingController: AbortController | undefined;

    private _reanchorFrame = 0;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    /**
     * The pattern the panel presents as. `undefined` until the `action` slot has been read,
     * which only ever happens on the client.
     */
    private get _mode (): TooltipMode | undefined {
        if (this._hasActionContent === undefined) {
            return undefined;
        }

        return this._hasActionContent ? 'dialog' : 'tooltip';
    }

    /**
     * `firstUpdated` is a client-only lifecycle hook: Lit does not call it when rendering on the
     * server. Resolving the mode here keeps the work out of the server render entirely, and the
     * resulting update is committed before the browser paints.
     */
    protected firstUpdated (): void {
        this.resolveMode();
        this.projectOverTrigger();
    }

    protected updated (changedProperties: PropertyValues<this>): void {
        const anchoringProperties: Array<keyof PieTooltip> = ['trigger', 'isOpen', 'position', 'size'];

        if (anchoringProperties.some((prop) => changedProperties.has(prop))) {
            this.projectOverTrigger();
        }

        if (this.isOpen) {
            this.startTrackingTrigger();
        } else {
            this.stopTrackingTrigger();
        }
    }

    public disconnectedCallback (): void {
        this.stopTrackingTrigger();
        super.disconnectedCallback();
    }

    /**
     * Keeps the host over the trigger while the panel is open.
     *
     * The host is a fixed overlay, so without this it would hold its viewport position while the
     * trigger scrolled away from underneath it. Listening in the capture phase catches scrolling
     * of any ancestor container, not just the document, and the work is coalesced into a single
     * animation frame so a scroll cannot queue more than one measurement.
     *
     * @private
     */
    private startTrackingTrigger (): void {
        if (this._triggerTrackingController) {
            return;
        }

        const controller = new AbortController();
        const { signal } = controller;

        const handleViewportChange = () => {
            if (this._reanchorFrame) {
                return;
            }

            this._reanchorFrame = requestAnimationFrame(() => {
                this._reanchorFrame = 0;
                this.projectOverTrigger();
            });
        };

        window.addEventListener('scroll', handleViewportChange, { capture: true, passive: true, signal });
        window.addEventListener('resize', handleViewportChange, { passive: true, signal });

        this._triggerTrackingController = controller;
    }

    /**
     * @private
     */
    private stopTrackingTrigger (): void {
        this._triggerTrackingController?.abort();
        this._triggerTrackingController = undefined;

        if (this._reanchorFrame) {
            cancelAnimationFrame(this._reanchorFrame);
            this._reanchorFrame = 0;
        }
    }

    /**
     * Reads the `action` slot to decide which of the two patterns the panel presents as.
     *
     * Called from `firstUpdated` so that the answer is settled before the first paint, and again
     * from the slot's `slotchange` so that content added later is picked up.
     *
     * @private
     */
    private resolveMode (): void {
        this._hasActionContent = this._assignedActionElements.length > 0;
    }

    /**
     * Projects the host over the trigger's box so that the panel can be placed against it
     * entirely in CSS.
     *
     * The measurements written here are physical viewport coordinates, matching the fixed
     * positioning of the host. Everything derived from them inside the shadow root uses logical
     * properties, which is what allows placement to mirror in RTL with no JavaScript involvement.
     *
     * @private
     */
    private projectOverTrigger (): void {
        const triggerElement = this.trigger ? this.ownerDocument.getElementById(this.trigger) : null;

        if (!triggerElement) {
            ['block-start', 'inline-start', 'block-size', 'inline-size'].forEach((suffix) => {
                this.style.removeProperty(`--tooltip-anchor-${suffix}`);
            });
            this.style.removeProperty('--tooltip-container-inline-size');

            return;
        }

        const {
            top, left, width, height,
        } = triggerElement.getBoundingClientRect();

        this.style.setProperty('--tooltip-anchor-block-start', `${top}px`);
        this.style.setProperty('--tooltip-anchor-inline-start', `${left}px`);
        this.style.setProperty('--tooltip-anchor-inline-size', `${width}px`);
        this.style.setProperty('--tooltip-anchor-block-size', `${height}px`);

        // `fill-container` is defined as the inline size of the trigger's parent element. When the
        // trigger has no parent element to measure, it falls back to the trigger's own inline size.
        const container = triggerElement.parentElement;
        const containerInlineSize = container ? container.getBoundingClientRect().width : width;

        this.style.setProperty('--tooltip-container-inline-size', `${containerInlineSize}px`);
    }

    /**
     * Emits a close event. The component never writes to `isOpen`: the consumer owns it and is
     * responsible for passing the new value back.
     *
     * @private
     */
    private handleCloseButtonClick (): void {
        dispatchCustomEvent(this, ON_TOOLTIP_CLOSE_EVENT, { targetTooltip: this });
    }

    /**
     * Template for the panel heading. Doubles as the panel's accessible name in dialog mode.
     *
     * @private
     */
    private renderHeading (): TemplateResult {
        const tag = unsafeStatic(this.headingLevel);

        return html`<${tag}
                        id="${headingId}"
                        class="${componentClass}-heading"
                        data-test-id="${headingId}">${this.heading}</${tag}>`;
    }

    /**
     * Template for the close button.
     *
     * @private
     */
    private renderCloseButton (): TemplateResult {
        return html`
            <pie-icon-button
                class="${componentClass}-close"
                data-test-id="${componentSelector}-close"
                size="xsmall"
                variant="${this.variant === 'inverse' ? 'ghost-secondary' : 'ghost-inverse'}"
                .aria="${{ label: this.aria?.close }}"
                @click="${this.handleCloseButtonClick}">
                <icon-close></icon-close>
            </pie-icon-button>`;
    }

    render () {
        const {
            aria,
            heading,
            isDismissible,
            isOpen,
            position,
            size,
            type,
            variant,
            _mode: mode,
        } = this;

        const layerClasses = {
            [`${componentClass}-layer`]: true,
            [`${componentClass}-layer--${position}`]: true,
            'is-open': !!isOpen,
        };

        const panelClasses = {
            [componentClass]: true,
            [`${componentClass}--${position}`]: true,
            [`${componentClass}--${variant}`]: true,
            [`${componentClass}--type-${type}`]: true,
            [`${componentClass}--size-${size}`]: true,
            'is-dismissible': !!isDismissible,
            'has-action': mode === 'dialog',
        };

        // In dialog mode the panel is named by its heading, falling back to `aria.label`. In
        // tooltip mode the panel is never named: a tooltip is a description, never a name.
        const isDialog = mode === 'dialog';

        return html`
            <div class="${classMap(layerClasses)}" data-test-id="${componentSelector}-layer">
                <div
                    class="${classMap(panelClasses)}"
                    data-test-id="${componentSelector}"
                    role="${ifDefined(mode)}"
                    aria-labelledby="${isDialog && heading ? headingId : nothing}"
                    aria-label="${isDialog && !heading && aria?.label ? aria.label : nothing}">
                    <div class="${componentClass}-arrow" data-test-id="${componentSelector}-arrow"></div>
                    ${heading ? this.renderHeading() : nothing}
                    <div class="${componentClass}-content" data-test-id="${componentSelector}-content">
                        <slot name="content"></slot>
                    </div>
                    <div class="${componentClass}-action" data-test-id="${componentSelector}-action">
                        <slot name="action" @slotchange="${this.resolveMode}"></slot>
                    </div>
                    ${isDismissible ? this.renderCloseButton() : nothing}
                </div>
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTooltip;
    }
}
