import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './data-table-row.scss?inline';
import {
    type DataTableRowProps,
} from './defs';

export * from './defs';

const componentSelector = 'pie-data-table-row';

/**
 * @tagname pie-data-table-row
 * @slot - Default slot
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
        [componentSelector]: PieDataTableRow;
    }
}
