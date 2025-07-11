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
            description: 'Set the element tag of the link.',
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

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({ label, tag }: AvatarProps) => html`
    <pie-avatar label= "${ifDefined(label)}" tag="${ifDefined(tag)}"></pie-avatar>
`;

export const Default = createStory<AvatarProps>(Template, defaultArgs)();
