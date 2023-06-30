export const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export interface ModalProps {
    /**
     * (Required) The text to display in the modal's heading.
     */
    heading: string;
    /**
     * (Optional) The HTML heading tag to use for the modal's heading. Can be H1-H6.
     * @default "h2"
     */
    headingLevel: typeof headingLevels[number];
    /**
     * (Optional) When true, the modal will be open.
     * @default false
     */
    isOpen: boolean;

    /**
     * (Optional) When true, the modal will be dismissible.
     * @default true
     */
    isDismissible: boolean;
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
