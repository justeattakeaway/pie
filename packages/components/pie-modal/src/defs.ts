export const sizes = ['small', 'medium', 'large'] as const;
export const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export interface ModalProps {
    heading: string;
    headingLevel: typeof headingLevels[number];
    isOpen?: boolean;
    size: typeof sizes[number];
}

export const ON_MODAL_CLOSE_EVENT = 'pie-modal-close';
