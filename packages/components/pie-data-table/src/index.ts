import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './data-table.scss?inline';
import { type DataTableProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-data-table';

/**
 * @tagname pie-data-table
 */
@safeCustomElement('pie-data-table')
export class PieDataTable extends RtlMixin(PieElement) implements DataTableProps {
    render () {
        return html`<h1 data-test-id="pie-data-table">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTable;
    }
}
