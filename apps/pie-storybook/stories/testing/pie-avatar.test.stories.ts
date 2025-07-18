import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-avatar';
import { type AvatarProps, defaultProps, tags } from '@justeattakeaway/pie-avatar';
import { ifDefined } from 'lit/directives/if-defined.js';
/* import { type SlottedComponentProps } from '../../types'; // check if needed
 */
import { createStory, type TemplateFunction } from '../../utilities';

/* interface ExtendedAvatarProps extends AvatarProps {
    showLabelFallbackInfo?: boolean;
} */

type AvatarStoryMeta = Meta<AvatarProps>;
// this is an optional type of the AvatarProps because in the browser there is no such thing as required properties and we want to test against runtime weirdness. :)
type OptionalAvatarProps = Partial<AvatarProps>; // giving us a type that can have any of the props in the AvatarProps but can miss any of them (allows us to get {})

const avatarStoryMeta: AvatarStoryMeta = {
    title: 'Avatar',
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
        },
    },
};

export default avatarStoryMeta;

const Template: TemplateFunction<AvatarProps> = ({ label, tag }: AvatarProps) => html`
    <pie-avatar
    tag="${ifDefined(tag)}"
    label="${ifDefined(label)}">
    </pie-avatar>
`;

export const Default = createStory<OptionalAvatarProps>(Template, {})();

export const LabelProvided = createStory<OptionalAvatarProps>(Template, {
    tag: 'div',
    label: 'Alice Johnson',
})();
