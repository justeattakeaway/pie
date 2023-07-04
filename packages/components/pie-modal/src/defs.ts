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
     * The selector for the element that you would like focus to be returned to when the modal is closed, e.g., #skipToMain
     */
    returnFocusAfterCloseSelector?: string;
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
