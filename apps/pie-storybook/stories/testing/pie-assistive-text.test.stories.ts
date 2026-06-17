import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/assistive-text';
import '@justeattakeaway/pie-webc/components/button';
import {
    type AssistiveTextProps as AssistiveTextBaseProps,
    variants,
    defaultProps,
} from '@justeattakeaway/pie-webc/components/assistive-text';

import { type SlottedComponentProps } from '../../types';
import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';

type AssistiveTextProps = SlottedComponentProps<AssistiveTextBaseProps>;
type AssistiveTextStoryMeta = Meta<AssistiveTextProps>;

const defaultArgs: AssistiveTextProps = {
    ...defaultProps,
    slot: 'Assistive Text',
};

const assistiveTextStoryMeta: AssistiveTextStoryMeta = {
    title: 'Assistive Text',
    component: 'pie-assistive-text',
    argTypes: {
        variant: {
            description: 'Set the variant of the assistive text.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        isVisuallyHidden: {
            description: 'If true, hides the component visually but leaves it accessible for screen readers.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isVisuallyHidden,
            },
        },
        slot: {
            description: 'Content to place within the assistive-text',
            control: 'text',
        },
    },
    args: defaultArgs,
};

export default assistiveTextStoryMeta;

const Template : TemplateFunction<AssistiveTextProps> = ({
    variant,
    isVisuallyHidden,
    slot,
}) => html`
    <pie-assistive-text
        variant="${ifDefined(variant)}"
        ?isVisuallyHidden="${isVisuallyHidden}">
        ${sanitizeAndRenderHTML(slot)}
    </pie-assistive-text>
`;

const createAssistiveTextStory = createStory<AssistiveTextProps>(Template, defaultArgs);

export const Default = createAssistiveTextStory();

const ActivityStatusAnnouncementsTemplate: TemplateFunction<AssistiveTextProps> = () => {
    const statusMessages = {
        default: 'Sync in progress...',
        success: 'Sync completed successfully.',
        error: 'Sync failed. Please try again.',
    };

    const onStatusAction = (variant: keyof typeof statusMessages) => () => {
        const assistiveText = document.querySelector('#activity-status-message') as (AssistiveTextBaseProps & HTMLElement) | null;

        if (!assistiveText) {
            return;
        }

        assistiveText.variant = variant;
        assistiveText.isVisuallyHidden = false;
        assistiveText.textContent = statusMessages[variant];
    };

    return html`
        <div data-test-id="activity-status-wrapper" style="display: grid; gap: var(--dt-spacing-c); max-width: 32rem;">
            <pie-assistive-text id="activity-status-message" data-test-id="activity-status-message">
                Status updates will appear here.
            </pie-assistive-text>

            <div style="display: flex; gap: var(--dt-spacing-b); flex-wrap: wrap;">
                <pie-button
                    type="button"
                    variant="secondary"
                    @click="${onStatusAction('default')}">
                    Start Sync
                </pie-button>
                <pie-button
                    type="button"
                    variant="secondary"
                    @click="${onStatusAction('success')}">
                    Mark Success
                </pie-button>
                <pie-button
                    type="button"
                    variant="secondary"
                    @click="${onStatusAction('error')}">
                    Mark Error
                </pie-button>
            </div>
        </div>
    `;
};

const propsMatrix: Partial<Record<keyof AssistiveTextProps, unknown[]>> = {
    variant: ['default', 'error', 'success'],
    slot: ['Hello World'],
    isVisuallyHidden: [true, false],
};

export const Variants = createVariantStory<AssistiveTextProps>(Template, propsMatrix);
export const ActivityUpdates = createStory<AssistiveTextProps>(ActivityStatusAnnouncementsTemplate, defaultArgs)();
