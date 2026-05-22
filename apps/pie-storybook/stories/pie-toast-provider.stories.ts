import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';
import { action } from 'storybook/actions';

import {
    toaster,
    defaultProps,
    positions,
    type ToastProviderProps,
} from '@justeattakeaway/pie-webc/components/toast-provider';
import '@justeattakeaway/pie-webc/components/button';
import '@justeattakeaway/pie-webc/components/tag';
import '@justeattakeaway/pie-webc/components/modal';

import { createStory } from '../utilities';

type ToastProviderStoryMeta = Meta<ToastProviderProps>;

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
    title: 'Components/Toast Provider',
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
        '--toast-provider-z-index': {
            description: 'Controls the stacking order of the toasts.',
            control: 'text',
            defaultValue: {
                summary: '--dt-z-index-toast (6000)',
            },
            table: {
                category: 'CSS Variables',
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

const Template = ({ options = defaultProps.options, position, '--toast-provider-z-index': customZIndex }: ToastProviderProps & { '--toast-provider-z-index'?: string }) => {
    const onQueueUpdate = (event: CustomEvent) => {
        const queueLength = document.querySelector('#queue-length-tag') as HTMLElement;
        if (queueLength) {
            queueLength.textContent = `Toast Queue Length: ${event.detail.length}`;
        }
    };

    return html`
    <pie-toast-provider
        .options=${options}
        position=${ifDefined(position)}
        style="${customZIndex ? `--toast-provider-z-index: ${customZIndex}` : ''}"
        @pie-toast-provider-queue-update=${onQueueUpdate}>
    </pie-toast-provider>

    <pie-tag id="queue-length-tag" variant="information" style="margin-top: 16px;">
        Toast Queue Length: 0
    </pie-tag>

    <div style="margin-top: 16px; display: flex; gap: 16px; flex-wrap: wrap;">
        <pie-button
            @click=${() => {
        toaster.create({
            message: 'Low Priority Info',
            variant: 'info',
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
            @click=${() => {
        toaster.create({
            message: 'Persistent Toast',
            duration: null,
        });
    }}>
            Trigger Persistent Toast
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
};

export const Default = createStory<ToastProviderProps>(Template, defaultArgs)();

const MultipleProvidersTemplate = () => {
    const openModal = () => {
        const modal = document.querySelector('pie-modal') as any;
        if (modal) modal.isOpen = true;
    };

    return html`
    <pie-toast-provider id="main"></pie-toast-provider>

    <p style="margin: 0 0 var(--dt-spacing-d); color: var(--dt-color-content-subdued);">
        This page has multiple providers: one at page level (<code>id="main"</code>) and one inside a modal (<code>id="modal"</code>). Each has its own independent toast queue.
    </p>

    <div style="display: flex; gap: var(--dt-spacing-d); flex-wrap: wrap; margin-bottom: var(--dt-spacing-e);">
        <pie-button
            @click=${() => {
        toaster.create({
            message: 'Item saved successfully',
            variant: 'success',
            providerId: 'main',
        });
    }}>
            Create Toast on Page
        </pie-button>

        <pie-button
            variant="ghost"
            @click=${() => toaster.clearAll('main')}>
            Clear Main Toasts
        </pie-button>
    </div>

    <pie-button
        variant="secondary"
        @click=${openModal}>
        Open Modal
    </pie-button>

    <pie-modal
        heading="Modal with its own Toast Provider"
        .isOpen=${false}
        isDismissible>
        <pie-toast-provider id="modal" position="bottom-center"></pie-toast-provider>

        <p style="margin: 0 0 var(--dt-spacing-d); color: var(--dt-color-content-subdued);">
            This modal has its own toast provider (<code>id="modal"</code>). Toasts created here are scoped to the modal.
        </p>

        <div style="display: flex; gap: var(--dt-spacing-d); flex-wrap: wrap; justify-content: center; padding-bottom: var(--dt-spacing-i);">
            <pie-button
                @click=${() => {
        toaster.create({
            message: 'Form submitted!',
            variant: 'success',
            providerId: 'modal',
        });
    }}>
                Toast on Modal
            </pie-button>

            <pie-button
                variant="ghost"
                @click=${() => toaster.clearAll('modal')}>
                Clear Modal Toasts
            </pie-button>
        </div>
    </pie-modal>
`;
};

export const MultipleProviders = createStory<ToastProviderProps>(MultipleProvidersTemplate, defaultArgs)();
