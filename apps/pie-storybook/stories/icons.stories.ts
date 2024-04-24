import { html, unsafeStatic } from 'lit/static-html.js';
import kebabCase from 'just-kebab-case';
import * as icons from '@justeattakeaway/pie-icons-webc';
import { createStory, type TemplateFunction } from '../utilities';

const iconsStoryMeta: DividerStoryMeta = {
    title: 'Icons',
};

export default iconsStoryMeta;

const iconGalleryTemplate: TemplateFunction = () => html`
<div style="display: flex; flex-wrap: wrap; margin-top: var(--dt-spacing-c);">
    ${Object.keys(icons).map((iconName) => {
    const tag = unsafeStatic(kebabCase(iconName));
    return html`
        <${tag}></${tag}>
    `;
})}
</div>
`;

export const Default = createStory(iconGalleryTemplate, {})();
