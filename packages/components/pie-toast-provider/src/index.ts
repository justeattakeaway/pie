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

    @state()
    private _toasts: ExtendedToastProps[] = [];

    @state()
    private _visibleToasts: ExtendedToastProps[] = [];

    @state()
    private _dismissingToasts: ExtendedToastProps[] = [];

    @state()
    private _collapsingToasts: ExtendedToastProps[] = [];

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
        this._dismissingToasts = this._dismissingToasts.filter((t) => t !== toast);
        this._collapsingToasts = [...this._collapsingToasts, toast];
    }

    /**
     * Called after the collapse transition ends. Removes the toast from DOM and promotes the next queued toast.
     */
    private _finalizeCollapse (toast: ExtendedToastProps) {
        this._collapsingToasts = this._collapsingToasts.filter((t) => t !== toast);
        this._visibleToasts = this._visibleToasts.filter((t) => t !== toast);
        this._showNextToast();
    }

    /**
     * Fills visible slots from the queue up to MAX_VISIBLE_TOASTS.
     */
    private _showNextToast () {
        while (this._visibleToasts.length < MAX_VISIBLE_TOASTS && this._toasts.length > 0) {
            const [nextToast, ...remainingToasts] = this._toasts;
            this._visibleToasts = [...this._visibleToasts, nextToast];
            this._toasts = remainingToasts;
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
        this._toasts = [];
        this._visibleToasts = [];
        this._dismissingToasts = [];
        this._collapsingToasts = [];
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

        const latestToast = _visibleToasts[_visibleToasts.length - 1] ?? null;
        const isError = latestToast?.variant === 'error';

        return html`
        <div
            class=${classMap(classes)}
            data-test-id="pie-toast-provider">
            <div
                class="c-toast-provider-announcer"
                role="${isError ? 'alert' : 'status'}"
                aria-live="${isError ? 'assertive' : 'polite'}"
                aria-atomic="true"
                data-test-id="pie-toast-provider-announcer">
                ${latestToast?.message ?? ''}
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
@pie-toast-open="${() => {
    if (!this._dismissingToasts.includes(toast)) toast.onPieToastOpen?.();
}}"
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
