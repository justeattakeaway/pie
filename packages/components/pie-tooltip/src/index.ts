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
    ON_TOOLTIP_OPEN_EVENT,
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

// The panel's `aria-labelledby` and `aria-describedby` reference the heading and content by id.
// A page can hold several tooltips at once (the onboarding tour renders four), and HTML requires
// an id to be unique within its tree. The panel and its heading/content live in the same shadow
// root, so a fixed id would be repeated across instances. WAI-ARIA treats a duplicate id as an
// author error and leaves the user agent to use "the first element found with the given ID"
// (WAI-ARIA 1.3, 8.6.1), so give each instance its own ids rather than rely on that fallback.
const headingTestId = `${componentSelector}-heading`;

// Frames `focusPanel()` will keep retrying the focus move across after the panel has committed
// its opening update. Two frames cover a reveal whose positioning update commits a frame after
// the open one; the headroom covers a slower machine's extra layout pass.
const FOCUS_PANEL_MAX_ATTEMPTS = 5;

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

const flattenedAncestors = (element: Element): Array<Element> => {
    const { documentElement } = element.ownerDocument;
    const ancestors: Array<Element> = [];
    let current = element;

    while (current !== documentElement) {
        const parentNode: Node | null = current.assignedSlot ?? current.parentNode;
        const parent = parentNode instanceof ShadowRoot ? parentNode.host : parentNode;

        if (!(parent instanceof Element)) {
            break;
        }

        ancestors.push(parent);
        current = parent;
    }

    return ancestors;
};

// The ancestors that clip the trigger. Overflow on the root element and the body is left out:
// that is the viewport clip, which every element is subject to and which no panel can escape.
const collectClippingAncestors = (element: Element): Array<Element> => {
    const { documentElement, body } = element.ownerDocument;

    return flattenedAncestors(element).filter((ancestor) => {
        if (ancestor === documentElement || ancestor === body) {
            return false;
        }

        const styles = getComputedStyle(ancestor);

        return styles.overflowX !== 'visible' || styles.overflowY !== 'visible';
    });
};

// The region an element clips its descendants to: its padding box, minus any scrollbar.
// `clientLeft`/`clientTop` are the border widths and `clientWidth`/`clientHeight` the padding box,
// so together they convert the border-box rect the browser reports into the clip region.
const getClipRect = (element: Element): DOMRect => {
    const { left, top } = element.getBoundingClientRect();
    const {
        clientLeft, clientTop, clientWidth, clientHeight,
    } = element;

    return new DOMRect(left + clientLeft, top + clientTop, clientWidth, clientHeight);
};

// Intersects two rects. Returns `null` when they do not overlap.
const intersectRects = (a: DOMRect, b: DOMRect): DOMRect | null => {
    const left = Math.max(a.left, b.left);
    const top = Math.max(a.top, b.top);
    const right = Math.min(a.right, b.right);
    const bottom = Math.min(a.bottom, b.bottom);

    if (right <= left || bottom <= top) {
        return null;
    }

    return new DOMRect(left, top, right - left, bottom - top);
};

type TooltipSide = 'top' | 'bottom' | 'left' | 'right';
type TooltipAlignment = '' | '-start' | '-end';

interface CandidateRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

const oppositeSide: Record<TooltipSide, TooltipSide> = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
};

const crossSides: Record<TooltipSide, Array<TooltipSide>> = {
    top: ['left', 'right'],
    bottom: ['left', 'right'],
    left: ['top', 'bottom'],
    right: ['top', 'bottom'],
};

const parsePosition = (position: TooltipProps['position']): { side: TooltipSide; alignment: TooltipAlignment } => {
    const match = /^(top|bottom|left|right)(-start|-end)?$/.exec(position ?? '');

    if (!match) {
        return { side: 'top', alignment: '' };
    }

    return { side: match[1] as TooltipSide, alignment: (match[2] ?? '') as TooltipAlignment };
};

const toPhysicalSide = (side: TooltipSide, isRtl: boolean): TooltipSide => {
    if (!isRtl) {
        return side;
    }

    if (side === 'left') {
        return 'right';
    }

    if (side === 'right') {
        return 'left';
    }

    return side;
};

