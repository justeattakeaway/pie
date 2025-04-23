import { LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { type ListItemProps } from './defs';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 */
export class PieListItem extends LitElement implements ListItemProps {
    // component logic
}

defineCustomElement(componentSelector, PieListItem);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListItem;
    }
}
