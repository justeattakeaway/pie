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
     * When set to `true`:
     *  1. The close button within the modal will be visible.
     *  2. The user can dismiss the modal via the ESCAPE key, clicking the backdrop
     *     or via a close button.
     *
     * When set to `false`:
     *  1. The close button within the modal will be hidden.
     *  2. The user can NOT dismiss the modal via the ESCAPE key or clicking the backdrop.
     *
     */
    isDismissible: boolean;

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
