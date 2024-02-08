export const variants = ['neutral', 'neutral-alternative', 'info', 'success', 'warning', 'error'] as const;
export const headingLevels = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;

export interface NotificationProps {
  /**
   * Set the variant of the notification.
   */
  variant: typeof variants[number];

  /**
   * When true, the footer aligns to the header and icons which makes the component compact.
   */
  isCompact?: boolean;

  /**
   * The text to display in the modal's heading.
   */
  heading?: string;

  /**
   * The HTML heading tag to use for the modal's heading. Can be h1-h6.
   */
  headingLevel: typeof headingLevels[number];

  /**
   * Option to hide the icon regardless its variant or if user provided an icon.
   */
  hideIcon?: boolean;

  /**
   * When true, the notification is set to be open and visible.
   */
  isOpen: boolean;
}
