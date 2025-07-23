import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-avatar';
import { type AvatarProps, defaultProps, tags } from '@justeattakeaway/pie-avatar';

import { ifDefined } from 'lit/directives/if-defined.js';
import { createStory } from '../utilities';

type AvatarStoryMeta = Meta<AvatarProps>;

const defaultArgs: AvatarProps = { ...defaultProps, label: 'Foo Bar' };

const avatarStoryMeta: AvatarStoryMeta = {
    title: 'Components/Avatar',
    component: 'pie-avatar',
    argTypes: {
        label: {
            description: 'Text for user name',
            control: {
                type: 'text',
            },
        },
        tag: {
            description: 'Set the element tag of the avatar.',
            control: 'select',
            options: tags,
            defaultValue: {
                summary: defaultProps.tag,
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

export default avatarStoryMeta;

const Template = ({ label, tag }: AvatarProps) => html`
    <pie-avatar label= "${ifDefined(label)}" tag="${ifDefined(tag)}"></pie-avatar>
`;

const createAvatarStory = createStory<AvatarProps>(Template, defaultArgs);

export const Default = createAvatarStory();

