import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';

import styles from './data-table-cell.scss?inline';
import {
    type DataTableCellProps,
    dataTableCellTextAlign,
    defaultProps,
} from './defs';

export * from './defs';

const componentSelector = 'pie-data-table-cell';

/**
 * @tagname pie-data-table-cell
 */
@safeCustomElement('pie-data-table-cell')
export class PieDataTableCell extends PieElement implements DataTableCellProps {
    /**
     * Text alignment for the cell content
     */
    @property({ type: String })
    @validPropertyValues(componentSelector, dataTableCellTextAlign, defaultProps.textAlign)
    public textAlign?: DataTableCellProps['textAlign'];

    /**
     * Whether the cell is hidden
     */
    @property({ type: Boolean })
    public isHidden?: DataTableCellProps['isHidden'];

    connectedCallback () {
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'cell');
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

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableCell;
    }
}
