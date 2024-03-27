import React from 'react';
import { PieTag } from '@justeattakeaway/pie-tag/dist/react';
import json from '../component-statuses.json';
import { ComponentStatuses } from '../interfaces/component-statuses';
import { tagVariantToStatusMap } from '../data/tag-variants-to-statuses-map';

const componentStatuses: ComponentStatuses = json;

export const ComponentStatus = ({ component }) => {
    const componentStatus: string = componentStatuses[component];
    const tagVariant = tagVariantToStatusMap[componentStatus];

    return (
        <div className="pie-sb-status-wrapper">
            <PieTag variant={tagVariant} className="c-componentStatus">
                Status: {componentStatus}
            </PieTag>
        </div>
    );
};
