import { Variant as PieButtonVariant } from '@justeattakeaway/pie-button/src/defs.ts';

export const variants = ['neutral', 'neutral-alternative', 'info', 'positive', 'warning', 'error'] as const;

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
  // variant: typeof variants;
  isCompact?: boolean;
  // icon // there is a default icon
  // hideIcon

  /**
   * When true, the notification will be open.
   */
  isOpen: boolean;
}

// heading {
//   headingLevel
// }

// leadingAction

// supportingAction
