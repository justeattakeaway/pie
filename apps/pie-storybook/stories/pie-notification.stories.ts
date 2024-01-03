import { html, TemplateResult } from 'lit';
import { PieNotification, NotificationProps, variants, headingLevels } from '@justeattakeaway/pie-notification';
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
    heading: 'Title',
    headingLevel: 'h3',
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
        heading: {
            description: 'The text to display in the notification\'s heading.',
            control: 'text',
        },
        headingLevel: {
            description: 'The HTML heading tag to use for the notification\'s heading. Can from h2 to h6.',
            control: 'select',
            options: headingLevels,
        },
        slot: {
            description: 'Content to place within the notification.',
            control: 'text',
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
        heading,
        headingLevel,
        slot,
    } = props;

    return html`
        <pie-notification
            isOpen="${isOpen}"
            variant="${variant}"
            compact="${compact}"
            heading="${heading}"
            headingLevel="${headingLevel}"
            >
            ${slot}
        </pie-notification>
    `;
};

export const Default = createStory<NotificationProps>(Template, defaultArgs)();
