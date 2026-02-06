import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './data-table-head.scss?inline';
import { type DataTableHeadProps } from './defs';

export * from './defs';

const componentSelector = 'pie-data-table-head';

/**
 * @tagname pie-data-table-head
 * @slot - Default slot
 */
@safeCustomElement('pie-data-table-head')
export class PieDataTableHead extends PieElement implements DataTableHeadProps {
    connectedCallback () {
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'rowgroup');
        }
        super.connectedCallback();
    }

    render () {
        return html`<slot></slot>`;
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableHead;
    }
}

