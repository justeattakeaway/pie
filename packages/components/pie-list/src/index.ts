import { html, unsafeCSS, type PropertyValues } from 'lit';
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

const HOST_CLASS_COMPACT = 'c-list--variant-compact';
const HOST_CLASS_WITH_DIVIDERS = 'c-list--with-dividers';
const HOST_CLASS_ORDERED = 'c-list--ordered';

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
    })
    public hasDividers = defaultProps.hasDividers;

    @property({
        type: String,
        attribute: 'list-type',
    })
    public listType: ListType = defaultProps.listType;

    connectedCallback () {
        super.connectedCallback();

        this.updateHostClasses();
    }

    protected updated (changedProperties: PropertyValues<ListProps>) {
        super.updated(changedProperties);

        if (changedProperties.has('variant') || changedProperties.has('hasDividers') || changedProperties.has('listType')) {
            this.updateHostClasses();
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

    private updateHostClasses () {
        this.classList.toggle(HOST_CLASS_COMPACT, this.variant === 'compact');
        this.classList.toggle(HOST_CLASS_WITH_DIVIDERS, this.hasDividers);
        this.classList.toggle(HOST_CLASS_ORDERED, this.listType === 'ordered');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieList;
    }
}
