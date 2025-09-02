import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-avatar';
import { type AvatarProps, tags } from '@justeattakeaway/pie-avatar';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createStory, type TemplateFunction } from '../../utilities';

type AvatarStoryMeta = Meta<AvatarProps>;
type OptionalAvatarProps = Partial<AvatarProps>; // giving us a type that can have any of the props in the AvatarProps but can miss any of them (allows us to get {})

const avatarStoryMeta: AvatarStoryMeta = {
    title: 'Avatar',
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
        },
        src: {
            description: 'Used to load an image to display inside the Avatar',
            control: 'text',
        },
    },
};

export default avatarStoryMeta;

const Template: TemplateFunction<AvatarProps> = ({ label, tag, src }: AvatarProps) => html`
    <pie-avatar
    tag="${ifDefined(tag)}"
    label="${ifDefined(label)}"
    src="${ifDefined(src)}">
    </pie-avatar>
`;

export const Default = createStory<OptionalAvatarProps>(Template, {})();

export const LabelProvided = createStory<OptionalAvatarProps>(Template, {
    tag: 'div',
    label: 'Alice Johnson',
})();

export const WithImage = createStory<OptionalAvatarProps>(Template, {
    tag: 'div',
    src: './static/images/pie-avatar--static-image.jpg',
})();
