export const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export interface ModalProps {
    heading: string;
    headingLevel: typeof headingLevels[number];
    isOpen: boolean;
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
