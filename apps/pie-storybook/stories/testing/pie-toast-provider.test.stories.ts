import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta, type StoryObj } from '@storybook/web-components';

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

const Template = ({ options = defaultProps.options, position }: ToastProviderProps) => html`
        <pie-toast-provider
            .options="${options}"
            position="${ifDefined(position)}"
            @pie-toast-provider-queue-update="${onQueueUpdate}">
        </pie-toast-provider>
    `;

const PositionTemplate = ({ options = defaultProps.options, position }: ToastProviderProps) => html`
        <pie-toast-provider
            .options="${options}"
            position="${ifDefined(position)}"
            @pie-toast-provider-queue-update="${onQueueUpdate}">
        </pie-toast-provider>
    `;

const CustomZIndexTemplate = () => html`
        <pie-toast-provider
            style="--toast-provider-z-index: 7000;"
            @pie-toast-provider-queue-update="${onQueueUpdate}">
        </pie-toast-provider>
        
        <div style="position: fixed; inset:0; background-color: var(--dt-color-overlay); z-index: 6500; pointer-events: none; display: flex; align-items: center; justify-content: center;">
            <div style="padding: var(--dt-spacing-d); border: 1px solid var(--dt-color-border-inverse); color: var(--dt-color-content-light)">
                Overlay (z-index: 6500)
            </div>
        </div>
    `;

const ScrollPageTemplate = ({ options = defaultProps.options, position }: ToastProviderProps) => {
    const handleSectionClick = () => {
        console.info('Section button clicked');
    };

    return html`
        <pie-toast-provider
            .options="${options}"
            position="${ifDefined(position)}"
            @pie-toast-provider-queue-update="${onQueueUpdate}">
        </pie-toast-provider>
         
                <div style="padding: var(--dt-spacing-e); margin: var(--dt-spacing-e) 0;">
                <h3>Scrollable Content Area</h3>
                <p>Scroll down to test toast positioning is maintained during page scroll.</p>
                
                ${Array.from({ length: 8 }, (_, i) => html`
                    <div style="margin: var(--dt-spacing-e) 0; padding: var(--dt-spacing-d); border: 1px solid var(--dt-color-border-default); background: white;">
                        <h4>Section ${i + 1}</h4>
                        <p>This is content section ${i + 1}.</p>
                    </div>
                `)}

            <pie-button @click="${handleSectionClick}">Interactive element</pie-button>
            <p>A message should be logged on console when clicked</p>
            </div>
    `;
};

export const Default = createStory<ToastProviderProps>(Template, defaultArgs)();

export const PositionDefault: StoryObj<ToastProviderProps> = {
    ...createStory<ToastProviderProps>(PositionTemplate, defaultArgs)(),
    play: () => {
        toaster.create({
            message: 'A default toast',
            duration: null,
            isDismissible: true,
        });
    },
};

export const PositionBottomLeft: StoryObj<ToastProviderProps> = {
    ...createStory<ToastProviderProps>(PositionTemplate, { position: 'bottom-left' })(),
    play: () => {
        toaster.create({
            message: 'A bottom-left toast',
            duration: null,
            isDismissible: true,
        });
    },
};

export const PositionBottomRight: StoryObj<ToastProviderProps> = {
    ...createStory<ToastProviderProps>(PositionTemplate, { position: 'bottom-right' })(),
    play: () => {
        toaster.create({
            message: 'A bottom-right toast',
            duration: null,
            isDismissible: true,
        });
    },
};

export const PositionBottomCenter: StoryObj<ToastProviderProps> = {
    ...createStory<ToastProviderProps>(PositionTemplate, { position: 'bottom-center' })(),
    play: () => {
        toaster.create({
            message: 'A bottom-center toast',
            duration: null,
            isDismissible: true,
        });
    },
};

export const CustomZIndex = {
    ...createStory(CustomZIndexTemplate, {})(),
    play: () => {
        toaster.create({
            message: 'Toast with z-index: 7000 should appear above the overlay.',
            duration: null,
        });
    },
};

export const ScrollPage: StoryObj<ToastProviderProps> = {
    ...createStory<ToastProviderProps>(ScrollPageTemplate, defaultArgs)(),
    play: () => {
        toaster.create({
            message: 'This toast should stay in a fixed position while scrolling.',
            duration: null,
            isDismissible: true,
        });
    },
};
