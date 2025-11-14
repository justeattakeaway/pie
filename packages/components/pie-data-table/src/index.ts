import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import styles from './data-table.scss?inline';
import {
    type DataTableProps,
    type Column,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-data-table';

/**
 * @tagname pie-data-table
 */
@safeCustomElement('pie-data-table')
export class PieDataTable extends RtlMixin(PieElement) implements DataTableProps {
    /**
     * Array of column definitions
     */
    @property({ type: Array })
    public columns: Column[] = [];

    /**
     * Array of data objects to display
     */
    @property({ type: Array })
    public data: Record<string, unknown>[] = [];

    /**
     * Renders a header cell for the table
     * @param column - The column definition to render
     */
    private renderHeaderCell (column: Column) {
        const { width, heading, textAlign } = column;
        const style = width ? `width: ${width}` : nothing;
        const classes = {
            'c-data-table-header': true,
            'c-data-table-header-text-align--left': textAlign === 'left',
            'c-data-table-header-text-align--right': textAlign === 'right',
            'c-data-table-header-text-align--center': textAlign === 'center',
        };

        return html`
            <th style="${style}" class="${classMap(classes)}">
                ${heading}
            </th>
        `;
    }

    /**
     * Renders the table header
     */
    private renderTableHeader () {
        return html`
            <thead>
                <tr>
                    ${this.columns.map((column) => this.renderHeaderCell(column))}
                </tr>
            </thead>
        `;
    }

    /**
     * Renders a table cell for the given column and row
     * @param column - The column definition to render
     * @param row - The data object for the current row
     */
    private renderTableCell (column: Column, row: Record<string, unknown>) {
        const classes = {
            'c-data-table-cell': true,
            'c-data-table-cell-text-align--left': column.textAlign === 'left',
            'c-data-table-cell-text-align--right': column.textAlign === 'right',
            'c-data-table-cell-text-align--center': column.textAlign === 'center',
        };

        return html`
            <td class="${classMap(classes)}">
                ${column.accessor ? row[column.accessor] : ''}
            </td>
        `;
    }

    /**
     * Renders the table rows
     */
    private renderTableRows () {
        return html`
            <tbody>
                ${this.data.map((row) => html`
                    <tr class="c-data-table-row">
                        ${this.columns.map((column) => this.renderTableCell(column, row))}
                    </tr>
                `)} 
            </tbody>
        `;
    }

    render () {
        const classes = {
            'c-data-table': true,
        };

        return html`
            <div class="${classMap(classes)}">
                <slot name="table-header"></slot>
                <table>
                    ${this.columns.length > 0 ? this.renderTableHeader() : nothing}
                    ${this.data.length > 0 ? this.renderTableRows() : nothing}
                </table>
            </div>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTable;
    }
}
