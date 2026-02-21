import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

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
    @property({ type: String })
    public variant: ListVariant = defaultProps.variant;

    @property({
        type: Boolean,
        attribute: 'has-dividers',
        reflect: true,
    })
    public hasDividers = defaultProps.hasDividers;

    @property({ type: String })
    public listType: ListType = defaultProps.listType;

    render () {
        const isOrderedList = this.listType === 'ordered';

        const classes = {
            'c-list': true,
            [`c-list--${this.variant}`]: true,
            'c-list--ordered': isOrderedList,
            'c-list--with-dividers': this.hasDividers,
        };

        return isOrderedList
            ? html`
                <ol class=${classMap(classes)} data-test-id="pie-list-content" role="list">
                    <slot></slot>
                </ol>
            `
            : html`
                <ul class=${classMap(classes)} data-test-id="pie-list-content" role="list">
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
