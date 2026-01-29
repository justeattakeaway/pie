import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';

import styles from './data-table-head-cell.scss?inline';
import {
    type DataTableHeadCellProps,
    dataTableHeadCellTextAlign,
    defaultProps,
} from './defs';

export * from './defs';

const componentSelector = 'pie-data-table-head-cell';

/**
 * @tagname pie-data-table-head-cell
 * @slot - Default slot
 */
@safeCustomElement('pie-data-table-head-cell')
export class PieDataTableHeadCell extends PieElement implements DataTableHeadCellProps {
    /**
     * Text alignment for the cell content
     */
    @property({ type: String })
    @validPropertyValues(componentSelector, dataTableHeadCellTextAlign, defaultProps.textAlign)
    public textAlign?: DataTableHeadCellProps['textAlign'];

    /**
     * Whether the cell is hidden
     */
    @property({ type: Boolean })
    public isHidden?: DataTableHeadCellProps['isHidden'];

    connectedCallback () {
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'columnheader');
        }
        super.connectedCallback();
    }

    render () {
        const { isHidden } = this;

        if (isHidden) {
            return nothing;
        }

        return html`<slot></slot>`;
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableHeadCell;
    }
}
