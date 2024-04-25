import { html, unsafeStatic } from 'lit/static-html.js';
import kebabCase from 'just-kebab-case';
import * as icons from '@justeattakeaway/pie-icons-webc';
import { createStory, type TemplateFunction } from '../utilities';

const iconsStoryMeta = {
    title: 'Icons',
    parameters: {
        layout: 'fullscreen',
    },
};

export default iconsStoryMeta;

const iconGalleryTemplate: TemplateFunction<null> = () => html`
<div style="padding: var(--dt-spacing-b); display: grid; grid-template-columns: repeat(auto-fill, minmax(40px, 1fr)); gap: var(--dt-spacing-c); justify-items: center; align-items: center;">
    ${Object.keys(icons).map((iconName) => {
    const tag = unsafeStatic(kebabCase(iconName));
    return html`
        <${tag}></${tag}>
    `;
})}
</div>
`;

type RegularIconProps = {
    size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
}

const defaultRegularIconProps: RegularIconProps = {
    size: 'xs',
};

type LargeIconProps = {
    size: number
}

const defaultLargeIconProps: LargeIconProps = {
    size: 32,
};

const regularIconTemplate: TemplateFunction<RegularIconProps> = ({ size }) => html`
    <div style="display: grid; place-items: center;">
        <icon-chat-conversation size=${size}></icon-chat-conversation>
        <pre>&lt;icon-chat-conversation&gt;&lt;/icon-chat-conversation&gt;</pre>
    </div>
`;

const largeIconTemplate: TemplateFunction<LargeIconProps> = ({ size }) => html`
    <div style="display: grid; place-items: center;">
        <icon-chat-conversation-large size=${size}></icon-chat-conversation-large>
        <pre>&lt;icon-chat-conversation-large&gt;&lt;/icon-chat-conversation-large&gt;</pre>
    </div>
`;

export const Default = createStory(iconGalleryTemplate, {})();

export const RegularIcon = createStory(regularIconTemplate, defaultRegularIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            description: 'Use our predefined size aliases for regular sized icons: `xs`, `s`, `m`, `l`, `xl`, `xxl`',
            control: 'select',
            options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
            defaultValue: {
                summary: 'xs',
            },
        },
    },
});

export const LargeIcon = createStory(largeIconTemplate, defaultLargeIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            description: 'For large icons, size must be a number greater than or equal to `32`, and a multiple of `8`.',
            control: { type: 'number', min: 32, step: 8 },
            defaultValue: {
                summary: 32,
            },
        },
    },
});
