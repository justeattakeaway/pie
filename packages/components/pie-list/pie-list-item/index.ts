import { LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { type ListItemProps } from './defs';

const componentSelector = 'pie-sub-components';

/**
 * @tagname pie-sub-component
 */
export class PieListItemComponent extends LitElement implements ListItemProps {
    // component logic
}

defineCustomElement(componentSelector, PieListItemComponent);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListItemComponent;
    }
}
