import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['neutral', 'neutral-alternative', 'info', 'success', 'warning', 'error'] as const;
export const headingLevels = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const positions = ['inline-content', 'full-width'] as const;
export const actionSizes = ['small-productive', 'xsmall'] as const;

type AriaProps = {
  close?: string;
  label?: string;
};

export type ActionProps = {
  /**
   * The text to display inside the button.
   */
  text: string;

  /**
   * The ARIA label for the button.
   */
  ariaLabel?: string;

  /**
   * The size of the button.
   */
  size?: typeof actionSizes[number];
};

export interface NotificationProps {
  /**
   * Sets the variant of the notification.
   */
  variant?: typeof variants[number];

  /**
   * Defines the proper styles, whether the component appears within the content or at the top of the interface
   */
  position?: typeof positions[number];

  /**
   * When true, allows dismissing the notification by clicking on the close button.
   */
  isDismissible?: boolean;

  /**
   * When true, aligns the footer with the header and icons, making the component compact.
   */
  isCompact?: boolean;

  /**
   * The text to display in the notification's heading.
   */
  heading?: string;

  /**
   * The HTML heading tag to use for the notification's heading. Can be h2-h6.
   */
  headingLevel?: typeof headingLevels[number];

  /**
   * When true, the icon will be hidden.
   */
  hideIcon?: boolean;

  /**
   * When true, the notification is set to be open and visible.
   */
  isOpen?: boolean;

  /**
   * The leading action for the notification.
   */
  leadingAction?: ActionProps;

  /**
   * The supporting action for the notification.
   * Will only render if `leadingAction` is passed
   */
  supportingAction?: ActionProps;

  /**
   * When true, action buttons will stack on narrow screens.
   */
  hasStackedActions?: boolean;

  /**
    * The ARIA labels used for various parts of the notification.
    * Only pass label if there is no heading to ensure the region is announced with a title
    */
  aria?: AriaProps;
}

export const componentSelector = 'pie-notification';
export const componentClass = 'c-notification';

/**
 * Event name for when the notification is closed.
 *
 * @constant
 */
export const ON_NOTIFICATION_CLOSE_EVENT = `${componentSelector}-close`;

/**
 * Event name for when the notification is opened.
 *
 * @constant
 */
export const ON_NOTIFICATION_OPEN_EVENT = `${componentSelector}-open`;

/**
 * Event name for when the notification leading action is clicked.
 *
 * @constant
 */
export const ON_NOTIFICATION_LEADING_ACTION_CLICK_EVENT = `${componentSelector}-leading-action-click`;

/**
 * Event name for when the notification supporting action is clicked.
 *
 * @constant
 */
export const ON_NOTIFICATION_SUPPORTING_ACTION_CLICK_EVENT = `${componentSelector}-supporting-action-click`;

export type DefaultProps = ComponentDefaultProps<NotificationProps, keyof Omit<NotificationProps, 'heading' | 'aria'>>;

export const defaultActionButtonProps: ActionProps = {
    text: '',
    ariaLabel: '',
    size: 'small-productive',
};

export const defaultProps: DefaultProps = {
    variant: 'neutral',
    position: 'inline-content',
    isDismissible: false,
    isCompact: false,
    headingLevel: 'h2',
    hideIcon: false,
    isOpen: true,
    hasStackedActions: false,
    leadingAction: defaultActionButtonProps,
    supportingAction: defaultActionButtonProps,
};
