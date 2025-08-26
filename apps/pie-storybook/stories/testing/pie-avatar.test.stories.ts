import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-avatar';
import { type AvatarProps, tags } from '@justeattakeaway/pie-avatar';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createStory, type TemplateFunction } from '../../utilities';

const ImageUrl = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

type AvatarStoryMeta = Meta<AvatarProps>;
type OptionalAvatarProps = Partial<AvatarProps>; // giving us a type that can have any of the props in the AvatarProps but can miss any of them (allows us to get {})

const avatarStoryMeta: AvatarStoryMeta = {
    title: 'Avatar',
    component: 'pie-avatar',
    argTypes: {
        label: {
            description: 'The name to display in the Avatar as initials. Should be a username, first and last name or company name.',
            control: {
                type: 'text',
            },
        },
        tag: {
            description: 'Set the element tag of the avatar.',
            control: 'select',
            options: tags,
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
    src: ImageUrl,
})();

