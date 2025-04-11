import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-toast-provider';
import { type ToastProviderProps, defaultProps } from '@justeattakeaway/pie-toast-provider';

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
        zIndex: {
            description: 'Defines the stacking order of the toast provider.',
            control: 'text',
            defaultValue: {
                summary: '--dt-z-index-toast (6000)',
            },
        },
    },
    args: defaultArgs,
};

export default toastProviderStoryMeta;

const onQueueUpdate = (queue: CustomEvent) => {
    console.info('toast provider queue:', queue.detail);
};

const Template = ({ options, zIndex }: ToastProviderProps) => html`
    <pie-toast-provider
        .options="${options}"
        zIndex="${zIndex || nothing}"
        @pie-toast-provider-queue-update="${onQueueUpdate}">
    </pie-toast-provider>
`;

export const Default = createStory<ToastProviderProps>(Template, defaultArgs)();
