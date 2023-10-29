import { html } from 'lit';
import { PieNotification, NotificationProps } from '@justeattakeaway/pie-notification';
import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieNotification];

type NotificationStoryMeta = StoryMeta<NotificationProps>;

const defaultArgs: NotificationProps = {};

const notificationStoryMeta: NotificationStoryMeta = {
    title: 'Notification',
    component: 'pie-notification',
    argTypes: {},
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
const Template = ({}: NotificationProps) => html`
    <pie-notification></pie-notification>
`;

export const Default = createStory<NotificationProps>(Template, defaultArgs)();
