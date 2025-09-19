import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import styles from './data-table-row.scss?inline';
import {
    type DataTableRowProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-data-table-row';

/**
 * @tagname pie-data-table-row
 */
@safeCustomElement('pie-data-table-row')
export class PieDataTableRow extends PieElement implements DataTableRowProps {
    /**
     * Whether the row is currently selected
     */
    @property({ type: Boolean })
    public isSelected?: DataTableRowProps['isSelected'];

    /**
     * Whether the row is hidden
     */
    @property({ type: Boolean })
    public isHidden?: DataTableRowProps['isHidden'];

    render () {
        const { isSelected, isHidden } = this;

        if (isHidden) {
            return nothing;
        }

        const rowClasses = {
            'c-data-table-row': true,
            'c-data-table-row--selected': Boolean(isSelected),
        };

        return html`
            <tr class="${classMap(rowClasses)}">
                <slot></slot>
            </tr>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableRow;
    }
}