const getCandidateRect = (
    side: TooltipSide,
    alignment: TooltipAlignment,
    anchor: DOMRect,
    panelWidth: number,
    panelHeight: number,
    offset: number,
    isRtl: boolean,
): CandidateRect => {
    const physicalSide = toPhysicalSide(side, isRtl);
    const isVerticalSide = physicalSide === 'top' || physicalSide === 'bottom';

    let left = 0;
    let top = 0;

    if (physicalSide === 'top') {
        top = anchor.top - offset - panelHeight;
    } else if (physicalSide === 'bottom') {
        top = anchor.bottom + offset;
    } else if (physicalSide === 'left') {
        left = anchor.left - offset - panelWidth;
    } else {
        left = anchor.right + offset;
    }

    if (isVerticalSide) {
        if (alignment === '') {
            left = anchor.left + (anchor.width / 2) - (panelWidth / 2);
        } else if (alignment === '-start') {
            left = isRtl ? anchor.right - panelWidth : anchor.left;
        } else {
            left = isRtl ? anchor.left : anchor.right - panelWidth;
        }
    } else if (alignment === '') {
        top = anchor.top + (anchor.height / 2) - (panelHeight / 2);
    } else {
        top = alignment === '-start' ? anchor.top : anchor.bottom - panelHeight;
    }

    return {
        left,
        top,
        right: left + panelWidth,
        bottom: top + panelHeight,
    };
};

const containsRect = (boundary: DOMRect, rect: CandidateRect): boolean => rect.left >= boundary.left &&
    rect.right <= boundary.right &&
    rect.top >= boundary.top &&
    rect.bottom <= boundary.bottom;

const getVisibleArea = (boundary: DOMRect, rect: CandidateRect): number => {
    const width = Math.min(boundary.right, rect.right) - Math.max(boundary.left, rect.left);
    const height = Math.min(boundary.bottom, rect.bottom) - Math.max(boundary.top, rect.top);

    return Math.max(0, width) * Math.max(0, height);
};

