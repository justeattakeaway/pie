import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';
import { type ToastProps, defaultProps, variants } from '@justeattakeaway/pie-toast';

import { type TemplateFunction, createStory } from '../utilities';

type ToastStoryMeta = Meta<ToastProps>;

const defaultArgs: ToastProps = {
    ...defaultProps,
    message: 'Menu Published',
    leadingAction: {
        text: 'Confirm',
        ariaLabel: 'Descriptive confirmation text',
    },
    duration: null,
};

const toastStoryMeta: ToastStoryMeta = {
    title: 'Components/Toast',
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
            description: 'Set the variant of the toast.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        isStrong: {
            description: 'When true, the toast is displayed with a strong visual style.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isStrong,
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
            description: 'Allows the message content to be displayed as multiline, limited to three rows.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isOpen,
            },
        },
        leadingAction: {
            description: 'The leading action configuration for the toast.',
            control: 'object',
        },
        duration: {
            description: 'Sets the duration of the toast in milliseconds before it auto-dismisses.',
            control: 'number',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/pPSC73rPin4csb8DiK1CRr/branch/r96WaDE105zDbe5itnleVv/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=193-32270&t=UNBmhDoOOCzaIGuk-0',
        },
    },
};

export default toastStoryMeta;

const pieToastLeadingActionClick = action('pie-toast-leading-action-click');
const pieToastClose = action('pie-toast-close');
const pieToastOpen = action('pie-toast-open');

const Template : TemplateFunction<ToastProps> = ({
    isOpen,
    isDismissible,
    message,
    leadingAction,
    isMultiline,
    isStrong,
    variant,
    duration,
}: ToastProps) => {
    const [, updateArgs] = useArgs();

    const pieToastCloseHandle = () => {
        updateArgs({ isOpen: false });
        pieToastClose();
    };

    const pieToastOpenHandle = () => {
        updateArgs({ isOpen: true });
        pieToastOpen();
    };

    return html`
        <pie-toast
            ?isOpen="${isOpen}"
            ?isDismissible="${isDismissible}"
            ?isStrong="${isStrong}"
            variant="${ifDefined(variant)}"
            message="${message}"
            .duration="${duration}"
            ?isMultiline="${isMultiline}"
            .leadingAction="${leadingAction}"
            @pie-toast-leading-action-click="${pieToastLeadingActionClick}"
            @pie-toast-close="${pieToastCloseHandle}"
            @pie-toast-open="${pieToastOpenHandle}"/>
        </pie-toast>`;
};

const createToastStory = createStory<ToastProps>(Template, defaultArgs);

export const Neutral = createToastStory();
export const Info = createToastStory({ variant: 'info' });
export const InfoStrong = createToastStory({ variant: 'info', isStrong: true });
export const Warning = createToastStory({ variant: 'warning' });
export const WarningStrong = createToastStory({ variant: 'warning', isStrong: true });
export const Success = createToastStory({ variant: 'success' });
export const SuccessStrong = createToastStory({ variant: 'success', isStrong: true });
export const Error = createToastStory({ variant: 'error' });
export const ErrorStrong = createToastStory({ variant: 'error', isStrong: true });
export const AutoDismiss = createToastStory({ duration: 3000, message: 'Closing in three seconds' });
