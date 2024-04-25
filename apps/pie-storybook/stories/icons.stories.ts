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

export const Default = createStory(iconGalleryTemplate, {})();
