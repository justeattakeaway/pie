export interface ModalProps {
    headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Modal heading levels/tags
 */
export const headingLevels: ModalProps['headingLevel'][] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

/**
 * Event name for when the modal is closed.
 *
 * @constant
 */
export const ON_MODAL_CLOSE_EVENT = 'pie-modal-close';
