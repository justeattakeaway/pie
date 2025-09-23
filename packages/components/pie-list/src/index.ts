import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';

import styles from './list.scss?inline';
import {
    defaultProps,
    type ListProps,
    type ListType,
    type ListVariant,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list';

/**
 * @tagname pie-list
 *
 * PIE List component for displaying collections of related items.
 *
 * @slot - List items to render inside the component. Supports `<pie-list-item>`
 * elements or custom markup that behaves like a native list item.
 */
@safeCustomElement('pie-list')
export class PieList extends RtlMixin(PieElement) implements ListProps {
    @property({ type: String, reflect: true })
    public variant: ListVariant = defaultProps.variant;

    @property({
        type: Boolean,
        reflect: true,
        attribute: 'has-dividers',
    })
    public hasDividers = defaultProps.hasDividers;

    @property({
        type: String,
        reflect: true,
        attribute: 'list-type',
    })
    public listType: ListType = defaultProps.listType;

    connectedCallback () {
        super.connectedCallback();

        if (!this.hasAttribute('data-test-id')) {
            this.setAttribute('data-test-id', 'pie-list');
        }
    }

    render () {
        const isOrderedList = this.listType === 'ordered';

        return isOrderedList
            ? html`
                <ol class="c-list" data-test-id="pie-list-content" role="list">
                    <slot></slot>
                </ol>
            `
            : html`
                <ul class="c-list" data-test-id="pie-list-content" role="list">
                    <slot></slot>
                </ul>
            `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieList;
    }
}
