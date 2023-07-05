import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@justeattakeaway/pie-button'; // Ensures the button WC is available for use in the templates

import {
    ModalProps as ModalPropsBase,
    headingLevels,
    sizes,
} from '@justeattakeaway/pie-modal';

type ModalProps = ModalPropsBase & { slot: string }

const defaultArgs: ModalProps = {
    isOpen: true,
    heading: 'Modal header',
    headingLevel: 'h2',
    size: 'medium',
    slot: 'This is Lit!',
};

export default {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        isOpen: {
            control: 'boolean',
        },
        heading: {
            control: 'text',
        },
        headingLevel: {
            control: 'select',
            options: headingLevels,
        },
        returnFocusAfterCloseSelector: {
            control: 'text',
        },
        size: {
            control: 'select',
            options: sizes,
        },
        slot: {
            control: 'text',
        },
    },
    args: { ...defaultArgs },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%5BPIE-2.0%5D?type=design&node-id=32007-376358&t=HIfzk0Y1IEnAJyUi-0',
        },
    },
} as Meta;

/**
 * Helper function to toggle the modal open/closed within the actual template (separate to the Storybook controls)
 */
const toggleModal = () => {
    const modal = document.querySelector('pie-modal');
    if (modal) {
        modal.isOpen = !modal.isOpen;
    }
};

const Template = ({
    isOpen,
    heading,
    headingLevel,
    size,
    slot,
}: ModalProps): TemplateResult => html`
        <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
        <pie-modal
        ?isOpen="${isOpen}"
        heading="${heading}"
        size="${size}"
        headingLevel="${headingLevel}">
            ${slot}
        </pie-modal>
    `;

export const Default: Story<ModalProps> = (args: ModalProps) => Template(args);
Default.args = {
    ...defaultArgs,
};

// Creates some test page markup to test scroll locking
const createTestPageHTML = () => {
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(html`<li>Item ${i}</li>`);
    }

    return html`
        <h1>Test Page</h1>
        <p> Test copy </p>
        <ul>${items}</ul>`;
};

const PageContextTemplate = ({
    isOpen,
    heading,
    headingLevel,
    slot,
}: ModalProps) => html`
    <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
    <pie-modal
        ?isOpen="${isOpen}"
        heading="${heading}"
        headingLevel="${headingLevel}"
    >
        ${slot}
    </pie-modal>
    ${createTestPageHTML()}
`;

export const InScrollablePage: Story<ModalProps> = (args: ModalProps) => PageContextTemplate(args);
InScrollablePage.args = {
    ...defaultArgs,
};

const FocusableElementsPageTemplate = ({
    isOpen,
    heading,
    headingLevel,
    returnFocusAfterCloseSelector,
    slot,
}: ModalProps) => html`
    <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
    <pie-modal
        ?isOpen="${isOpen}"
        heading="${heading}"
        headingLevel="${headingLevel}"
        returnFocusAfterCloseSelector="${ifDefined(returnFocusAfterCloseSelector)}"
    >
        ${slot}
    </pie-modal>
    <button id="focus-1">#focus-1</button>
    <button id="focus-2">#focus-2</button>
    <button id="focus-3">#focus-3</button>
    <button id="focus-4">#focus-4</button>
    <button id="focus-5">#focus-5</button>
`;

export const WithFocusableElements: Story<ModalProps> = (args: ModalProps) => FocusableElementsPageTemplate(args);
WithFocusableElements.args = {
    ...defaultArgs,
    returnFocusAfterCloseSelector: '#focus-3',
};
