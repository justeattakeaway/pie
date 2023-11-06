import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-notification';
import { NotificationProps } from '@justeattakeaway/pie-notification';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

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
