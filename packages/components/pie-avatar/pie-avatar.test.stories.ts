import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-avatar';
import { type AvatarProps } from '@justeattakeaway/pie-avatar';

import { createStory } from '../../utilities';

type AvatarStoryMeta = Meta<AvatarProps>;

const defaultArgs: AvatarProps = {};

const avatarStoryMeta: AvatarStoryMeta = {
    title: 'Avatar',
    component: 'pie-avatar',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default avatarStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: AvatarProps) => html`
    <pie-avatar></pie-avatar>
`;

export const Default = createStory<AvatarProps>(Template, defaultArgs)();
