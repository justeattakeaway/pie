import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import styles from './data-table-cell.scss?inline';
import {
    type DataTableCellProps,
    dataTableCellTextAlign,
    defaultProps,
} from './defs';

// Valid values available to consumers
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

    /**
     * Content value to render in the cell
     */
    @property()
    public value?: DataTableCellProps['value'];

    /**
     * Renders cell content based on the value type
     */
    private renderCellContent (value: unknown): unknown {
        // If it's null or undefined, return empty string
        if (value == null) {
            return '';
        }

        // If it's an HTMLElement, return it directly
        if (value instanceof HTMLElement) {
            return value;
        }

        // If it's a TemplateResult (lit-html), return it directly
        if (value && typeof value === 'object' && (value as { _$litType$?: unknown })._$litType$) {
            return value;
        }

        // If it's a function, call it
        if (typeof value === 'function') {
            return this.renderCellContent(value());
        }

        // For primitives, convert to string
        return String(value);
    }

    render () {
        const { textAlign, isHidden, value } = this;

        if (isHidden) {
            return nothing;
        }

        const cellClasses = {
            'c-data-table-cell': true,
            [`c-data-table-cell-text-align--${textAlign || 'left'}`]: true,
        };

        return html`
            <td class="${classMap(cellClasses)}">
                ${value !== undefined ? this.renderCellContent(value) : html`<slot></slot>`}
            </td>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableCell;
    }
}
