import { TemplateResult, html } from 'lit';
import '@justeattakeaway/pie-tag';
import { StorybookContext } from '../interfaces/storybook-context';
import componentStatusesJson from '../component-statuses.json';
import { ComponentStatuses } from '../interfaces/component-statuses';
import { tagVariantToStatusMap } from '../data/tag-variants-to-statuses-map';

const componentStatuses: ComponentStatuses = componentStatusesJson;

export const ComponentStatus = (story: () => TemplateResult, storybookContext: StorybookContext) => {
    const componentStatus: string = componentStatuses[storybookContext.component];
    const tagVariant = tagVariantToStatusMap[componentStatus];
    const position = storybookContext.parameters.componentStatusPosition || 'bottom';

    if (storybookContext.viewMode === 'docs' || !componentStatus || !tagVariant) {
        return story();
    }

    const positionClass = position === 'top' ? 'c-componentStatus--top' : '';

    return html`
        <div class="pie-sb-status-wrapper">
            ${story()}

            <pie-tag variant="${tagVariant}" class="${`c-componentStatus ${positionClass}`}">
                Status: ${componentStatus}
            </pie-tag>
        </div>
    `;
};
