import { html, unsafeCSS, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list-item.scss?inline';
import { type ListItemProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 * @slot - Default slot for the item's content.
 */
@safeCustomElement('pie-list-item')
export class PieListItem extends PieElement implements ListItemProps {
    @property({ type: Boolean, reflect: true })
    public selected = false;

    @property({ type: String })
    public value = '';

    connectedCallback (): void {
        super.connectedCallback();
        if (!this.hasAttribute('tabindex')) {
            this.tabIndex = -1;
        }
    }

    updated (changedProperties: PropertyValues<this>): void {
        // Role + aria-selected presence are owned by the parent pie-list.
        // We only keep its value in sync with `selected` when it's set.
        if (changedProperties.has('selected') && this.hasAttribute('aria-selected')) {
            this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
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
        [componentSelector]: PieListItem;
    }
}
