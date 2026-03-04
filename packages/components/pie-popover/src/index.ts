
import { html, unsafeCSS, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    RtlMixin,
    safeCustomElement,
    validPropertyValues,
    dispatchCustomEvent,
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
const ON_POPOVER_CLOSE_EVENT = `${componentSelector}-close`;

// Module-level singleton tracking — only one popover open at a time
let currentOpenPopover: WeakRef<PiePopover> | null = null;

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
     * Flips placement if the popover would overflow the viewport.
     */
    private _computePosition (): void {
        const trigger = this._getTriggerElement();
        if (!trigger) return;

        const triggerRect = trigger.getBoundingClientRect();
        const popoverRect = this.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Resolve effective placement, accounting for RTL
        let effectivePlacement = this.placement ?? defaultProps.placement;
        const isRTL = (this.getAttribute('dir') || document.dir) === 'rtl';

        if (isRTL) {
            if (effectivePlacement === 'left') effectivePlacement = 'right';
            else if (effectivePlacement === 'right') effectivePlacement = 'left';
        }

        // Calculate candidate top/left for preferred placement
        const candidates: Record<typeof placements[number], { top: number; left: number }> = {
            bottom: {
                top: triggerRect.bottom + GAP,
                left: triggerRect.left,
            },
            top: {
                top: triggerRect.top - popoverRect.height - GAP,
                left: triggerRect.left,
            },
            right: {
                top: triggerRect.top,
                left: triggerRect.right + GAP,
            },
            left: {
                top: triggerRect.top,
                left: triggerRect.left - popoverRect.width - GAP,
            },
        };

        const opposites: Record<typeof placements[number], typeof placements[number]> = {
            bottom: 'top',
            top: 'bottom',
            right: 'left',
            left: 'right',
        };

        /**
         * Checks whether a given placement's computed position would overflow the viewport.
         */
        const wouldOverflow = (p: typeof placements[number]): boolean => {
            const { top, left } = candidates[p];
            if (p === 'bottom') return top + popoverRect.height > vh;
            if (p === 'top') return top < 0;
            if (p === 'right') return left + popoverRect.width > vw;
            if (p === 'left') return left < 0;
            return false;
        };

        // Flip if preferred placement overflows
        let resolvedPlacement = effectivePlacement;
        if (wouldOverflow(effectivePlacement)) {
            const opposite = opposites[effectivePlacement];
            // Prefer the side with more space
            resolvedPlacement = wouldOverflow(opposite) ? effectivePlacement : opposite;
        }

        const { top, left } = candidates[resolvedPlacement];
        this.style.setProperty('--popover-top', `${top}px`);
        this.style.setProperty('--popover-left', `${left}px`);
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
     * Adds passive scroll and ResizeObserver listeners to recompute position while open.
     */
    private _addListeners (): void {
        this._scrollHandler = () => this._computePosition();
        window.addEventListener('scroll', this._scrollHandler, { passive: true });

        const trigger = this._getTriggerElement();
        if (trigger) {
            this._resizeObserver = new ResizeObserver(() => this._computePosition());
            this._resizeObserver.observe(trigger);
        }
    }

    /**
     * Removes scroll and ResizeObserver listeners.
     */
    private _removeListeners (): void {
        if (this._scrollHandler) {
            window.removeEventListener('scroll', this._scrollHandler);
            this._scrollHandler = null;
        }
        this._resizeObserver?.disconnect();
        this._resizeObserver = null;
    }

    /**
     * Enforces singleton: closes any previously open popover before opening this one.
     */
    private _enforceSingleton (): void {
        const previous = currentOpenPopover?.deref();
        if (previous && previous !== this) {
            previous.isOpen = false;
            dispatchCustomEvent(previous, ON_POPOVER_CLOSE_EVENT, { targetPopover: previous });
        }
        currentOpenPopover = new WeakRef(this);
    }

    updated (changedProperties: PropertyValues<this>): void {
        if (!changedProperties.has('isOpen')) return;

        if (this.isOpen) {
            this._enforceSingleton();
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
