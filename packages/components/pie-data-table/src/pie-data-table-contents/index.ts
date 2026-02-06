import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './data-table-contents.scss?inline';
import { type DataTableContentsProps } from './defs';

export * from './defs';

const componentSelector = 'pie-data-table-contents';

/**
 * @tagname pie-data-table-contents
 * @slot - Default slot
 */
@safeCustomElement('pie-data-table-contents')
export class PieDataTableContents extends PieElement implements DataTableContentsProps {
    connectedCallback () {
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'table');
        }
        super.connectedCallback();
    }

    render () {
        return html`<slot></slot>`;
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableContents;
    }
}
