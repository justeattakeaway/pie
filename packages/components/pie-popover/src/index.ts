
import { html, unsafeCSS, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    RtlMixin,
    safeCustomElement,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import styles from './popover.scss?inline';
import {
    type PopoverProps,
    placements,
    defaultProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-popover';
const GAP = 8; // px gap between trigger and popover (per spec)
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * @tagname pie-popover
 * @event {CustomEvent} pie-popover-close - Fired when the popover is closed by the singleton logic (a new popover opened).
 * @slot - Default slot for popover content. Consumer is responsible for all content including any close controls.
 */
@safeCustomElement('pie-popover')
export class PiePopover extends RtlMixin(PieElement) implements PopoverProps {
    @property({ type: Boolean, reflect: true })
    public isOpen = defaultProps.isOpen;

    @property({ type: String })
    @validPropertyValues(componentSelector, placements, defaultProps.placement)
    public placement = defaultProps.placement;

    @property({ type: String })
    public triggerSelector: PopoverProps['triggerSelector'];

    private _resizeObserver: ResizeObserver | null = null;
    private _scrollHandler: (() => void) | null = null;
    private _resizeHandler: (() => void) | null = null;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    /**
     * Returns the trigger element from the document using `triggerSelector`.
     * Logs a warning in development if the selector is missing or resolves to null.
     */
    private _getTriggerElement (): HTMLElement | null {
        if (!this.triggerSelector) {
            // eslint-disable-next-line no-console
            console.warn(`[${componentSelector}]: No triggerSelector provided. Positioning and focus return will not work.`);
            return null;
        }

        const el = document.querySelector<HTMLElement>(this.triggerSelector);

        if (!el) {
            // eslint-disable-next-line no-console
            console.warn(`[${componentSelector}]: No element found for triggerSelector "${this.triggerSelector}".`);
        }

        return el;
    }

    /**
     * Computes popover position using getBoundingClientRect on the trigger
     * and sets CSS custom properties on the host for `position: fixed` placement.
     *
     * Placement values use block-then-inline-axis naming (`bottom-start`, `top-end`, etc.).
     * "start" and "end" map to the inline-start/end sides of the document — in LTR this
     * is left/right, in RTL it is right/left — so RTL is handled automatically without
     * consumers needing to change the prop value.
     *
     * Each axis flips independently if the popover would overflow the viewport.
     */
    private _computePosition (): void {
        const trigger = this._getTriggerElement();
        if (!trigger) return;

        const triggerRect = trigger.getBoundingClientRect();
        const popoverRect = this.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const isRTL = (this.getAttribute('dir') || document.dir) === 'rtl';
        const [blockAxis, inlineAxis] = (this.placement ?? defaultProps.placement).split('-') as ['top' | 'bottom', 'start' | 'end'];

        // Block axis (top / bottom) candidate positions
        const blockTop = {
            top: triggerRect.top - popoverRect.height - GAP,
            bottom: triggerRect.bottom + GAP,
        };

        // Inline axis (start / end) candidate left values.
        // In LTR: start = trigger's left edge, end = trigger's right edge minus popover width.
        // In RTL: start and end are mirrored.
        const inlineLeft = {
            start: isRTL ? triggerRect.right - popoverRect.width : triggerRect.left,
            end: isRTL ? triggerRect.left : triggerRect.right - popoverRect.width,
        };

        const blockOverflows = (b: 'top' | 'bottom') => b === 'top'
            ? blockTop.top < 0
            : blockTop.bottom + popoverRect.height > vh;

        const inlineOverflows = (i: 'start' | 'end') => {
            const l = inlineLeft[i];
            return l < 0 || l + popoverRect.width > vw;
        };

        // Flip each axis independently if the preferred side overflows
        const resolvedBlock = blockOverflows(blockAxis)
            ? (blockAxis === 'top' ? 'bottom' : 'top')
            : blockAxis;

        const resolvedInline = inlineOverflows(inlineAxis)
            ? (inlineAxis === 'start' ? 'end' : 'start')
            : inlineAxis;

        this.style.setProperty('--popover-top', `${blockTop[resolvedBlock]}px`);
        this.style.setProperty('--popover-left', `${inlineLeft[resolvedInline]}px`);
    }

    /**
     * Focuses the first focusable element inside the default slot.
     * If none is found, focus stays on the trigger.
     */
    private _focusFirstFocusable (): void {
        const slot = this.shadowRoot?.querySelector('slot');
        if (!slot) return;

        const assignedElements = slot.assignedElements({ flatten: true });
        for (const el of assignedElements) {
            const focusable = el.matches(FOCUSABLE_SELECTOR)
                ? el as HTMLElement
                : el.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);

            if (focusable) {
                focusable.focus();
                return;
            }
        }
    }

    /**
     * Returns focus to the trigger element on close.
     * Mirrors the `_returnFocus()` pattern from pie-modal.
     */
    private _returnFocus (): void {
        if (!this.triggerSelector) return;
        document.querySelector<HTMLElement>(this.triggerSelector)?.focus();
    }

    /**
     * Adds passive scroll, window resize, and ResizeObserver listeners to recompute position while open.
     */
    private _addListeners (): void {
        this._scrollHandler = () => this._computePosition();
        window.addEventListener('scroll', this._scrollHandler, { passive: true });

        this._resizeHandler = () => this._computePosition();
        window.addEventListener('resize', this._resizeHandler, { passive: true });

        const trigger = this._getTriggerElement();
        if (trigger) {
            this._resizeObserver = new ResizeObserver(() => this._computePosition());
            this._resizeObserver.observe(trigger);
        }
    }

    /**
     * Removes scroll, window resize, and ResizeObserver listeners.
     */
    private _removeListeners (): void {
        if (this._scrollHandler) {
            window.removeEventListener('scroll', this._scrollHandler);
            this._scrollHandler = null;
        }
        if (this._resizeHandler) {
            window.removeEventListener('resize', this._resizeHandler);
            this._resizeHandler = null;
        }
        this._resizeObserver?.disconnect();
        this._resizeObserver = null;
    }

    updated (changedProperties: PropertyValues<this>): void {
        if (!changedProperties.has('isOpen')) return;

        if (this.isOpen) {
            this._computePosition();
            this._focusFirstFocusable();
            this._addListeners();
        } else {
            this._returnFocus();
            this._removeListeners();
        }
    }

    disconnectedCallback (): void {
        super.disconnectedCallback();
        this._removeListeners();
    }

    render () {
        return html`
            <div class="c-popover" data-test-id="pie-popover">
                <slot></slot>
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PiePopover;
    }
}
