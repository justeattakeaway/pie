import { html, unsafeStatic } from 'lit/static-html.js';
import kebabCase from 'just-kebab-case';
import * as icons from '@justeattakeaway/pie-icons-webc';
import {
    regularIconSizes, largeIconSizeDefault, regularIconSizeDefault, largeIconSizeModule, type LargeIconSize, type RegularIconSize,
} from '@justeattakeaway/pie-icons-configs';
import { createStory, type TemplateFunction } from '../utilities';

const iconsStoryMeta = {
    title: 'Additional libraries/Icons',
    parameters: {
        layout: 'fullscreen',
    },
};

export default iconsStoryMeta;

const iconGalleryTemplate: TemplateFunction<null> = () => html`
<style>
    .c-iconGallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: var(--dt-spacing-e);
        padding: var(--dt-spacing-b);
        justify-items: center;
        text-align: center;
    }

    .c-iconGallery-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--dt-spacing-b);
    }

    .c-iconGallery-item p {
        font-size: calc(var(--dt-font-caption-size) * 1px);
        color: var(--dt-color-content);
        margin: 0;
        word-break: break-word;
    }
</style>

<div class="c-iconGallery">
    ${Object.keys(icons).map((iconName) => {
    const tag = unsafeStatic(kebabCase(iconName));
    return html`
            <div class="c-iconGallery-item">
                <${tag}></${tag}>
                <p>${tag}</p>
            </div>
        `;
})}
</div>
`;

type RegularIconProps = {
    size: RegularIconSize
}

const defaultRegularIconProps: RegularIconProps = {
    size: regularIconSizeDefault,
};

type LargeIconProps = {
    size: LargeIconSize
}

const defaultLargeIconProps: LargeIconProps = {
    size: largeIconSizeDefault,
};

const regularIconTemplate: TemplateFunction<RegularIconProps> = ({ size }) => html`
    <div class="c-iconGrid">
        <icon-chat-conversation size=${size}></icon-chat-conversation>
        <pre>&lt;icon-chat-conversation&gt;&lt;/icon-chat-conversation&gt;</pre>
    </div>
`;

const largeIconTemplate: TemplateFunction<LargeIconProps> = ({ size }) => html`
    <div class="c-iconGrid">
        <icon-chat-conversation-large size=${size}></icon-chat-conversation-large>
        <pre>&lt;icon-chat-conversation-large&gt;&lt;/icon-chat-conversation-large&gt;</pre>
    </div>
`;

export const AllIcons = createStory(iconGalleryTemplate, {})();

export const RegularIcon = createStory(regularIconTemplate, defaultRegularIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            description: 'Use our predefined size aliases for regular sized icons',
            control: 'select',
            options: regularIconSizes,
            defaultValue: {
                summary: regularIconSizeDefault,
            },
        },
    },
});

export const LargeIcon = createStory(largeIconTemplate, defaultLargeIconProps)({}, {
    layout: 'centered',
    argTypes: {
        size: {
            description: `For large icons, size must be a number greater than or equal to \`${largeIconSizeDefault}\`, and a multiple of \`${largeIconSizeModule}\`.`,
            control: { type: 'number', min: largeIconSizeDefault, step: largeIconSizeModule },
            defaultValue: {
                summary: largeIconSizeDefault,
            },
        },
    },
});
