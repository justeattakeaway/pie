export interface ModalProps {
    /**
     * the heading of the modal .
     */
    heading: string;
    /**
     * the rendered heading tag of the modal header.
     * @default h2
     */
    headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * If `true`, the modal will be opened.
     * @default false
     */
    isOpen?: boolean;
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
