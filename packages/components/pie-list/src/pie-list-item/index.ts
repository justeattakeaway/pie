import { LitElement, html, unsafeCSS } from 'lit';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list-item.scss?inline';
import { type ListItemProps } from './defs';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 */
@safeCustomElement('pie-list-item')
export class PieListItem extends LitElement implements ListItemProps {
    render () {
        return html`<slot></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListItem;
    }
}
