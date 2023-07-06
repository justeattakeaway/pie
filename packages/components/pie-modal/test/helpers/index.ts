import { ModalProps } from '@/defs';

// Renders a <pie-modal> HTML string with the given prop values
export const renderTestPieModal = ({
    heading = 'This is a modal heading',
    headingLevel = 'h2',
    isDismissible = true,
    isFullWidthBelowMid = false,
    isOpen = true,
    returnFocusAfterCloseSelector = undefined,
    size = 'medium',
} : Partial<ModalProps> = {}) => `<pie-modal
        heading="${heading}"
        headingLevel="${headingLevel}"
        ${isFullWidthBelowMid ? 'isFullWidthBelowMid' : ''}
        ${isDismissible ? 'isDismissible' : ''}
        ${isOpen ? 'isOpen' : ''}
        ${returnFocusAfterCloseSelector ? `returnFocusAfterCloseSelector=${returnFocusAfterCloseSelector}` : ''}
        size="${size}">
    </pie-modal>`;
