import { LitElement } from 'lit';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { type ListItemProps } from './defs';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 */
@safeCustomElement('pie-list-item')
export class PieListItem extends LitElement implements ListItemProps {
    // component logic
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListItem;
    }
}
