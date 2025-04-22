import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-toast-provider';
import { type ToastProviderProps, defaultProps, toaster } from '@justeattakeaway/pie-toast-provider';
import '@justeattakeaway/pie-button';

import { createStory } from '../../utilities';

type ToastProviderStoryMeta = Meta<ToastProviderProps>;

const defaultArgs: ToastProviderProps = {
    ...defaultProps,
};

const toastProviderStoryMeta: ToastProviderStoryMeta = {
    title: 'Toast Provider',
    component: 'pie-toast-provider',
    argTypes: {
        options: {
            description: 'Default options for all toasts; accepts all toast props.',
            control: 'object',
            defaultValue: {
                summary: defaultProps.options,
            },
        },
    },
    args: defaultArgs,
};

export default toastProviderStoryMeta;

const onQueueUpdate = (queue: CustomEvent) => {
    console.info('toast provider queue:', queue.detail);
};

const Template = ({ options }: ToastProviderProps) => html`
    <pie-toast-provider
        .options="${options}"
        @pie-toast-provider-queue-update="${onQueueUpdate}">
    </pie-toast-provider>
`;

const CustomZIndexTemplate = () => {
    const showToast = () => {
        toaster.create({
            title: 'Test Toast',
            message: 'This toast should appear above the red box.',
            duration: null,
        });
    };

    return html`
        <div style="position: relative; height: 200px; border: 1px dashed grey; padding: 20px; margin-bottom: 20px;">
            <div style="position: absolute; inset: 40px; background-color: red; z-index: 6500;">
                (z-index: 6500)
            </div>
            <pie-toast-provider
                style="--toast-provider-z-index: 7000;"
                @pie-toast-provider-queue-update="${onQueueUpdate}">
            </pie-toast-provider>
        </div>
        <pie-button @click="${showToast}">Show Toast</pie-button>
    `;
};

export const Default = createStory<ToastProviderProps>(Template, defaultArgs)();
export const CustomZIndex = createStory(CustomZIndexTemplate, {})();
