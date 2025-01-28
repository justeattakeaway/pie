import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';
import { type ToastProps, defaultProps, variants } from '@justeattakeaway/pie-toast';

import {
    type TemplateFunction,
    createStory,
    createVariantStory,
    type PropDisplayOptions,
} from '../../utilities';

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
};

export default toastStoryMeta;

const pieToastLeadingActionClick = action('pie-toast-leading-action-click');
const pieToastClose = action('pie-toast-close');
const pieToastOpen = action('pie-toast-open');

const shortMessage = 'Item has been created';
const longMessage = 'Donec pulvinar porta tempus. Sed ac ex ac libero pulvinar tincidunt eget non orci. Curabitur leo quam, commodo sit amet dolor eu, molestie molestie eros. Nulla rutrum vehicula sodales. Duis quis lobortis tortor. In hac habitasse platea dictumst. Vestibulum efficitur, orci at interdum eleifend, nulla nunc luctus urna, sit amet commodo libero lacus scelerisque enim. In eleifend ex ut nulla cursus, eu efficitur ligula pharetra.';

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
        </pie-toast>
    `;
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

const VariantsTemplate : TemplateFunction<ToastProps> = ({
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
        <div style="width: 100%;">
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
        </div>
        `;
};

// Base shared props matrix
const baseSharedPropsMatrix: Partial<Record<keyof ToastProps, unknown[]>> = {
    isStrong: [true, false],
    isDismissible: [true, false],
    isMultiline: [true, false],
    message: [shortMessage, longMessage],
    duration: [null],
};

// Neutral variant stories
const neutralPropsMatrix: Partial<Record<keyof ToastProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['neutral'],
};

// Info variant stories
const infoPropsMatrix: Partial<Record<keyof ToastProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['info'],
};

// Warning variant stories
const warningPropsMatrix: Partial<Record<keyof ToastProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['warning'],
};

// Success variant stories
const successPropsMatrix: Partial<Record<keyof ToastProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['success'],
};

// Error variant stories
const errorPropsMatrix: Partial<Record<keyof ToastProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['error'],
};

const variantPropDisplayOptions: PropDisplayOptions<ToastProps> = {
    hiddenProps: ['duration'],
    propLabels: {
        message: {
            [longMessage]: 'With long message',
            [shortMessage]: 'With short message',
        },
    },
};

// Export the variant stories
export const NeutralVariations = createVariantStory<ToastProps>(VariantsTemplate, neutralPropsMatrix, variantPropDisplayOptions);
export const InfoVariations = createVariantStory<ToastProps>(Template, infoPropsMatrix, variantPropDisplayOptions);
export const WarningVariations = createVariantStory<ToastProps>(Template, warningPropsMatrix, variantPropDisplayOptions);
export const SuccessVariations = createVariantStory<ToastProps>(Template, successPropsMatrix, variantPropDisplayOptions);
export const ErrorVariations = createVariantStory<ToastProps>(Template, errorPropsMatrix, variantPropDisplayOptions);
