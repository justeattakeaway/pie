export const variants = ['neutral', 'neutral-alternative', 'info', 'success', 'warning', 'error'] as const;
export const headingLevels = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;

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
   * The optional action associated to the action.
   *
   * @returns void
   */
  onClick?: () => void;
};

export interface NotificationProps {
  /**
   * Set the variant of the notification.
   */
  variant?: typeof variants[number];

  /**
   * When true, the footer aligns to the header and icons which makes the component compact.
   */
  isCompact?: boolean;

  /**
   * The text to display in the notification's heading.
   */
  heading?: string;

  /**
   * The HTML heading tag to use for the notification's heading. Can be h1-h6.
   */
  headingLevel?: typeof headingLevels[number];

  /**
   * Option to hide the icon regardless its variant or if user provided an icon.
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
   */
  supportingAction?: ActionProps;
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
 * Event name for when the notification back button is clicked.
 *
 * @constant
 */
export const ON_NOTIFICATION_BACK_EVENT = `${componentSelector}-back`;

/**
 * Event name for when the notification leading action is clicked.
 *
 * @constant
 */
export const ON_NOTIFICATION_LEADING_ACTION_CLICK = `${componentSelector}-leading-action-click`;

/**
 * Event name for when the notification supporting action is clicked.
 *
 * @constant
 */
export const ON_NOTIFICATION_SUPPORTING_ACTION_CLICK = `${componentSelector}-supporting-action-click`;
