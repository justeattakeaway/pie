import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/avatar';
import { type AvatarProps, defaultProps, tags } from '@justeattakeaway/pie-webc/components/avatar';

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
    <style>
    :root {
        --stripe-thickness: 10px;
    }
    .stripes {
        background-color: var(--dt-color-support-positive-02);
        background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent var(--stripe-thickness),
            color-mix(in srgb, var(--dt-color-support-positive) 35%, transparent) var(--stripe-thickness),
            color-mix(in srgb, var(--dt-color-support-positive) 35%, transparent) calc(var(--stripe-thickness) * 2)
        );

        /* Presentation styles for the demo */
        padding: 24px;
        margin-bottom: 20px;
        border-radius: 8px;
        line-height: 1.5;
        width: 200px;
    }
    </style>
    <div class="stripes"></div>
`;

const createAvatarStory = createStory<AvatarProps>(Template, defaultArgs);

export const Default = createAvatarStory();

export const WithImage = createAvatarStory({ src: './static/images/pie-avatar--static-image.jpg' });
