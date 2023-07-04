import { ModalProps } from '@/defs';

// Renders a <pie-modal> HTML string with the given prop values
export const renderTestPieModal = ({
    heading = 'This is a modal heading',
    headingLevel = 'h2',
    size = 'medium',
    isOpen = true,
    returnFocusAfterCloseSelector = undefined,
} : Partial<ModalProps> = {}) => `<pie-modal ${isOpen ? 'isOpen' : ''} heading="${heading}" headingLevel="${headingLevel}" size="${size}" ${returnFocusAfterCloseSelector ? `returnFocusAfterCloseSelector=${returnFocusAfterCloseSelector}` : ''}></pie-modal>`;
