import React from 'react';
import '@justeattakeaway/pie-tag';
import componentStatusesJson from '../component-statuses.json';
import { tagVariantToStatusMap } from '../data/tag-variants-to-statuses-map';

const componentStatuses = componentStatusesJson;

export const ComponentStatus = ({ component }) => {
    const componentStatus = componentStatuses[component];
    const tagVariant = tagVariantToStatusMap[componentStatus];

    return (
        <div className="pie-sb-status-wrapper">
            <pie-tag variant={tagVariant} class="c-componentStatus">
                Status: {componentStatus}
            </pie-tag>
        </div>
    );
};
