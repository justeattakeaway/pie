import { type ToastProps } from '@justeattakeaway/pie-toast';

import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const PRIORITY_ORDER = {
    'error-actionable': 1,
    error: 2,
    'warning-actionable': 3,
    'success-actionable': 4,
    'info-actionable': 5,
    'neutral-actionable': 6,
    warning: 7,
    success: 8,
    info: 9,
    neutral: 10,
} as const;

export type Priority = keyof typeof PRIORITY_ORDER;

export interface ExtendedToastProps extends ToastProps {
    /**
     * Triggered when the user interacts with the close icon or when the toast auto dismiss.
     */
    onPieToastClose?: () => void;

    /**
     * Triggered when the toast is opened.
     */
    onPieToastOpen?: () => void;

    /**
     * Triggered when the user interacts with the leading action.
     */
    onPieToastLeadingActionClick?: (event: Event) => void;
}

export interface ToastProviderProps {
    /**
     * Default options for all toasts; accepts all toast props.
     */
    options?: Partial<ExtendedToastProps>;
}

export type DefaultProps = ComponentDefaultProps<ToastProviderProps>;

export const defaultProps: DefaultProps = {
    options: {},
};

/**
 * Event name for when the toast provider queue is updated.
 *
 * @constant
 */

export const ON_TOAST_PROVIDER_QUEUE_UPDATE_EVENT = 'pie-toast-provider-queue-update';
