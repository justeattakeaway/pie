export const variants = ['neutral', 'neutral-alternative', 'info', 'positive', 'warning', 'error'] as const;
export const headingLevels = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;

export interface NotificationProps {
  variant: typeof variants[number];

  compact?: boolean;

  /**
   * The text to display in the modal's heading.
   */
  heading?: string;

  /**
   * The HTML heading tag to use for the modal's heading. Can be h1-h6.
   */
  headingLevel: typeof headingLevels[number];

  /**
   * When true, the notification will be open.
   */
  isOpen: boolean;
}
