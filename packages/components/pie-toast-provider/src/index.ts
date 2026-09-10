import {
    html,
    nothing,
    unsafeCSS,
    type PropertyValues,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { state, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import { repeat } from 'lit/directives/repeat.js';
import {
    dispatchCustomEvent,
    safeCustomElement,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import { defaultProps as toastDefaultProps } from '@justeattakeaway/pie-toast';
import styles from './toast-provider.scss?inline';
import {
    positions,
    defaultProps,
    PRIORITY_ORDER,
    MAX_VISIBLE_TOASTS,
    type Priority,
    type ToastProviderProps,
    type ExtendedToastProps,
    ON_TOAST_PROVIDER_QUEUE_UPDATE_EVENT,
} from './defs';

// Valid values available to consumers
export * from './defs';
export { toaster } from './toaster';

const componentSelector = 'pie-toast-provider';

/**
 * How long to wait for a dismissal phase's motion event before advancing anyway.
 *
 * Dismissal runs in two phases, each driven by a motion event: the toast slides out
 * (`animationend`), then its row collapses (`transitionend`). Neither event fires when motion is
 * disabled — a consumer setting `animation: none` or `transition: none`, or a hidden element.
 * Without a fallback the toast would stay mounted forever and no queued toast would ever be
 * promoted into its slot.
 *
 * Comfortably longer than the 200ms slide-out and 200ms collapse, so it never pre-empts real
 * motion.
 */
const MOTION_FALLBACK_MS = 500;

/**
 * @tagname pie-toast-provider
 * @event {CustomEvent} pie-toast-provider-queue-update - when a toast is added or removed from the queue.
 */
@safeCustomElement('pie-toast-provider')
export class PieToastProvider extends PieElement implements ToastProviderProps {
    @property({ type: Object })
    public options = defaultProps.options;

    @property({ type: String })
    @validPropertyValues(componentSelector, positions, defaultProps.position)
    public position = defaultProps.position;

    @property({ type: Boolean })
    public isStacked = defaultProps.isStacked;

    @state()
    private _toasts: ExtendedToastProps[] = [];

    @state()
    private _visibleToasts: ExtendedToastProps[] = [];

    @state()
    private _dismissingToasts: ExtendedToastProps[] = [];

    @state()
    private _collapsingToasts: ExtendedToastProps[] = [];

    /**
     * Messages currently held in the live regions, in the order they became visible.
     *
     * The toast objects themselves are reused as entries: they are unique per `createToast`, which
     * gives `repeat` a stable key and lets the entries be pruned by identity when a toast leaves.
     */
    @state()
    private _announcements: ExtendedToastProps[] = [];

    /** Pending {@link MOTION_FALLBACK_MS} timers, keyed by the toast they will advance. */
    private _motionFallbacks = new Map<ExtendedToastProps, ReturnType<typeof setTimeout>>();

    public disconnectedCallback (): void {
        this._clearMotionFallbacks();
        super.disconnectedCallback();
    }

    /**
     * Replaces any pending fallback for `toast` with one that runs `advance`.
     *
     * Each phase supersedes the previous phase's fallback, so a toast only ever has one timer.
     */
    private _scheduleMotionFallback (toast: ExtendedToastProps, advance: () => void): void {
        this._clearMotionFallback(toast);
        this._motionFallbacks.set(toast, setTimeout(advance, MOTION_FALLBACK_MS));
    }

    private _clearMotionFallback (toast: ExtendedToastProps): void {
        const timer = this._motionFallbacks.get(toast);

        if (timer) {
            clearTimeout(timer);
            this._motionFallbacks.delete(toast);
        }
    }

    private _clearMotionFallbacks (): void {
        this._motionFallbacks.forEach((timer) => clearTimeout(timer));
        this._motionFallbacks.clear();
    }

    updated (changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('_toasts' as keyof PieToastProvider)) {
            this._dispatchQueueUpdateEvent();
        }
    }

    private _dispatchQueueUpdateEvent (): void {
        dispatchCustomEvent(
            this, ON_TOAST_PROVIDER_QUEUE_UPDATE_EVENT,
            this._toasts,
        );
    }

    /**
     * Get the priority for a toast.
     * @param {string} type - The variant type of the toast.
     * @param {boolean} hasAction - Whether the toast has an action.
     * @returns {number} - The priority based on the variant and action.
     */
    private getPriority (type: ExtendedToastProps['variant'] = toastDefaultProps.variant, hasAction = false): number {
        const key: Priority = `${type}${hasAction ? '-actionable' : ''}`;
        return PRIORITY_ORDER[key];
    }

    /**
     * Starts the slide-out animation for the dismissed toast.
     */
    private _dismissToast (toast: ExtendedToastProps) {
        if (this._dismissingToasts.includes(toast)) return;
        toast.onPieToastClose?.();
        this._dismissingToasts = [...this._dismissingToasts, toast];
        this._scheduleMotionFallback(toast, () => this._finalizeDismiss(toast));
    }

    /**
     * Forwards the toast's open event to the consumer.
     *
     * `isOpen` is bound with the `live` directive, so a toast that sets `isOpen` to false while
     * dismissing is reopened on the next render in order to keep it visible for the slide-out
     * animation. That reopen dispatches a second `pie-toast-open`, which is not a real open, so it
     * is not forwarded.
     */
    private _handleToastOpen (toast: ExtendedToastProps) {
        if (this._dismissingToasts.includes(toast)) return;
        toast.onPieToastOpen?.();
    }

    private _getToastClass (toast: ExtendedToastProps): string {
        if (this._dismissingToasts.includes(toast)) return 'pie-animation--slide-out';
        if (this._collapsingToasts.includes(toast)) return '';
        return 'pie-animation--slide-in';
    }

    private _getToastDuration (toast: ExtendedToastProps) {
        if (this._dismissingToasts.includes(toast) || this._collapsingToasts.includes(toast)) return null;
        return typeof toast.duration === 'undefined' ? nothing : toast.duration;
    }

    /**
     * Starts the height-collapse phase after the slide-out animation ends.
     */
    private _finalizeDismiss (toast: ExtendedToastProps) {
        if (!this._dismissingToasts.includes(toast)) return;

        this._dismissingToasts = this._dismissingToasts.filter((t) => t !== toast);
        this._collapsingToasts = [...this._collapsingToasts, toast];
        this._scheduleMotionFallback(toast, () => this._finalizeCollapse(toast));
    }

    /**
     * Called after the collapse transition ends. Removes the toast from DOM and promotes the next queued toast.
     */
    private _finalizeCollapse (toast: ExtendedToastProps) {
        if (!this._collapsingToasts.includes(toast)) return;

        this._clearMotionFallback(toast);
        this._collapsingToasts = this._collapsingToasts.filter((t) => t !== toast);
        this._visibleToasts = this._visibleToasts.filter((t) => t !== toast);
        this._announcements = this._announcements.filter((t) => t !== toast);
        this._showNextToast();
    }

    /**
     * Fills the visible slots from the queue.
     *
     * The loop only ever adds toasts, so turning `isStacked` off while several are on screen
     * does not remove any: the extras stay until they dismiss normally, then the provider
     * settles back to one at a time.
     */
    private _showNextToast () {
        const maxVisibleToasts = this.isStacked ? MAX_VISIBLE_TOASTS : 1;

        while (this._visibleToasts.length < maxVisibleToasts && this._toasts.length > 0) {
            const [nextToast, ...remainingToasts] = this._toasts;
            this._visibleToasts = [...this._visibleToasts, nextToast];
            this._toasts = remainingToasts;
            this._announcements = [...this._announcements, nextToast];
        }
    }

    /**
     * Adds a new toast to the queue (sorted by priority) and fills visible slots.
     * @param {ToastProps} toast - The toast props to display.
     */
    public createToast (toast: ExtendedToastProps) {
        const newToast = { ...toastDefaultProps, ...this.options, ...toast };

        this._toasts = [...this._toasts, newToast].sort((a, b) => {
            const priorityA = this.getPriority(a.variant, !!a.leadingAction?.text);
            const priorityB = this.getPriority(b.variant, !!b.leadingAction?.text);

            return priorityA - priorityB;
        });

        this._showNextToast();
    }

    /**
     * Clears all toasts from the queue and dismisses all visible toasts.
     */
    public clearToasts () {
        this._clearMotionFallbacks();
        this._toasts = [];
        this._visibleToasts = [];
        this._dismissingToasts = [];
        this._collapsingToasts = [];
        this._announcements = [];
    }

    render () {
        const {
            position,
            _visibleToasts,
        } = this;

        const classes = {
            'c-toast-provider': true,
            [`c-toast-provider--${position}`]: true,
        };

        // Two regions with fixed politeness, rather than one region that switches: a neutral toast
        // arriving after an error must not downgrade the error's announcement.
        //
        // `aria-atomic="false"` is what makes batching work. Lit renders several newly visible
        // toasts in a single update, and assistive tech announces only the nodes added in that
        // update, so each message is read in turn instead of the last one replacing the rest.
        // `aria-relevant` defaults to `additions text`, so pruning a departed toast is silent.
        const politeAnnouncements = this._announcements.filter(({ variant }) => variant !== 'error');
        const assertiveAnnouncements = this._announcements.filter(({ variant }) => variant === 'error');

        const renderAnnouncements = (announcements: ExtendedToastProps[]) => repeat(
            announcements,
            (toast) => toast,
            (toast) => html`<div>${toast.message}</div>`,
        );

        return html`
        <div
            class=${classMap(classes)}
            data-test-id="pie-toast-provider">
            <div
                class="c-toast-provider-announcer"
                role="status"
                aria-live="polite"
                aria-atomic="false"
                data-test-id="pie-toast-provider-announcer">
                ${renderAnnouncements(politeAnnouncements)}
            </div>
            <div
                class="c-toast-provider-announcer"
                role="alert"
                aria-live="assertive"
                aria-atomic="false"
                data-test-id="pie-toast-provider-announcer-assertive">
                ${renderAnnouncements(assertiveAnnouncements)}
            </div>
            ${repeat(_visibleToasts, (toast) => toast, (toast) => html`
                <div
                    class="c-toast-provider-item${this._collapsingToasts.includes(toast) ? ' c-toast-provider-item--collapsing' : ''}"
                    @transitionend="${() => { if (this._collapsingToasts.includes(toast)) this._finalizeCollapse(toast); }}">
                    <pie-toast
                        class="${this._getToastClass(toast)}"
                        .isOpen="${live(true)}"
                        message="${toast.message}"
                        variant="${ifDefined(toast.variant)}"
                        ?isStrong="${toast.isStrong}"
                        ?isDismissible="${toast.isDismissible}"
                        ?isMultiline="${toast.isMultiline}"
                        .leadingAction="${toast.leadingAction}"
                        .aria="${{ ...toast.aria, live: 'off' as const }}"
                        .duration="${this._getToastDuration(toast)}"
                        @pie-toast-close="${() => this._dismissToast(toast)}"
                        @pie-toast-open="${() => this._handleToastOpen(toast)}"
                        @pie-toast-leading-action-click="${toast.onPieToastLeadingActionClick}"
                        @animationend="${() => { if (this._dismissingToasts.includes(toast)) this._finalizeDismiss(toast); }}">
                    </pie-toast>
                </div>
            `)}
            </div>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToastProvider;
    }
}
