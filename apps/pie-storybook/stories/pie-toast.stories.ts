import { html } from 'lit';
import { ToastProps, defaultProps, variants } from '@justeattakeaway/pie-toast';
import { action } from '@storybook/addon-actions';
import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type ToastStoryMeta = StoryMeta<ToastProps>;

const defaultArgs: ToastProps = {
    ...defaultProps,
    message: 'Menu Published',
    leadingAction: {
        text: 'Confirm',
        ariaLabel: 'Descriptive confirmation text',
    },
};

const toastStoryMeta: ToastStoryMeta = {
    title: 'Toast',
    component: 'pie-toast',
    argTypes: {
        isOpen: {
            description: 'When true, the toast is set to be open and visible.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isOpen,
            },
        },
        variant: {
            description: 'Set the variant of the notification.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        isDismissible: {
            description: 'Allows dismissing the toast by clicking on the close button.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isDismissible,
            },
        },
        message: {
            description: 'The message content of the toast.',
            control: 'text',
        },
        isMultiline: {
            description: 'It allows the message content being displayed as multiline limited to three rows.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isOpen,
            },
        },
        leadingAction: {
            description: 'The leading action configuration for the toast.',
            control: 'object',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/sjkhCbCcv7t4QkDrz7g0Xx/%E2%9C%A8-[Core]-Web-Components-[PIE-3]?node-id=7934-12060',
        },
    },
};

export default toastStoryMeta;

const pieToastLeadingActionClick = action('pie-toast-leading-action-click');
const pieToastSupportingActionClick = action('pie-toast-supporting-action-click');
const pieToastClose = action('pie-toast-close');
const pieToastOpen = action('pie-toast-open');

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({
    isOpen,
    isDismissible,
    message,
    leadingAction,
    isMultiline,
    isStrong,
    variant,
}: ToastProps) => html`
    <pie-toast 
        ?isOpen="${isOpen}" 
        ?isDismissible="${isDismissible}" 
        ?isStrong="${isStrong}"
        variant="${variant}"
        message="${message}" 
        ?isMultiline="${isMultiline}"
        .leadingAction="${leadingAction}"
        @pie-toast-leading-action-click="${pieToastLeadingActionClick}"
        @pie-toast-supporting-action-click="${pieToastSupportingActionClick}"
        @pie-toast-close="${pieToastClose}"
        @pie-toast-open="${pieToastOpen}"
    /></pie-toast>
`;

export const Default = createStory<ToastProps>(Template, defaultArgs)();
