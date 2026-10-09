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

// Attempts `focusPanel()` makes, one frame apart, before giving up.
const FOCUS_PANEL_MAX_ATTEMPTS = 5;

const nextFrame = (): Promise<number> => new Promise(requestAnimationFrame);

// True when the element establishes a containing block through a property other than `position`.
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

    // `size` and `style` containment do not establish a containing block.
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

// The ancestors that clip the trigger, excluding the root element and body (the viewport clip).
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
const getClipRect = (element: Element): DOMRect => {
    const { left, top } = element.getBoundingClientRect();
    const {
        clientLeft, clientTop, clientWidth, clientHeight,
    } = element;

    return new DOMRect(left + clientLeft, top + clientTop, clientWidth, clientHeight);
};

// Intersects two rects; returns `null` when they do not overlap.
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
 * @event {Event} pie-tooltip-close - When the close button is clicked, Escape is pressed, or a configured trigger asks to dismiss the panel. Set `isOpen` to `false` in response.
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

    // Unique per instance so each panel's `aria-labelledby` resolves to its own heading.
    private readonly _instanceId = crypto.randomUUID();

    private get _headingId (): string {
        return `pie-tooltip-heading-${this._instanceId}`;
    }

    static styles = unsafeCSS(styles);

    private get _mode (): TooltipMode | undefined {
        if (this._hasActionContent === undefined) {
            return undefined;
        }

        // Entering the panel is dialog interaction; only hover/follow panels are tooltips.
        return (this._hasActionContent || this.isDismissible) ? 'dialog' : 'tooltip';
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

        // A dismissible panel is a dialog, so re-derive the role with the prop.
        if (changedProperties.has('isDismissible')) {
            this.resolveMode();
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

        // A new trigger needs tracking rebuilt, so stop before the start below.
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

    // Moves focus to the panel's content in dialog mode; resolves `false` outside it.
    public async focusPanel (): Promise<boolean> {
        if (this._mode !== 'dialog') {
            return false;
        }

        // Wait for the opening update to commit and one frame for positioning before focusing.
        await this.updateComplete;
        await nextFrame();

        const content = this.renderRoot.querySelector<HTMLElement>(`.${componentClass}-content`);

        if (!content) {
            return false;
        }

        const focusLanded = () => this.shadowRoot?.activeElement === content;

        // Safari can silently drop a `focus()` call on a panel whose reveal is still settling.
        for (let attempt = 0; attempt < FOCUS_PANEL_MAX_ATTEMPTS; attempt++) {
            content.focus({ preventScroll: true });

            if (focusLanded()) {
                return true;
            }

            // eslint-disable-next-line no-await-in-loop
            await nextFrame();
        }

        return false;
    }

    // Re-anchors the panel on scroll, resize and dir changes, coalesced to one frame each.
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

        // `scroll` is not composed, so scroll containers in other shadow roots need their own listener.
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

        // A trigger inside a `display: none` container has no box to measure until it is shown.
        this._triggerObserver = new ResizeObserver(() => {
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

    // Uses `fixed` only when it escapes an overflow clip that `absolute` would not.
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

        // Both answers change only when the ancestor chain does.
        this._refreshTriggerClippers();

        flattenedAncestors(this).forEach((element) => {
            const styles = getComputedStyle(element);

            // `display: contents` generates no box, so it can neither be a containing block nor clip.
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

            // Root/body overflow propagates to the viewport, which no positioning scheme escapes.
            const propagatesOverflowToViewport = element === documentElement || element === body;

            // Counted after the containing-block flags so an ancestor that is both is counted correctly.
            if (clips && !propagatesOverflowToViewport) {
                if (isAtOrAboveAbsoluteContainingBlock) {
                    absoluteClippingAncestors.push(element);
                }

                if (isAtOrAboveFixedContainingBlock) {
                    fixedClippingAncestors.push(element);
                }
            }
        });

        // A fixed box's clippers are a subset of an absolute box's, so fewer always means better.
        const useFixed = fixedClippingAncestors.length < absoluteClippingAncestors.length;

        this.style.position = useFixed ? 'fixed' : '';
        this._overlayClippers = useFixed ? fixedClippingAncestors : absoluteClippingAncestors;
    }

    // Writes the trigger's position, relative to the containing block's origin, as CSS variables.
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

        // Anchor to the trigger's visible part, so the arrow points at what the reader can see.
        const visibleRect = this._triggerClippers.reduce<DOMRect | null>(
            (rect, clipper) => (rect ? intersectRects(rect, getClipRect(clipper)) : null),
            triggerElement.getBoundingClientRect(),
        );

        // Nothing of the trigger is left to point at.
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

    // Cached because `projectOverTrigger` runs on every re-anchoring frame.
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

        const controller = new AbortController();
        const { signal } = controller;
        this._interactionController = controller;

        // Escape dismisses the panel whether or not a trigger is configured.
        this.ownerDocument.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Escape' && this.isOpen) {
                this._requestClose();
            }
        }, { signal });

        if (!this.triggers?.length) return;

        const triggerEl = this._getTriggerElement();

        if (!triggerEl) return;

        if (this.triggers.includes('hover')) {
            triggerEl.addEventListener('mouseenter', () => {
                this._cancelHoverCloseTimer();
                this._requestOpen();
            }, { signal });

            triggerEl.addEventListener('mouseleave', () => {
                this._startHoverCloseTimer();
            }, { signal });

            // panel mouseenter/leave for the hover bridge
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
            // open on focus, close on blur unless focus moved into the panel
            triggerEl.addEventListener('focusin', () => {
                this._requestOpen();
            }, { signal });

            triggerEl.addEventListener('focusout', (e: Event) => {
                const related = (e as FocusEvent).relatedTarget as Node | null;
                // relatedTarget retargets to the shadow host when focus moves into shadow DOM
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
                        data-test-id="${componentSelector}-heading">${this.heading}</${tag}>`;
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
            'has-action': this._hasActionContent === true,
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
                        aria-label="${isDialog && !heading && aria?.label ? aria.label : nothing}">
                        ${isIconType ? nothing : html`<div class="${componentClass}-arrow" data-test-id="${componentSelector}-arrow"></div>`}
                        <div class="${componentClass}-body">
                            ${heading ? this.renderHeading() : nothing}
                            <div
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
