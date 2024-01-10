import { ModalProps } from '../../src/defs.ts';

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

// Creates some test page markup to test scroll locking
export const createScrollablePageHTML = () => `<div>
        <h1>Test Page</h1>
        <p>Top of page copy</p>
        <p> Test copy </p>
        <ol>
            ${'<li>List item</li>'.repeat(200)}
            <li>Bottom of page copy</li>
        </ol>
    </div>`;
