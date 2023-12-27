import { html, TemplateResult } from 'lit';
import { PieNotification, NotificationProps, variants } from '@justeattakeaway/pie-notification';
import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieNotification];

type NotificationStoryMeta = StoryMeta<NotificationProps>;

const defaultArgs: NotificationProps = {
    isOpen: true,
    variant: 'neutral',
    compact: false,
    slot: 'Supporting text',
    leadingAction: {
        text: 'Confirm',
        variant: 'primary',
        ariaLabel: 'Descriptive confirmation text',
    },
    supportingAction: {
        text: 'Cancel',
        variant: 'ghost',
        ariaLabel: 'Descriptive cancellation text',
    },
};

const notificationStoryMeta: NotificationStoryMeta = {
    title: 'Notification',
    component: 'pie-notification',
    argTypes: {
        isOpen: {
            description: 'The notification will be open by default.',
            control: 'boolean',
        },
        variant: {
            description: 'Set the variant of the link.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'default',
            },
        },
        compact: {
            description: 'Component\'s thickness.',
            control: 'boolean',
        },
        slot: {
            description: 'Content to place within the notification.',
            control: 'text',
        },
        leadingAction: {
            description: 'The leading action configuration for the notification.',
            control: 'object',
        },
        supportingAction: {
            description: 'The supporting action configuration for the notification. Will not appear if no leading action is provided.',
            control: 'object',
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

export default notificationStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = (props: NotificationProps) : TemplateResult => {
    const {
        isOpen,
        compact,
        variant,
        slot,
        leadingAction,
        supportingAction,
    } = props;

    return html`
        <pie-notification
            isOpen="${isOpen}"
            variant="${variant}"
            compact="${compact}"
            .leadingAction="${leadingAction}"
            .supportingAction="${supportingAction}">
            ${slot}
        </pie-notification>
    `;
};

export const Default = createStory<NotificationProps>(Template, defaultArgs)();
