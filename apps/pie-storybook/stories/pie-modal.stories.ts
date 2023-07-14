import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@justeattakeaway/pie-button'; // Register pie-button
import '@justeattakeaway/pie-icon-button'; // Register pie-icon-button
import '@justeattakeaway/pie-modal'; // Register pie-modal
import '@justeattakeaway/pie-icons-webc/icons/IconClose'; // Register icon-close
import '@justeattakeaway/pie-icons-webc/icons/IconChevronLeft'; // Register icon-chevron-left
import '@justeattakeaway/pie-icons-webc/icons/IconChevronRight'; // Register icon-chevron-right

import {
    ModalProps as ModalPropsBase,
    headingLevels,
    sizes,
} from '@justeattakeaway/pie-modal/src/defs';

type ModalProps = ModalPropsBase & { slot: string }

const defaultArgs: ModalProps = {
    heading: 'Modal header',
    headingLevel: 'h2',
    isDismissible: true,
    hasBackButton: true,
    isFullWidthBelowMid: false,
    isOpen: true,
    size: 'medium',
    slot: 'This is Lit!',
    dir: 'ltr',
};

type ModalStoryArgTypes = {
    [K in keyof ModalProps]: object;
}

type ModalStoryMeta = Meta & {
    argTypes: ModalStoryArgTypes,
    args: ModalProps
}

const modalStoryMeta: ModalStoryMeta = {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        isDismissible: {
            control: 'boolean',
        },
        hasBackButton: {
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
        dir: {
            control: 'select',
            options: ['ltr', 'rtl', 'auto'],
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%5BPIE-2.0%5D?type=design&node-id=32007-376358&t=HIfzk0Y1IEnAJyUi-0',
        },
    },
};

export default modalStoryMeta;

/**
 * Helper function to toggle the modal open/closed within the actual template (separate to the Storybook controls)
 */
const toggleModal = () => {
    const modal = document.querySelector('pie-modal');
    if (modal) {
        modal.isOpen = !modal.isOpen;
    }
};

const createFocusableElementsPageHTML = () : TemplateResult => html`
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

const BaseStoryTemplate = (props: ModalProps): TemplateResult => {
    const {
        heading,
        headingLevel,
        isDismissible,
        hasBackButton,
        isFullWidthBelowMid,
        isOpen,
        returnFocusAfterCloseSelector,
        size,
        slot,
        dir,
    } = props;
    return html`
        <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
        <pie-modal
            heading="${heading}"
            headingLevel="${headingLevel}"
            ?isDismissible="${isDismissible}"
            ?hasBackButton="${hasBackButton}"
            ?isFullWidthBelowMid="${isFullWidthBelowMid}"
            returnFocusAfterCloseSelector="${ifDefined(returnFocusAfterCloseSelector)}"
            ?isOpen="${isOpen}"
            dir="${dir}"
            size="${size}">
            ${slot}
        </pie-modal>`;
};

const createScrollablePageHTML = () => {
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(html`<li>Item ${i}</li>`);
    }

    return html`
        <h1>Test Page</h1>
        <p>Test copy</p>
        <ul>${items}</ul>`;
};

const ScrollablePageStoryTemplate = (props: ModalProps) : TemplateResult => html`
    ${BaseStoryTemplate(props)}
    ${createScrollablePageHTML()}`;

const FocusableElementsPageStoryTemplate = (props: ModalProps) : TemplateResult => html`
    ${BaseStoryTemplate(props)}
    ${createFocusableElementsPageHTML()}`;

export const Default: Story<ModalProps> = (args: ModalProps) => BaseStoryTemplate(args);
Default.args = defaultArgs;

export const ScrollLocking: Story<ModalProps> = (args: ModalProps) => ScrollablePageStoryTemplate(args);
ScrollLocking.args = defaultArgs;

export const FocusManagement: Story<ModalProps> = (args: ModalProps) => FocusableElementsPageStoryTemplate(args);
FocusManagement.args = {
    ...defaultArgs,
    returnFocusAfterCloseSelector: '#focus-3',
};
