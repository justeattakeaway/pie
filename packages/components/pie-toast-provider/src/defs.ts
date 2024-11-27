import { type ToastProps } from '@justeattakeaway/pie-toast';

export const PRIORITY_ORDER: { [x: string]: number } = {
    'error-actionable': 1,
    error: 2,
    'warning-actionable': 3,
    'positive-actionable': 4,
    'info-actionable': 5,
    'neutral-actionable': 6,
    warning: 7,
    positive: 8,
    info: 9,
    neutral: 10,
};

export interface ExtendedToastProps extends ToastProps {
    /**
     * Callback for when the toast is closed.
     */
    onPieToastClose?: () => void;

    /**
     * Callback for when the toast is opened.
     */
    onPieToastOpen?: () => void;

    /**
     * Callback for when the leading action is clicked.
     */
    onPieToastLeadingActionClick?: (event: Event) => void;
}

export interface ToastProviderProps {
    /**
     * Default options for all toasts.
     */
    options?: Partial<ExtendedToastProps>;
}

export const defaultProps: ToastProviderProps = {
    options: {},
};

/**
 * Event name for when the chip is closed.
 *
 * @constant
 */

export const ON_TOAST_PROVIDER_QUEUE_UPDATE_EVENT = 'pie-toast-provider-queue-update';
