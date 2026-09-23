import {
    nothing,
    unsafeCSS,
    type PropertyValues,
    type TemplateResult,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    property, query, queryAssignedElements, state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, unsafeStatic } from 'lit/static-html.js';
import {
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

export * from './defs';

const headingId = 'pie-tooltip-heading';

// Returns true if the element establishes a containing block through a property other than
// `position` — i.e. for both absolute and fixed descendants, not just absolute.
const createsContainingBlock = (styles: CSSStyleDeclaration): boolean => {
    const isSet = (value: string | undefined) => !!value && value !== 'none';

    const containingBlockValues = [
        styles.transform,
        styles.perspective,
        styles.filter,
        styles.backdropFilter,
        styles.translate,
        styles.rotate,
        styles.scale,
    ];

    if (containingBlockValues.some(isSet)) {
        return true;
    }

    // `size` and `style` containment do not establish a containing block; everything else does.
    if (/\b(paint|layout|content|strict)\b/.test(styles.contain)) {
        return true;
    }

    if (styles.containerType && styles.containerType !== 'normal') {
        return true;
    }

    // will-change pre-establishes the containing block before the property is applied.
    return /\b(transform|perspective|filter|backdrop-filter|contain|translate|rotate|scale)\b/.test(styles.willChange);
};

/**
 * @tagname pie-tooltip
 * @event {Event} pie-tooltip-close - When the close button is clicked. Set `isOpen` to `false` in response.
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

    @query('.c-tooltip-origin') private _originElement!: HTMLElement | null;

    @state() private _hasActionContent: boolean | undefined;

    @state() private _isPositioned = false;

    private _triggerTrackingController: AbortController | undefined;

    private _directionObserver: MutationObserver | undefined;

    private _reanchorFrame = 0;

    private _shouldResolveOverlayMode = false;

    static styles = unsafeCSS(styles);

    private get _mode (): TooltipMode | undefined {
        if (this._hasActionContent === undefined) {
            return undefined;
        }

        return this._hasActionContent ? 'dialog' : 'tooltip';
    }

    protected firstUpdated (): void {
        this.resolveMode();
        this.projectOverTrigger();
    }

    protected updated (changedProperties: PropertyValues<this>): void {
        const anchoringProperties: Array<keyof PieTooltip> = ['trigger', 'isOpen', 'position', 'size'];

        if (this.isOpen && changedProperties.has('isOpen')) {
            this.resolveOverlayMode();
        }

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

    // Listens for scroll (capture — catches any ancestor), resize, and dir-attribute changes to
    // re-anchor the panel. Multiple events per frame coalesce into one requestAnimationFrame call.
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

                if (this._shouldResolveOverlayMode) {
                    this._shouldResolveOverlayMode = false;
                    this.resolveOverlayMode();
                }

                this.projectOverTrigger();
            });
        };

        // Flagged rather than resolved immediately so window-drag cannot walk ancestors more than once per frame.
        const handleResize = () => {
            this._shouldResolveOverlayMode = true;
            handleViewportChange();
        };

        window.addEventListener('scroll', handleViewportChange, { capture: true, passive: true, signal });
        window.addEventListener('resize', handleResize, { passive: true, signal });

        this._directionObserver = new MutationObserver(handleViewportChange);
        this._directionObserver.observe(this.ownerDocument.documentElement, {
            attributeFilter: ['dir'],
            subtree: true,
        });

        this._triggerTrackingController = controller;
    }

    private stopTrackingTrigger (): void {
        this._triggerTrackingController?.abort();
        this._triggerTrackingController = undefined;

        this._directionObserver?.disconnect();
        this._directionObserver = undefined;

        this._shouldResolveOverlayMode = false;

        if (this._reanchorFrame) {
            cancelAnimationFrame(this._reanchorFrame);
            this._reanchorFrame = 0;
        }
    }

    private resolveMode (): void {
        this._hasActionContent = this._assignedActionElements.length > 0;
    }

    // Picks between `absolute` (browser handles scrolling, but clipped by overflow ancestors) and
    // `fixed` (escapes overflow clips, but must re-offset on every scroll). Switches to `fixed`
    // only when it escapes a clip that `absolute` would not.
    private resolveOverlayMode (): void {
        let isAtOrAboveAbsoluteContainingBlock = false;
        let isAtOrAboveFixedContainingBlock = false;
        let isAbsoluteClipped = false;
        let isFixedClipped = false;

        let node: Node | null = this.parentNode;

        while (node) {
            // Step over shadow roots to the host; layout follows the light DOM, not slot assignment.
            const element = node instanceof ShadowRoot ? node.host : node;

            if (!(element instanceof Element)) {
                break;
            }

            const styles = getComputedStyle(element);
            const isContainingBlock = createsContainingBlock(styles);

            if (isContainingBlock || styles.position !== 'static') {
                isAtOrAboveAbsoluteContainingBlock = true;
            }

            if (isContainingBlock) {
                isAtOrAboveFixedContainingBlock = true;
            }

            // Check after setting the containing-block flags so an ancestor that is both the
            // containing block and the clipper is counted correctly.
            if (styles.overflowX !== 'visible' || styles.overflowY !== 'visible') {
                isAbsoluteClipped = isAbsoluteClipped || isAtOrAboveAbsoluteContainingBlock;
                isFixedClipped = isFixedClipped || isAtOrAboveFixedContainingBlock;
            }

            if (element === this.ownerDocument.documentElement) {
                break;
            }

            node = element.parentNode;
        }

        this.style.position = isAbsoluteClipped && !isFixedClipped ? 'fixed' : '';
    }

    // Measures the trigger relative to the origin marker (which sits at the containing block's
    // origin) and writes CSS custom properties. Self-referential: correct for any containing
    // block. Physical values; shadow-root CSS uses logical properties for RTL mirroring.
    private projectOverTrigger (): void {
        this._isPositioned = false;

        const triggerElement = this.trigger ? this.ownerDocument.getElementById(this.trigger) : null;

        if (!triggerElement || !this._originElement) {
            ['top', 'left', 'width', 'height'].forEach((suffix) => {
                this.style.removeProperty(`--tooltip-anchor-${suffix}`);
            });
            this.style.removeProperty('--tooltip-container-inline-size');
            this._isPositioned = true;

            return;
        }

        const originRect = this._originElement.getBoundingClientRect();
        const {
            top, left, width, height,
        } = triggerElement.getBoundingClientRect();

        this.style.setProperty('--tooltip-anchor-top', `${top - originRect.top}px`);
        this.style.setProperty('--tooltip-anchor-left', `${left - originRect.left}px`);
        this.style.setProperty('--tooltip-anchor-width', `${width}px`);
        this.style.setProperty('--tooltip-anchor-height', `${height}px`);

        const container = triggerElement.parentElement;
        const containerInlineSize = container ? container.getBoundingClientRect().width : width;

        this.style.setProperty('--tooltip-container-inline-size', `${containerInlineSize}px`);
        this._isPositioned = true;
    }

    private handleCloseButtonClick (): void {
        /**
         * The custom elements manifest analyser scans `this.dispatchEvent` calls for event names
         * but cannot resolve constants, so it would record an event literally named
         * `ON_TOOLTIP_CLOSE_EVENT` and generate a matching React callback prop. `@ignore` skips
         * this call site; the event is declared by the class-level `@event` tag instead.
         *
         * @ignore
         */
        this.dispatchEvent(new Event(ON_TOOLTIP_CLOSE_EVENT, { bubbles: true, composed: true }));
    }

    private renderHeading (): TemplateResult {
        const tag = unsafeStatic(this.headingLevel);

        return html`<${tag}
                        id="${headingId}"
                        class="${componentClass}-heading"
                        data-test-id="${headingId}">${this.heading}</${tag}>`;
    }

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

        const isIconType = type === 'icon';

        const layerClasses = {
            [`${componentClass}-layer`]: true,
            [`${componentClass}-layer--${position}`]: true,
            [`${componentClass}-layer--type-${type}`]: true,
            'is-open': !!isOpen,
            'is-positioned': this._isPositioned,
        };

        const panelClasses = {
            [componentClass]: true,
            [`${componentClass}--${position}`]: true,
            [`${componentClass}--${variant}`]: true,
            [`${componentClass}--type-${type}`]: true,
            [`${componentClass}--size-${size}`]: !isIconType,
            'is-dismissible': !!isDismissible,
            'has-action': mode === 'dialog',
            'has-heading': !!heading,
        };

        const isDialog = mode === 'dialog';

        return html`
            <div class="${componentClass}-origin" data-test-id="${componentSelector}-origin"></div>
            <div class="${componentClass}-anchor" data-test-id="${componentSelector}-anchor">
                <div class="${classMap(layerClasses)}" data-test-id="${componentSelector}-layer">
                    <div
                        class="${classMap(panelClasses)}"
                        data-test-id="${componentSelector}"
                        role="${ifDefined(mode)}"
                        aria-hidden="${!isOpen}"
                        aria-labelledby="${isDialog && heading ? headingId : nothing}"
                        aria-label="${isDialog && !heading && aria?.label ? aria.label : nothing}">
                        ${isIconType ? nothing : html`<div class="${componentClass}-arrow" data-test-id="${componentSelector}-arrow"></div>`}
                        <div class="${componentClass}-body">
                            ${heading ? this.renderHeading() : nothing}
                            <div class="${componentClass}-content" data-test-id="${componentSelector}-content">
                                <slot name="content"></slot>
                            </div>
                        </div>
                        <div class="${componentClass}-action" data-test-id="${componentSelector}-action">
                            <slot name="action" @slotchange="${this.resolveMode}"></slot>
                        </div>
                        ${isDismissible ? this.renderCloseButton() : nothing}
                    </div>
                </div>
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTooltip;
    }
}
