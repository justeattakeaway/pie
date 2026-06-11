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

    @property({ type: Boolean, reflect: true })
    public disabled = false;

    @property({ type: String })
    public value = '';

    updated (changedProperties: PropertyValues<this>): void {
        // Role + aria-selected/aria-disabled presence are owned by the parent
        // pie-list. We only keep their values in sync with `selected`/`disabled`
        // when the parent has set them.
        if (changedProperties.has('selected') && this.hasAttribute('aria-selected')) {
            this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
        }
        if (changedProperties.has('disabled') && this.hasAttribute('aria-disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        }
    }

    render () {
        return html`<div>
            <slot></slot>
        </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListItem;
    }
}
