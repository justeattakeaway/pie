import React from 'react';
import '@justeattakeaway/pie-tag';
import componentStatusesJson from '../../../component-statuses.json';
import { tagVariantToStatusMap } from '../data/tag-variants-to-statuses-map';
import '@justeattakeaway/pie-icons-webc/dist/IconHelpCircle.js';

export const ComponentStatus = ({ component }) => {
    const componentStatus = componentStatusesJson[component];
    const tagVariant = tagVariantToStatusMap[componentStatus];

    return (
        <div className="pie-sb-status-wrapper">
            <pie-tag variant={tagVariant} class="c-componentStatus">
                Status: {componentStatus}
                <a
                    href="https://pie.design/components/component-status/#status-descriptions"
                    target="_blank"
                    slot="icon"
                    aria-labelledby="status-docs-link">
                    <icon-help-circle></icon-help-circle>
                </a>

                <p id="status-docs-link" hidden>
                    Component status documentation link
                </p>
            </pie-tag>
        </div>
    );
};
