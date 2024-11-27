import { html } from 'lit';
import { type Meta } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import { toaster } from '@justeattakeaway/pie-toast-provider';
import { type ToastProviderProps, defaultProps } from '@justeattakeaway/pie-toast-provider';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-tag';

import { createStory } from '../utilities';

type ToastProviderStoryMeta = Meta<ToastProviderProps>;

const onQueueUpdate = (event: CustomEvent) => {
    action('pie-toast-provider-queue-update')(event.detail);

    const queueLengthTag = document.querySelector('#queue-length-tag') as HTMLElement;
    if (queueLengthTag) {
        queueLengthTag.textContent = `Toast Queue Length: ${event.detail.length}`;
    }
};
const defaultArgs: ToastProviderProps = {
    ...defaultProps,
    options: {
        duration: 3000,
        isDismissible: true,
        onPieToastOpen: action('onPieToastOpen'),
        onPieToastClose: action('onPieToastClose'),
        onPieToastLeadingActionClick: action('onPieToastLeadingActionClick'),
    },
};

const toastProviderStoryMeta: ToastProviderStoryMeta = {
    title: 'Toast Provider',
    component: 'pie-toast-provider',
    argTypes: {
        options: {
            description: 'Global options to configure default toast behavior.',
            control: 'object',
            defaultValue: {
                summary: defaultProps.options,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default toastProviderStoryMeta;

const Template = ({ options }: ToastProviderProps) => html`
    <pie-toast-provider 
        .options=${options} 
        @pie-toast-provider-queue-update=${onQueueUpdate}>
    </pie-toast-provider>

    <pie-tag id="queue-length-tag" variant="information" style="margin-top: 16px;">
        Toast Queue Length: 0
    </pie-tag>

    <div style="margin-top: 16px; display: flex; gap: 16px; flex-wrap: wrap;">
        <pie-button 
            @click=${() => {
    toaster.create({
        message: 'Low Priority Info Toast',
        variant: 'info',
        duration: null,
        leadingAction: {
            text: 'Confirm',
        },
    });
}}>
            Trigger Info Toast (Low Priority)
        </pie-button>

        <pie-button
            @click=${() => {
    toaster.create({
        message: 'Medium Priority Warning Toast',
        variant: 'warning',
    });
}}>
            Trigger Warning Toast (Medium Priority)
        </pie-button>

        <pie-button
            @click=${() => {
    toaster.create({
        message: 'High Priority Error Toast',
        variant: 'error',
    });
}}>
            Trigger Error Toast (High Priority)
        </pie-button>

        <pie-button
            @click=${() => {
    toaster.create({
        message: 'Actionable Info Toast',
        variant: 'info',
        leadingAction: { text: 'Retry' },
    });
}}>
            Trigger Actionable Info Toast
        </pie-button>

        <pie-button
            variant="secondary"
            @click=${() => {
    toaster.clearAll();
}}>
            Clear All Toasts
        </pie-button>
    </div>
`;

export const Default = createStory<ToastProviderProps>(Template, defaultArgs)();
