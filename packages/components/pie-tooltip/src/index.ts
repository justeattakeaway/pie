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

/**
 * Whether an element is a containing block for the positioned elements inside it, on the
 * strength of something other than its own `position`.
 *
 * Every property tested here establishes one for absolutely and fixed positioned descendants
 * alike, which is what `resolveOverlayMode` relies on to rank the two modes against each other.
 *
 * @private
 */
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

    // Paint, layout, content and strict containment each establish a containing block, whereas
    // `size` and `style` do not. Any `container-type` other than `normal` applies layout
    // containment and so establishes one too.
    if (/\b(paint|layout|content|strict)\b/.test(styles.contain)) {
        return true;
    }

    if (styles.containerType && styles.containerType !== 'normal') {
        return true;
    }

    // A promised change to any of the above establishes the containing block up front.
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

    /**
     * Whether the `action` slot has content. Left `undefined` until it has been resolved on the
     * client so that a server render never emits a role the client then has to correct.
     */
    @state() private _hasActionContent: boolean | undefined;

    @state() private _isPositioned = false;

    /**
     * Both torn down on close and on disconnect, so nothing is observed while the panel is
     * hidden. The controller covers the event listeners; `MutationObserver` takes no abort
     * signal, so the observer is disconnected by hand alongside it.
     */
    private _triggerTrackingController: AbortController | undefined;

    private _directionObserver: MutationObserver | undefined;

    private _reanchorFrame = 0;

    private _shouldResolveOverlayMode = false;

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

        // The mode decides which box the offsets are measured against, so it has to be settled
        // before anything is measured.
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

    /**
     * Keeps the anchor over the trigger while the panel is open.
     *
     * The offsets are invariant under a scroll of the page, and under a scroll of any container
     * holding both the trigger and the host's containing block, so in those cases the browser
     * moves the panel on its own and none of this is what keeps it attached. What it is needed
     * for is everything else: a `position: sticky` trigger, which moves relative to the document
     * with no layout change to notify anyone of; a scroller holding the trigger but not the
     * host's containing block; and `fixed` mode, where the panel holds its viewport position and
     * every pixel of scrolling has to be reapplied. Listening in the capture phase catches
     * scrolling of any ancestor container, not just the document, and the work is coalesced into
     * a single animation frame so a scroll cannot queue more than one measurement.
     *
     * A change of writing direction is tracked alongside those events. Placement itself mirrors
     * in CSS with no help from here, but flipping the direction lays the page out again and so
     * moves the trigger, without firing either a scroll or a resize.
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

                if (this._shouldResolveOverlayMode) {
                    this._shouldResolveOverlayMode = false;
                    this.resolveOverlayMode();
                }

                this.projectOverTrigger();
            });
        };

        // A media query can change an ancestor's `overflow`, so a resize is the one event that
        // can invalidate the mode. Flagged rather than resolved here, so that dragging the window
        // edge cannot walk the ancestors more than once in a frame.
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
     * Chooses which positioning mode the host uses.
     *
     * `absolute` is what lets the browser move the panel with the page, so it is the default.
     * What it gives up is that an ancestor with a non-visible `overflow` clips it whenever that
     * ancestor holds the host's containing block, which `fixed` sometimes escapes. So both are
     * costed and the less clipped one wins.
     *
     * Every property that establishes a containing block for a fixed element establishes one for
     * an absolute element too, while `position` alone establishes one only for an absolute
     * element. The ancestors that can clip a fixed element are therefore always a subset of
     * those that can clip an absolute one, and `fixed` can only ever be clipped less. That makes
     * it worth its scroll behaviour only when it escapes a clip that `absolute` does not: when
     * both are clipped the clipping is identical, so `absolute` keeps the better scroll for free.
     *
     * @private
     */
    private resolveOverlayMode (): void {
        let isAtOrAboveAbsoluteContainingBlock = false;
        let isAtOrAboveFixedContainingBlock = false;
        let isAbsoluteClipped = false;
        let isFixedClipped = false;

        let node: Node | null = this.parentNode;

        while (node) {
            // At a shadow boundary `parentNode` is the shadow root rather than an element, so
            // step over it to the host. The flattened tree is deliberately not followed: a
            // containing block and a clip are both matters of layout, and layout follows the
            // light DOM rather than slot assignment.
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

            // An `overflow` ancestor clips only what resolves its position against it or against
            // something inside it, so an ancestor met before the containing block clips neither
            // mode. This is checked after the two flags are set so that an ancestor which is both
            // the containing block and the clipper counts as clipping.
            if (styles.overflowX !== 'visible' || styles.overflowY !== 'visible') {
                isAbsoluteClipped = isAbsoluteClipped || isAtOrAboveAbsoluteContainingBlock;
                isFixedClipped = isFixedClipped || isAtOrAboveFixedContainingBlock;
            }

            if (element === this.ownerDocument.documentElement) {
                break;
            }

            node = element.parentNode;
        }

        // Set inline rather than through a host attribute: it is a single declaration, and it
        // keeps the whole mode decision next to the offsets it governs.
        this.style.position = isAbsoluteClipped && !isFixedClipped ? 'fixed' : '';
    }

    /**
     * Projects the trigger's box onto the anchor so that the panel can be placed against it
     * entirely in CSS.
     *
     * The offsets are measured from the origin marker, which is pinned to the origin of the
     * anchor's containing block, and are then applied relative to that same box. The measurement
     * is self-referential, so it holds whatever the containing block turns out to be, including
     * an ancestor whose `transform` makes it one.
     *
     * They are physical, matching the physical measurements they come from. Everything derived
     * from them inside the shadow root uses logical properties, which is what allows placement to
     * mirror in RTL with no JavaScript involvement.
     *
     * @private
     */
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

        // `fill-container` is defined as the inline size of the trigger's parent element. When the
        // trigger has no parent element to measure, it falls back to the trigger's own inline size.
        const container = triggerElement.parentElement;
        const containerInlineSize = container ? container.getBoundingClientRect().width : width;

        this.style.setProperty('--tooltip-container-inline-size', `${containerInlineSize}px`);
        this._isPositioned = true;
    }

    /**
     * Emits a close event. The component never writes to `isOpen`: the consumer owns it and is
     * responsible for passing the new value back.
     *
     * @private
     */
    private handleCloseButtonClick (): void {
        // String literal required: the CEM analyser cannot resolve a constant reference to its
        // value, so using ON_TOOLTIP_CLOSE_EVENT here would emit a spurious event entry in the
        // custom-elements manifest and generate a broken onON_TOOLTIP_CLOSE_EVENT prop in react.ts.
        this.dispatchEvent(new Event('pie-tooltip-close', { bubbles: true, composed: true }));
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

        // The `icon` type is a self-sizing treatment with no arrow, so `size` has nothing to say
        // about it and the layer has no arrow to leave room for.
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

        // In dialog mode the panel is named by its heading, falling back to `aria.label`. In
        // tooltip mode the panel is never named: a tooltip is a description, never a name.
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
