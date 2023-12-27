import { Variant as PieButtonVariant } from '@justeattakeaway/pie-button/src/defs.ts';

export const variants = ['neutral', 'neutral-alternative', 'info', 'positive', 'warning', 'error'] as const;

// export type Variant = typeof variants[number]

export type ActionProps = {
  /**
   * The text to display inside the button.
   */
  text: string;

  /**
   * The button variant.
   */
  variant?: PieButtonVariant;

  /**
   * The ARIA label for the button.
   */
  ariaLabel?: string;
};

export interface NotificationProps {
  variant: typeof variants[number];

  compact?: boolean;
  // icon // there is a default icon
  // hideIcon

  /**
   * When true, the notification will be open.
   */
  isOpen: boolean;

  /**
   * The leading action configuration for the notification.
   */
  leadingAction: ActionProps;

  /**
   * The supporting action configuration for the notification.
   */
  supportingAction: ActionProps;

  /**
   * When set to `true`:
   *  1. The close button within the notification will be visible.
   *  2. The user can dismiss the notification via the ESCAPE key, clicking the backdrop
   *     or via a close button.
   *
   * When set to `false`:
   *  1. The close button within the notification will be hidden.
   *  2. The user can NOT dismiss the notification via the ESCAPE key or clicking the backdrop.
   *
   */
  isDismissible?: boolean;
}

// heading {
//   headingLevel
// }

// leadingAction

// supportingAction
