import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './data-table-body.scss?inline';
import { type DataTableBodyProps } from './defs';

export * from './defs';

const componentSelector = 'pie-data-table-body';

/**
 * @tagname pie-data-table-body
 * @slot - Default slot
 */
@safeCustomElement('pie-data-table-body')
export class PieDataTableBody extends PieElement implements DataTableBodyProps {
    render () {
        return html`<slot></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableBody;
    }
}
