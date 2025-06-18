import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-toast-provider';
import { type ToastProviderProps, defaultProps } from '@justeattakeaway/pie-toast-provider';
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

export const Default = createStory<ToastProviderProps>(Template, defaultArgs)();
