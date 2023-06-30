import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { ModalProps as ModalPropsBase, headingLevels } from '@justeattakeaway/pie-modal';
import { html, TemplateResult } from 'lit';
import '@justeattakeaway/pie-button'; // Ensures the button WC is available for use in the templates

type ModalProps = ModalPropsBase & { slot: string }

const defaultArgs: ModalProps = {
    heading: 'Modal header',
    headingLevel: 'h2',
    isDismissible: true,
    isOpen: true,
    slot: 'This is Lit!',
};

export default {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        isDismissible: {
            control: 'boolean',
        },
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
    isDismissible,
    isOpen,
    heading,
    headingLevel,
    slot,
}: ModalProps): TemplateResult => html`
        <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
        <pie-modal
            ?isDismissible="${isDismissible}"
            ?isOpen="${isOpen}"
            heading="${heading}"
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
    isDismissible,
    isOpen,
    heading,
    headingLevel,
    slot,
}: ModalProps) => html`
    <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
    <pie-modal
        ?isDismissible="${isDismissible}"
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
