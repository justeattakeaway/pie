import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { StoryObj as Story } from '@storybook/web-components';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieModal } from '@justeattakeaway/pie-modal';
import { PieButton } from '@justeattakeaway/pie-button';
import { IconClose, IconChevronLeft, IconChevronRight } from '@justeattakeaway/pie-icons-webc';
import {
    ModalProps as ModalPropsBase,
    headingLevels,
    sizes,
    positions,
} from '@justeattakeaway/pie-modal/src/defs';
import { i18nArgTypes } from '../args/commonArgsTypes';
import { StoryMeta, SlottedComponentProps } from '../types';

// This prevents storybook from tree shaking the components
const keptReferences = [
    PieIconButton,
    PieModal,
    PieButton,
    IconClose,
    IconChevronLeft,
    IconChevronRight
];

type ModalProps = SlottedComponentProps<ModalPropsBase>;
type ModalStoryMeta = StoryMeta<ModalProps>;

const defaultArgs: ModalProps = {
    heading: 'Modal header',
    headingLevel: 'h2',
    isDismissible: true,
    hasBackButton: true,
    isFullWidthBelowMid: false,
    isOpen: true,
    isLoading: false,
    size: 'medium',
    position: 'center',
    slot: 'This is Lit!',
    dir: 'ltr',
    leadingAction: {
        text: 'Confirm',
        variant: 'primary',
        ariaLabel: 'Descriptive confirmation text',
    },
    supportingAction: {
        text: 'Cancel',
        variant: 'ghost',
        ariaLabel: 'Descriptive cancellation text',
    },
};

const modalStoryMeta: ModalStoryMeta = {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        ...i18nArgTypes,
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
        isLoading: {
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
            control: 'radio',
            options: sizes,
        },
        position: {
            control: 'radio',
            options: positions,
        },
        slot: {
            control: 'text',
        },
        leadingAction: {
            control: 'object',
        },
        supportingAction: {
            control: 'object',
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
        isLoading,
        returnFocusAfterCloseSelector,
        size,
        position,
        slot,
        dir,
        leadingAction,
        supportingAction,
    } = props;
    return html`
        <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
        <pie-modal
            heading="${heading}"
            headingLevel="${headingLevel}"
            ?isDismissible="${isDismissible}"
            ?hasBackButton="${hasBackButton}"
            ?isFullWidthBelowMid="${isFullWidthBelowMid}"
            ?isLoading="${isLoading}"
            returnFocusAfterCloseSelector="${ifDefined(returnFocusAfterCloseSelector)}"
            ?isOpen="${isOpen}"
            dir="${dir}"
            size="${size}"
            .leadingAction="${leadingAction}"
            .supportingAction="${supportingAction}"
            position="${position}">
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
