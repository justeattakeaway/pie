import { type TemplateResult, html } from 'lit';
import '@justeattakeaway/pie-tag';
import '@justeattakeaway/pie-icons-webc/dist/IconHelpCircle.js';
import componentStatusesJson from '@justeattakeaway/pie-monorepo-utils/dist/component-statuses.json';
import { type StorybookContext } from '../interfaces/storybook-context';
import { type ComponentStatuses } from '../interfaces/component-status';
import { tagVariantToStatusMap } from '../data/tag-variants-to-statuses-map';

const componentStatuses: ComponentStatuses = componentStatusesJson;

export const ComponentStatus = (story: () => TemplateResult, storybookContext: StorybookContext) => {
    const componentStatus: string = componentStatuses[storybookContext.component];
    const tagVariant = tagVariantToStatusMap[componentStatus];
    const position = storybookContext.parameters.componentStatusPosition || 'bottom';

    // 'docs' view mode is used for documentation pages such as variants.mdx.
    // Story decorators will not wrap an entire page, so we do not want to use the decorator in this case.
    // For those pages, we will use the component status DocBlock instead.
    if (storybookContext.viewMode === 'docs' || !componentStatus || !tagVariant) {
        return story();
    }

    const positionClass = position === 'top' ? 'c-componentStatus--top' : '';

    return html`
        <div class="pie-sb-status-wrapper">
            ${story()}

            <div class="${`c-componentStatus ${positionClass} percyHidden`}">
                <pie-tag variant="${tagVariant}" hasLeadingIcon>
                    Status: ${componentStatus}
                    <a
                        href="https://pie.design/components/component-status/#status-descriptions"
                        target="_blank"
                        slot="icon"
                        aria-labelledby="status-docs-link">
                        <icon-help-circle></icon-help-circle>
                    </a>
                </pie-tag>

                <p id="status-docs-link" hidden>
                    Component status documentation link
                </p>
            </div>
        </div>
    `;
};