/**
 * @tagname pie-tooltip
 * @event {Event} pie-tooltip-open - When a configured trigger asks for the panel. Set `isOpen` to `true` in response.
 * @event {Event} pie-tooltip-close - When the close button is clicked, or a configured trigger asks to dismiss the panel. Set `isOpen` to `false` in response.
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

    @property({ type: Array })
    public triggers: TooltipProps['triggers'] = [];

    @queryAssignedElements({ slot: 'action' }) private _assignedActionElements!: Array<HTMLElement>;

    @query('.c-tooltip-origin') private _originElement!: HTMLElement | null;

    @state() private _hasActionContent: boolean | undefined;

    @state() private _isPositioned = false;

    @state() private _isAnchorVisible = true;

    @state() private _resolvedPosition: TooltipProps['position'] | undefined;

    private _clippedTriggerElement: Element | null = null;

    private _triggerClippers: Array<Element> = [];

    private _overlayClippers: Array<Element> = [];

    private _collisionSignature: string | null = null;

    private _overlayModeDirty = true;

    private _triggerTrackingController: AbortController | undefined;
    private _interactionController: AbortController | undefined;

    private _directionObserver: MutationObserver | undefined;

    private _triggerObserver: ResizeObserver | undefined;

    private _reanchorFrame = 0;

    private _hoverCloseTimer: ReturnType<typeof setTimeout> | undefined;

    private _openedByClick = false;

    // A UUID rather than a counter, so uniqueness holds across module re-instantiation
    // (HMR, duplicated bundles) and not just within a single module instance.
    private readonly _instanceId = crypto.randomUUID();

    private get _headingId (): string {
        return `pie-tooltip-heading-${this._instanceId}`;
    }

    private get _contentId (): string {
        return `pie-tooltip-content-${this._instanceId}`;
    }

    static styles = unsafeCSS(styles);

    private get _mode (): TooltipMode | undefined {
        if (this._hasActionContent === undefined) {
            return undefined;
        }

        return this._hasActionContent ? 'dialog' : 'tooltip';
    }

    protected firstUpdated (): void {
        this.resolveMode();
        this._overlayModeDirty = true;
        this.resolveOverlayMode();
        this.projectOverTrigger();
        this._rebuildInteractionListeners();
    }

    protected updated (changedProperties: PropertyValues<this>): void {
        const anchoringProperties: Array<keyof PieTooltip> = ['trigger', 'isOpen', 'position', 'size'];

        if (this.isOpen && changedProperties.has('isOpen')) {
            this._overlayModeDirty = true;
        }

        if (!this.isOpen) {
            this._openedByClick = false;
        }

        if (changedProperties.has('trigger')) {
            this._overlayModeDirty = true;
        }

        const isAnchoringChange = anchoringProperties.some((prop) => changedProperties.has(prop));

        if (isAnchoringChange) {
            this._collisionSignature = null;
        }

        this.resolveOverlayMode();

        if (isAnchoringChange) {
            this.projectOverTrigger();
        }

        // Tracking is bound to a specific trigger element and a specific ancestor chain, so a new
        // trigger needs it rebuilt rather than left in place. `startTrackingTrigger` early-returns
        // while a controller exists, so the stop has to come first.
        if (this.isOpen && changedProperties.has('trigger')) {
            this.stopTrackingTrigger();
        }

        if (this.isOpen) {
            this.startTrackingTrigger();
        } else {
            this.stopTrackingTrigger();
        }

        if (changedProperties.has('triggers') || changedProperties.has('trigger')) {
            this._rebuildInteractionListeners();
        }
    }

    public disconnectedCallback (): void {
        this._teardownInteractionListeners();
        this.stopTrackingTrigger();
        super.disconnectedCallback();
    }

    /**
     * Moves focus to the panel's content in dialog mode, so the heading and content are announced
     * together when the panel opens. Does nothing in tooltip mode, where the panel is a
     * description of its trigger rather than a container of its own. Resolves to `true` once
     * focus has landed, or `false` if the panel is closed, is in tooltip mode, or focus could
     * not be moved.
     *
     * VoiceOver does not announce a dialog's `aria-describedby` when focus enters the dialog
     * (WebKit bug 282773), so the WAI-ARIA APG's guidance is to make a static element at the
     * start of the dialog's content focusable and focus that instead of the first control:
     * the screen reader then reads the static content, followed by the dialog's name and role.
     * https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboard-interaction
     */
    public async focusPanel (): Promise<boolean> {
        if (this._mode !== 'dialog') {
            return false;
        }

        // The panel may still be committing its opening update when the consumer calls this:
        // the content carries `tabindex="-1"` only in dialog mode, the layer only becomes
        // `visibility: visible` once positioned, and a hidden element refuses focus. Wait for
        // the update to commit and one further frame for the positioning pass before the first
        // attempt, so the first `focus()` call is made against a panel that can take it.
        await this.updateComplete;
        await new Promise(requestAnimationFrame);

        const content = this.renderRoot.querySelector<HTMLElement>(`.${componentClass}-content`);

        if (!content) {
            return false;
        }

        const focusLanded = () => this.shadowRoot?.activeElement === content || this.ownerDocument.activeElement === content;

        // Even against a visible panel, Safari can drop a `focus()` call on an element whose
        // reveal is still settling — silently, leaving the content unfocused and the screen
        // reader narrating wherever focus last was. So: try, wait a frame, try again, and say
        // so when focus never lands. The loop is bounded by FOCUS_PANEL_MAX_ATTEMPTS, one frame
        // per attempt.
        for (let attempt = 0; attempt <= FOCUS_PANEL_MAX_ATTEMPTS; attempt++) {
            content.focus({ preventScroll: true });

            if (focusLanded()) {
                return true;
            }

            // eslint-disable-next-line no-await-in-loop
            await new Promise(requestAnimationFrame);
        }

        return false;
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

                this.resolveOverlayMode();
                this.projectOverTrigger();
            });
        };

        // Flagged rather than resolved immediately so window-drag cannot walk ancestors more than once per frame.
        const handleResize = () => {
            this._overlayModeDirty = true;
            handleViewportChange();
        };

        window.addEventListener('scroll', handleViewportChange, { capture: true, passive: true, signal });
        window.addEventListener('resize', handleResize, { passive: true, signal });

        // `scroll` is not composed, so its path stops at the shadow root it happened in and a
        // listener on `window` never sees it. A scroll container inside another component's
        // shadow root (`pie-modal`'s, for one) therefore needs its own listener, or the panel
        // detaches from the trigger as soon as that container scrolls.
        const shadowRoots = new Set<ShadowRoot>();

        flattenedAncestors(this).forEach((ancestor) => {
            const root = ancestor.getRootNode();

            if (root instanceof ShadowRoot) {
                shadowRoots.add(root);
            }
        });

        shadowRoots.forEach((root) => {
            root.addEventListener('scroll', handleViewportChange, { capture: true, passive: true, signal });
        });

        // A trigger inside a container that was `display: none` when the panel opened has no box
        // to measure. `pie-modal` calls `showModal()` from an async `firstUpdated`, so this is the
        // normal case for a tooltip inside a modal that is open on load.
        this._triggerObserver = new ResizeObserver(() => {
            // Geometry changed, so the ancestor chain may have too. Flagged rather than resolved
            // here so the walk runs at most once per frame.
            this._overlayModeDirty = true;
            handleViewportChange();
        });

        const triggerElement = this._getTriggerElement();

        if (triggerElement) {
            this._triggerObserver.observe(triggerElement);
        }

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

        this._triggerObserver?.disconnect();
        this._triggerObserver = undefined;

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
    //
    // An overflow ancestor clips a positioned box only if it is that box's containing block or an
    // ancestor of it; a clipper strictly inside the containing block does not clip. So each
    // clipper is counted against a mode only once that mode's containing block has been reached.
    private resolveOverlayMode (): void {
        if (!this._overlayModeDirty) {
            return;
        }

        this._overlayModeDirty = false;

        let isAtOrAboveAbsoluteContainingBlock = false;
        let isAtOrAboveFixedContainingBlock = false;
        const absoluteClippingAncestors: Array<Element> = [];
        const fixedClippingAncestors: Array<Element> = [];

        const { documentElement, body } = this.ownerDocument;

        // Resolved on the same triggers as the overlay mode, because both answers change only
        // when the ancestor chain does.
        this._refreshTriggerClippers();

        flattenedAncestors(this).forEach((element) => {
            const styles = getComputedStyle(element);

            // `display: contents` generates no box, so it can neither be a containing block nor
            // clip. `display: none` is deliberately not skipped: its computed values still
            // describe the box it will generate, so the answer holds once it is shown.
            if (styles.display === 'contents') {
                return;
            }

            const isContainingBlock = createsContainingBlock(styles);

            if (isContainingBlock || styles.position !== 'static') {
                isAtOrAboveAbsoluteContainingBlock = true;
            }

            if (isContainingBlock) {
                isAtOrAboveFixedContainingBlock = true;
            }

            const clips = styles.overflowX !== 'visible' || styles.overflowY !== 'visible';

            // Overflow on the root element and on the body propagates to the viewport, which no
            // positioning scheme escapes. Counting it can only make `fixed` look no better than
            // `absolute`, which is what happens while a `pie-modal` is open, because its scroll
            // lock sets `overflow: hidden` on the body.
            const propagatesOverflowToViewport = element === documentElement || element === body;

            // Counted after the containing-block flags so an ancestor that is both the containing
            // block and the clipper is counted correctly.
            if (clips && !propagatesOverflowToViewport) {
                if (isAtOrAboveAbsoluteContainingBlock) {
                    absoluteClippingAncestors.push(element);
                }

                if (isAtOrAboveFixedContainingBlock) {
                    fixedClippingAncestors.push(element);
                }
            }
        });

        // The fixed containing block is always at or above the absolute one, so the clippers that
        // apply to a fixed box are a subset of those that apply to an absolute one. A lower count
        // therefore always means a strictly better escape, never a worse one.
        const useFixed = fixedClippingAncestors.length < absoluteClippingAncestors.length;

        this.style.position = useFixed ? 'fixed' : '';
        this._overlayClippers = useFixed ? fixedClippingAncestors : absoluteClippingAncestors;
    }

    // Measures the trigger relative to the origin marker (which sits at the containing block's
    // origin) and writes CSS custom properties. Self-referential: correct for any containing
    // block. Physical values; shadow-root CSS uses logical properties for RTL mirroring.
    private projectOverTrigger (): void {
        this._isPositioned = false;

        const triggerElement = this._getTriggerElement();

        if (!triggerElement || !this._originElement) {
            ['top', 'left', 'width', 'height'].forEach((suffix) => {
                this.style.removeProperty(`--tooltip-anchor-${suffix}`);
            });
            this.style.removeProperty('--tooltip-container-inline-size');
            this._isAnchorVisible = true;
            this._isPositioned = true;

            return;
        }

        if (triggerElement !== this._clippedTriggerElement) {
            this._refreshTriggerClippers();
        }

        // Anchoring to the trigger's full box would point the panel at a part of the trigger that
        // has been scrolled out of sight, leaving whatever sits over it — a pinned modal footer,
        // for one — between the two. Anchoring to the visible part instead keeps the arrow on the
        // edge the reader can actually see.
        const visibleRect = this._triggerClippers.reduce<DOMRect | null>(
            (rect, clipper) => (rect ? intersectRects(rect, getClipRect(clipper)) : null),
            triggerElement.getBoundingClientRect(),
        );

        // Nothing of the trigger is left to point at, so there is nothing to describe either.
        this._isAnchorVisible = visibleRect !== null;

        if (!visibleRect) {
            this._isPositioned = true;

            return;
        }

        const originRect = this._originElement.getBoundingClientRect();
        const {
            top, left, width, height,
        } = visibleRect;

        this.style.setProperty('--tooltip-anchor-top', `${top - originRect.top}px`);
        this.style.setProperty('--tooltip-anchor-left', `${left - originRect.left}px`);
        this.style.setProperty('--tooltip-anchor-width', `${width}px`);
        this.style.setProperty('--tooltip-anchor-height', `${height}px`);

        const container = triggerElement.parentElement;
        const containerInlineSize = container ? container.getBoundingClientRect().width : width;

        this.style.setProperty('--tooltip-container-inline-size', `${containerInlineSize}px`);

        this.resolveCollision(visibleRect);

        this._isPositioned = true;
    }

    private resolveCollision (anchorRect: DOMRect): void {
        const panel = this.renderRoot.querySelector<HTMLElement>(`.${componentClass}`);

        if (!panel) {
            return;
        }

        const boundary = this._getCollisionBoundary();

        if (!boundary) {
            this._collisionSignature = null;
            this._setResolvedPosition(this.position ?? defaultProps.position);

            return;
        }

        const isIconType = this.type === 'icon';
        const hostStyles = getComputedStyle(this);
        const isRtl = hostStyles.direction === 'rtl';

        const panelWidth = panel.offsetWidth;
        const panelHeight = panel.offsetHeight;
        const signature = [
            anchorRect.left, anchorRect.top, anchorRect.width, anchorRect.height,
            boundary.left, boundary.top, boundary.width, boundary.height,
            panelWidth, panelHeight,
            isRtl,
        ].join(':');

        if (this._collisionSignature === signature) {
            return;
        }

        this._collisionSignature = signature;

        const offset = parseFloat(hostStyles.getPropertyValue('--tooltip-offset')) || 0;
        const arrowSize = parseFloat(hostStyles.getPropertyValue('--tooltip-arrow-size')) || 0;
        const layerOffset = isIconType ? offset : offset + arrowSize;

        const { side: preferredSide, alignment: preferredAlignment } = parsePosition(this.position ?? defaultProps.position);

        let fitting: { side: TooltipSide; alignment: TooltipAlignment } | undefined;
        let bestFallback: { side: TooltipSide; alignment: TooltipAlignment } | undefined;
        let bestArea = -1;

        this._getCandidatePositions(preferredSide, preferredAlignment).some(({ side, alignment }) => {
            const rect = getCandidateRect(
                side,
                alignment,
                anchorRect,
                panelWidth,
                panelHeight,
                layerOffset,
                isRtl,
            );

            if (containsRect(boundary, rect)) {
                fitting = { side, alignment };

                return true;
            }

            const area = getVisibleArea(boundary, rect);

            if (area > bestArea) {
                bestArea = area;
                bestFallback = { side, alignment };
            }

            return false;
        });

        const resolved = fitting ?? bestFallback;
        const resolvedPosition = resolved
            ? `${resolved.side}${resolved.alignment}` as TooltipProps['position']
            : this.position ?? defaultProps.position;

        this._setResolvedPosition(resolvedPosition);
    }

    private _setResolvedPosition (position: TooltipProps['position']): void {
        if (this._resolvedPosition !== position) {
            this._resolvedPosition = position;
        }
    }

    private _getCollisionBoundary (): DOMRect | null {
        const { documentElement } = this.ownerDocument;
        const viewport = new DOMRect(0, 0, documentElement.clientWidth, documentElement.clientHeight);

        return this._overlayClippers.reduce<DOMRect | null>(
            (rect, clipper) => (rect ? intersectRects(rect, getClipRect(clipper)) : null),
            viewport,
        );
    }

    private _getCandidatePositions (
        preferredSide: TooltipSide,
        preferredAlignment: TooltipAlignment,
    ): Array<{ side: TooltipSide; alignment: TooltipAlignment }> {
        const sideOrder: Array<TooltipSide> = [preferredSide, oppositeSide[preferredSide], ...crossSides[preferredSide]];
        const allAlignments: Array<TooltipAlignment> = ['', '-start', '-end'];

        return sideOrder.flatMap((side) => {
            const alignments = [preferredAlignment, ...allAlignments.filter((alignment) => alignment !== preferredAlignment)];

            return alignments.map((alignment) => ({ side, alignment }));
        });
    }

    // Cached because `projectOverTrigger` runs on every re-anchoring frame, and collecting these
    // costs a computed style per ancestor. Refreshed when the trigger changes and whenever the
    // overlay mode is resolved, which is the same cadence as an ancestor chain actually changing.
    private _refreshTriggerClippers (): void {
        const triggerElement = this._getTriggerElement();

        this._clippedTriggerElement = triggerElement;
        this._triggerClippers = triggerElement ? collectClippingAncestors(triggerElement) : [];
    }

    private handleCloseButtonClick (): void {
        this._requestClose();
    }

    private _getTriggerElement (): Element | null {
        return this.trigger ? this.ownerDocument.getElementById(this.trigger) : null;
    }

    private _requestOpen (): void {
        if (this.isOpen) return;

        /**
         * @ignore
         */
        this.dispatchEvent(new Event(ON_TOOLTIP_OPEN_EVENT, { bubbles: true, composed: true }));
    }

    private _requestClose (): void {
        if (!this.isOpen) return;

        /**
         * @ignore
         */
        this.dispatchEvent(new Event(ON_TOOLTIP_CLOSE_EVENT, { bubbles: true, composed: true }));
    }

    private _startHoverCloseTimer (): void {
        if (this._hoverCloseTimer !== undefined) return;
        this._hoverCloseTimer = setTimeout(() => {
            this._hoverCloseTimer = undefined;
            this._requestClose();
        }, 100);
    }

    private _cancelHoverCloseTimer (): void {
        if (this._hoverCloseTimer !== undefined) {
            clearTimeout(this._hoverCloseTimer);
            this._hoverCloseTimer = undefined;
        }
    }

    private _rebuildInteractionListeners (): void {
        this._teardownInteractionListeners();

        if (!this.triggers?.length) return;

        const controller = new AbortController();
        const { signal } = controller;
        this._interactionController = controller;

        const triggerEl = this._getTriggerElement();

        this.ownerDocument.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Escape' && this.isOpen) {
                this._requestClose();
            }
        }, { signal });

        if (!triggerEl) return;

        if (this.triggers.includes('hover')) {
            triggerEl.addEventListener('mouseenter', () => {
                this._cancelHoverCloseTimer();
                this._requestOpen();
            }, { signal });

            triggerEl.addEventListener('mouseleave', () => {
                this._startHoverCloseTimer();
            }, { signal });

            // panel mouseenter/leave for the hover bridge (includes the bridge pseudo-element)
            const panel = this.renderRoot.querySelector('.c-tooltip');
            if (panel) {
                panel.addEventListener('mouseenter', () => {
                    this._cancelHoverCloseTimer();
                }, { signal });

                panel.addEventListener('mouseleave', () => {
                    this._startHoverCloseTimer();
                }, { signal });
            }
        }

        if (this.triggers.includes('focus')) {
            // open on focus, close on blur unless focus moved into panel action content
            triggerEl.addEventListener('focusin', () => {
                this._requestOpen();
            }, { signal });

            triggerEl.addEventListener('focusout', (e: Event) => {
                const related = (e as FocusEvent).relatedTarget as Node | null;
                // relatedTarget is retargeted to the shadow host when focus moves into shadow DOM
                const staysInside = related && (this.contains(related) || related === this);
                if (!staysInside) {
                    this._requestClose();
                }
            }, { signal });
        }

        if (this.triggers.includes('click')) {
            triggerEl.addEventListener('click', (e: Event) => {
                e.stopPropagation();

                if (!this.isOpen) {
                    // Only click-opens toggle
                    this._openedByClick = true;
                    this._requestOpen();

                    return;
                }

                if (!this._openedByClick) {
                    this._openedByClick = true;

                    return;
                }

                this._requestClose();
            }, { signal });

            // Light-dismiss: click anywhere outside the panel and trigger
            this.ownerDocument.addEventListener('click', (e: Event) => {
                const target = e.composedPath()[0] as Node;
                const isInsidePanel = this.contains(target) || this.shadowRoot?.contains(target);
                const isInsideTrigger = triggerEl.contains(target) || target === triggerEl;
                if (!isInsidePanel && !isInsideTrigger && this.isOpen) {
                    this._requestClose();
                }
            }, { signal });
        }
    }

    private _teardownInteractionListeners (): void {
        this._interactionController?.abort();
        this._interactionController = undefined;
        this._cancelHoverCloseTimer();
    }

    private renderHeading (): TemplateResult {
        const tag = unsafeStatic(this.headingLevel);

        return html`<${tag}
                        id="${this._headingId}"
                        class="${componentClass}-heading"
                        data-test-id="${headingTestId}">${this.heading}</${tag}>`;
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
            position: preferredPosition,
            size,
            type,
            variant,
            _resolvedPosition,
            _mode: mode,
        } = this;

        const position = _resolvedPosition ?? preferredPosition;
        const isIconType = type === 'icon';

        const layerClasses = {
            [`${componentClass}-layer`]: true,
            [`${componentClass}-layer--${position}`]: true,
            [`${componentClass}-layer--type-${type}`]: true,
            'is-open': !!isOpen,
            'is-positioned': this._isPositioned,
            'is-anchorVisible': this._isAnchorVisible,
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
                        aria-labelledby="${isDialog && heading ? this._headingId : nothing}"
                        aria-label="${isDialog && !heading && aria?.label ? aria.label : nothing}"
                        aria-describedby="${isDialog ? this._contentId : nothing}">
                        ${isIconType ? nothing : html`<div class="${componentClass}-arrow" data-test-id="${componentSelector}-arrow"></div>`}
                        <div class="${componentClass}-body" data-test-id="${componentSelector}-body">
                            ${heading ? this.renderHeading() : nothing}
                            <div
                                id="${this._contentId}"
                                class="${componentClass}-content"
                                tabindex="${isDialog ? -1 : nothing}"
                                data-test-id="${componentSelector}-content">
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
