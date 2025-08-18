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
    private _currentToast: ExtendedToastProps | null = null;

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
     * Handles the dismissal of the current toast and displays the next one in the queue (if any).
     */
    private _dismissToast () {
        this._currentToast?.onPieToastClose?.();
        this._currentToast = null;
        requestAnimationFrame(() => { this._showNextToast(); });
    }

    /**
     * Displays the next toast in the queue, if available.
     */
    private _showNextToast () {
        if (this._toasts.length > 0) {
            const [nextToast, ...remainingToasts] = this._toasts;
            this._currentToast = nextToast;
            this._toasts = remainingToasts;
        } else {
            this._currentToast = null;
        }
    }

    /**
     * Adds a new toast to the queue and triggers its display if no toast is currently active.
     * @param {ToastProps} toast - The toast props to display.
     */
    public createToast (toast: ExtendedToastProps) {
        const newToast = { ...toastDefaultProps, ...this.options, ...toast };

        this._toasts = [...this._toasts, newToast].sort((a, b) => {
            const priorityB = this.getPriority(b.variant, !!b.leadingAction?.text);
            const priorityA = this.getPriority(a.variant, !!a.leadingAction?.text);

            return priorityA - priorityB;
        });

        if (!this._currentToast) {
            this._showNextToast();
        }
    }

    /**
     *
     * Clears all toasts from the queue and dismisses the currently visible toast.
     */
    public clearToasts () {
        this._toasts = [];
        this._currentToast = null;
    }

    render () {
        const {
            position,
            _currentToast,
        } = this;

        const classes = {
            'c-toast-provider': true,
            [`c-toast-provider--${position}`]: true,
        };

        const toastClasses = {
            'pie-animation--slide-in': Boolean(_currentToast),
            'pie-animation--slide-out': _currentToast === null,
        };

        return html`
        <div 
            class=${classMap(classes)}
            data-test-id="pie-toast-provider">
            ${_currentToast &&
            html`
                <pie-toast
                    class=${classMap(toastClasses)}
                    message="${_currentToast.message}"
                    variant="${ifDefined(_currentToast.variant)}"
                    ?isStrong="${_currentToast.isStrong}"
                    ?isDismissible="${_currentToast.isDismissible}"
                    ?isMultiline="${_currentToast.isMultiline}"
                    .leadingAction="${_currentToast.leadingAction}"
                    .duration="${typeof _currentToast.duration === 'undefined' ? nothing : _currentToast.duration}"
                    @pie-toast-close="${this._dismissToast}"
                    @pie-toast-open="${_currentToast.onPieToastOpen}"
                    @pie-toast-leading-action-click="${_currentToast.onPieToastLeadingActionClick}">
                </pie-toast>
            `}
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
