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
     * Renders the table header
     */
    private renderTableHeader () {
        return html`
            <thead>
                <tr>
                    ${this.columns.map((column) => html`
                        <th class="c-data-table-header">
                            ${column.heading}
                        </th>
                    `)}
                </tr>
            </thead>
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
                        ${this.columns.map((column) => html`
                            <td class="c-data-table-cell">
                                ${column.accessor ? row[column.accessor] : ''}
                            </td>
                        `)}
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
