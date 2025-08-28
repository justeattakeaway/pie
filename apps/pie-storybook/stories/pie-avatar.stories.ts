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
            description: 'The name to display in the Avatar as initials. Should be a username, first and last name or company name.',
            control: 'text',
        },
        tag: {
            description: 'Set the element tag of the avatar.',
            control: 'select',
            options: tags,
            defaultValue: {
                summary: defaultProps.tag,
            },
        },
        src: {
            description: 'Used to load an image to display inside the Avatar',
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

export default avatarStoryMeta;

const Template = ({ label, tag, src }: AvatarProps) => html`
    <pie-avatar label="${ifDefined(label)}" tag="${ifDefined(tag)}" src="${ifDefined(src)}"></pie-avatar>
`;

const createAvatarStory = createStory<AvatarProps>(Template, defaultArgs);

export const Default = createAvatarStory();

export const WithImage = createAvatarStory({ src: './static/images/pie-avatar--static-image.jpg' });
