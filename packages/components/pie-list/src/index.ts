import { html, unsafeCSS } from 'lit';
import { provide } from '@lit/context';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    RtlMixin, safeCustomElement, listTypeContext, type ListType,
} from '@justeattakeaway/pie-webc-core';

import styles from './list.scss?inline';
import { type ListProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list';

/**
 * @tagname pie-list
 */
@safeCustomElement('pie-list')
export class PieList extends RtlMixin(PieElement) implements ListProps {
    // Tells descendant `pie-list-item`s they are in a static (non-selectable) list, so
    // they keep their `listitem` role. Radio and checkbox groups provide different values.
    @provide({ context: listTypeContext })
    protected _providedListType: ListType = 'list';

    connectedCallback (): void {
        super.connectedCallback();

        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'list');
        }
    }

    render () {
        return html`<slot></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieList;
    }
}
