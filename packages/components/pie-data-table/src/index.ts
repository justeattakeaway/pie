import { html, nothing, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import styles from './data-table.scss?inline';
import {
    type DataTableProps,
    type Column,
    type DataTableAdditionalRow,
    defaultProps,
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
     * Arbitrary additional rows to display at the bottom of the table
     */
    @property({ type: Array })
    public additionalRows?: DataTableAdditionalRow[] = defaultProps.additionalRows;

    /**
     * Maps text alignment values to corresponding CSS classes
     *
     * @param prefix - The prefix for the CSS class
     * @param textAlign - The text alignment value
     * @returns An object with CSS classes as keys and boolean values indicating whether the class should be applied
     */
    private mapTextAlignClasses (prefix: string, textAlign?: string) {
        return {
            [`${prefix}-text-align--left`]: textAlign === 'left',
            [`${prefix}-text-align--right`]: textAlign === 'right',
            [`${prefix}-text-align--center`]: textAlign === 'center',
        };
    }

    /**
     * Renders a header cell for the table
     * @param column - The column definition to render
     */
    private renderHeaderCell (column: Column) {
        const { width, heading, textAlign } = column;
        const style = width ? `width: ${width}` : nothing;
        const classes = {
            'c-data-table-header': true,
            ...this.mapTextAlignClasses('c-data-table-header', textAlign),
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
            ...this.mapTextAlignClasses('c-data-table-cell', column.textAlign),
        };

        return html`
            <td class="${classMap(classes)}">
                ${column.accessor ? this.renderCellContent(row[column.accessor]) : ''}
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

    /**
     * Renders the additional rows for the table
     */
    private renderAdditionalRows () {
        /* eslint-disable indent */
        return html`
            <tfoot>
                ${this.additionalRows && this.additionalRows.length > 0 && this.additionalRows.map((row) => {
                    const rowClasses = {
                        'c-data-table-row': true,
                        'c-data-table-row--hidden': !!row.hideRow,
                    };
                    return html`
                        <tr class="${classMap(rowClasses)}">
                        ${row.cells.map((cell) => {
                            const cellClasses = {
                                'c-data-table-cell': true,
                                'c-data-table-cell--hidden': !!cell.hideCell,
                                ...this.mapTextAlignClasses('c-data-table-cell', cell.textAlign),
                            };

                            return html`
                                <td
                                    class="${classMap(cellClasses)}"
                                    colspan=${cell.colSpan || 1}
                                >
                                    ${cell.content}
                                </td>
                            `;
                        })}
                        </tr>
                    `;
                })}
            </tfoot>
        `;
        /* eslint-enable indent */
    }

    /**
     * Util method that checks if a string contains HTML tags
     */
    private isHTMLString (str: string): boolean {
        return /<[a-z][\s\S]*>/i.test(str.trim());
    }

    /**
     * Renders the content of a table cell, handling different types of content
     *
     * @param value - The content to render in the cell
     */
    private renderCellContent (value: unknown): unknown {
        if (value == null) {
            return '';
        }

        if ((value instanceof HTMLElement) || (value && typeof value === 'object')) {
            return value;
        }

        if (typeof value === 'function') {
            return this.renderCellContent(value());
        }

        if (typeof value === 'string' && this.isHTMLString(value)) {
            return unsafeHTML(value);
        }

        return String(value);
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
                    ${this.additionalRows && this.additionalRows.length > 0 ? this.renderAdditionalRows() : nothing}
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
