import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/avatar';
import { type AvatarProps, defaultProps, tags } from '@justeattakeaway/pie-webc/components/avatar';

import { ifDefined } from 'lit/directives/if-defined.js';
import { createStory } from '../utilities';
import '@justeattakeaway/pie-thumbnail';

type AvatarStoryMeta = Meta<AvatarProps>;

const defaultArgs: AvatarProps = { ...defaultProps, label: 'Foo Bar' };

const avatarStoryMeta: AvatarStoryMeta = {
    title: 'Components/Avatar',
    component: 'pie-avatar',
    argTypes: {
        type: {
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
    <div style="min-width: 300px; display: flex; gap: 8px; flex-direction: column;">
        <pie-avatar type="checkbox">
            <label for="1">
                Apple
                <input id="1" type="radio" name="fruit" value="apple" />
            </label>
        </pie-avatar>
        <pie-avatar type="checkbox">
            <label for="2">
                Banana
                <input id="2" type="radio" name="fruit" value="banana" />
            </label>
        </pie-avatar>
    </div>
    <div style="margin-top: 24px; min-width: 300px; display: flex; gap: 8px; flex-direction: column;">
        <pie-avatar type="checkbox">
        <label for="3">
        <p>Broccoli</p>
        </label>
        <input id="3" type="radio" name="veg" value="broccoli" />
        </pie-avatar>
        <pie-avatar type="checkbox">
            <label for="4">
                <pie-thumbnail src="./static/images/pie-logo.svg"></pie-thumbnail>
                <p>carrot</p>
            </label>
            <input id="4" type="radio" name="veg" value="carrot" />
        </pie-avatar>
    </div>

    <div style="margin-top: 42px; min-width: 300px; display: flex; gap: 8px; flex-direction: column;">
        <pie-avatar type="checkbox">
            <label for="5">
                Apple
                <input id="5" type="checkbox" name="fruit" value="apple" />
            </label>
        </pie-avatar>
        <pie-avatar type="checkbox">
            <label for="6">
                Banana
                <input id="6" type="checkbox" name="fruit" value="banana" />
            </label>
        </pie-avatar>
    </div>

<div style="margin-top: 24px; min-width: 300px; display: flex; gap: 8px; flex-direction: column;">
    <pie-avatar type="checkbox">
        <label for="7">
            <input id="7" type="checkbox" name="veg" value="broccoli" />
            <p>Broccoli</p>
        </label>
    </pie-avatar>
    <pie-avatar type="checkbox">
        <label for="8">
            <pie-thumbnail src="./static/images/pie-logo.svg"></pie-thumbnail>
            <p>carrot</p>
            <input id="8" type="checkbox" name="veg" value="carrot" />
        </label>
    </pie-avatar>
</div>
`;

// <pie-avatar type="ordered-list">
//     <input id="3" type="radio" name="fruit" value="mango" />
//     <label for="3">mango</label>
// </pie-avatar>

const createAvatarStory = createStory<AvatarProps>(Template, defaultArgs);

export const Default = createAvatarStory();

export const WithImage = createAvatarStory({ src: './static/images/pie-avatar--static-image.jpg' });
