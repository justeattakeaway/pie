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
        aria: {
            description: 'ARIA attributes for the avatar. Offers label — use it when no visible text is associated with the avatar. Not applied when tag is `div`.',
            control: 'object',
        },
        label: {
            description: 'User or company name rendered as initials. If `src` is provided, the image is shown instead; if the image fails to load, the user icon is shown.',
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
            description: 'The `src` attribute for the underlying image tag. If the image fails to load, the user icon is rendered instead. Changing `src` retries the load, falling back to the icon again if the new image also fails.',
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

const Template = ({
    label, tag, src, aria,
}: AvatarProps) => html`
    <pie-avatar
        label="${ifDefined(label)}"
        tag="${ifDefined(tag)}"
        src="${ifDefined(src)}"
        .aria="${aria}">
    </pie-avatar>
`;

const createAvatarStory = createStory<AvatarProps>(Template, defaultArgs);

export const Default = createAvatarStory();

export const WithImage = createAvatarStory({ src: './static/images/pie-avatar--static-image.jpg' });
