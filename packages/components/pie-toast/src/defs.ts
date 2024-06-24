import { type ComponentDefaultPropsGeneric } from '@justeattakeaway/pie-webc-core';

// TODO - please remove the eslint disable comment below when you add props to this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type ActionProps = {
  /**
   * The text to display inside the button.
   */
  text: string;

  /**
   * The ARIA label for the button.
   */
  ariaLabel?: string;
};

export interface ToastProps {
  /**
   * When true, the notification is set to be open and visible.
   */
  isOpen?: boolean;
  /**
   * When true, allows dismissing the notification by clicking on the close button.
   */
  isDismissible?: boolean;
  /**
   * The message content of the toast.
   */
  message?: string;
  /**
   * The leading action for the toast.
   */
  leadingAction?: ActionProps;
}

export const componentSelector = 'pie-toast';
export const componentClass = 'c-toast';

/**
 * Event name for when the toast is closed.
 *
 * @constant
 */
export const ON_TOAST_CLOSE_EVENT = `${componentSelector}-close`;

/**
 * Event name for when the toast is opened.
 *
 * @constant
 */
export const ON_TOAST_OPEN_EVENT = `${componentSelector}-open`;

/**
 * Event name for when the toast leading action is clicked.
 *
 * @constant
 */
export const ON_TOAST_LEADING_ACTION_CLICK_EVENT = `${componentSelector}-leading-action-click`;

export type DefaultProps = ComponentDefaultPropsGeneric<ToastProps, 'isOpen' | 'isDismissible'>;

export const defaultProps: DefaultProps = {
    isOpen: true,
    isDismissible: true,
};
