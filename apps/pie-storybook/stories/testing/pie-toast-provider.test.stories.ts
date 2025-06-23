import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import {
    type ToastProviderProps,
    defaultProps,
    toaster,
    positions,
} from '@justeattakeaway/pie-toast-provider';
import '@justeattakeaway/pie-toast';
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
        position: {
            description: 'Set the position of the toast. When set to `default`, the toast will be positioned at bottom-left for RTL languages and bottom-right for LTR languages.',
            control: 'select',
            options: positions,
            defaultValue: {
                summary: defaultProps.position,
            },
        },
    },
    args: defaultArgs,
};

export default toastProviderStoryMeta;

const onQueueUpdate = (queue: CustomEvent) => {
    console.info('toast provider queue:', queue.detail);
};

const Template = ({ options = defaultProps.options, position }: ToastProviderProps) => {
    // move the creation of the toast to the next frame to mimic user interaction
    requestAnimationFrame(() => {
        toaster.create({
            message: 'This toast should appear above the red box.',
            duration: null,
        });
    });

    return html`
        <pie-toast-provider
            .options="${options}"
            position="${ifDefined(position)}"
            @pie-toast-provider-queue-update="${onQueueUpdate}">
        </pie-toast-provider>
    `;
};

const CustomZIndexTemplate = () => {
    const showToast = () => {
        toaster.create({
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
        <pie-button data-test-id="show-toast-button" @click="${showToast}">Show Toast</pie-button>
    `;
};

export const Default = createStory<ToastProviderProps>(Template, defaultArgs)();
export const BottomLeft = createStory<ToastProviderProps>(Template, { position: 'bottom-left' })();
export const BottomRight = createStory<ToastProviderProps>(Template, { position: 'bottom-right' })();
export const BottomCenter = createStory<ToastProviderProps>(Template, { position: 'bottom-center' })();
export const CustomZIndex = createStory(CustomZIndexTemplate, {})();
