export const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const sizes = ['small', 'medium', 'large'] as const;

export interface ModalProps {
    /**
     * The text to display in the modal's heading.
     */
    heading: string;
    /**
     * The HTML heading tag to use for the modal's heading. Can be h1-h6.
     */
    headingLevel: typeof headingLevels[number];
    /**
     * When true, the modal will be open.
     */
    isOpen: boolean;
    /**
     * The size of the modal; this controls how wide it will appear on the page.
     */
    size: typeof sizes[number];
    /**
     * The width of the modal; this controls whether it will cover the full width of the page when below the mid breakpoint.
     */
    isFullWidthBelowMid: boolean;
}

/**
 * Event name for when the modal is closed.
 *
 * @constant
 */
export const ON_MODAL_CLOSE_EVENT = 'pie-modal-close';

/**
 * Event name for when the modal is opened.
 *
 * @constant
 */
export const ON_MODAL_OPEN_EVENT = 'pie-modal-open';
