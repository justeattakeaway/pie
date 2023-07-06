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
    heading: 'Modal header',
    headingLevel: 'h2',
    isDismissible: true,
    isFullWidthBelowMid: false,
    isOpen: true,
    size: 'medium',
    slot: 'This is Lit!',
};

export default {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        isDismissible: {
            control: 'boolean',
        },
        isFullWidthBelowMid: {
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
    args: defaultArgs,
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

// Creates some test page markup to test scroll locking
const createScrollablePageHTML = () => {
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(html`<li>Item ${i}</li>`);
    }

    return html`
        <h1>Test Page</h1>
        <p> Test copy </p>
        <ul>${items}</ul>`;
};

const createFocusableElementsPageHTML = () => html`
    <pie-button id="focus-1">#focus-1</pie-button>
    <pie-button id="focus-2">#focus-2</pie-button>
    <pie-button id="focus-3">#focus-3</pie-button>
    <pie-button id="focus-4">#focus-4</pie-button>
    <pie-button id="focus-5">#focus-5</pie-button>
    <p>Try closing the modal in one of the following ways to see how focus is managed:</p>
    <ol>
        <li>Clicking on the backdrop</li>
        <li>Pressing the modal's close button</li>
        <li>Pressing the modal's close button using the keyboard</li>
        <li>Pressing the Esc key</li>
    </ol>
    <style>
        pie-button {
            margin: 8px;
            display: inline-block;
        }
    </style>`;

const BaseStory = (props: ModalProps): TemplateResult => {
    const {
        heading,
        headingLevel,
        isDismissible,
        isFullWidthBelowMid,
        isOpen,
        returnFocusAfterCloseSelector,
        size,
        slot,
    } = props;
    return html`
        <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
        <pie-modal
            heading="${heading}"
            headingLevel="${headingLevel}"
            ?isDismissible="${isDismissible}"
            ?isFullWidthBelowMid="${isFullWidthBelowMid}"
            returnFocusAfterCloseSelector="${ifDefined(returnFocusAfterCloseSelector)}"
            ?isOpen="${isOpen}"
            size="${size}">
            ${slot}
        </pie-modal>`;
};

const ScrollablePageStory = (props: ModalProps) => html`
    ${BaseStory(props)}
    ${createScrollablePageHTML()}`;

const FocusableElementsPageTemplate = (props: ModalProps) => html`
    ${BaseStory(props)}
    ${createFocusableElementsPageHTML()}`;

export const Default: Story<ModalProps> = (args: ModalProps) => BaseStory(args);
Default.args = defaultArgs;

export const InScrollablePage: Story<ModalProps> = (args: ModalProps) => ScrollablePageStory(args);
InScrollablePage.args = defaultArgs;

export const WithFocusableElements: Story<ModalProps> = (args: ModalProps) => FocusableElementsPageTemplate(args);
WithFocusableElements.args = {
    ...defaultArgs,
    returnFocusAfterCloseSelector: '#focus-3',
};
