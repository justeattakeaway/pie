import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';

import styles from './list.scss?inline';
import { type ListProps, defaultProps, type variants } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list';

/**
 * @tagname pie-list
 *
 * PIE List component for displaying collections of related items.
 */
@safeCustomElement('pie-list')
export class PieList extends RtlMixin(PieElement) implements ListProps {
    @property({ type: String, reflect: true })
    public variant: typeof variants[number] = defaultProps.variant;

    @property({
        type: Boolean,
        reflect: true,
        attribute: 'has-dividers',
    })
    public hasDividers = defaultProps.hasDividers;

    connectedCallback () {
        super.connectedCallback();

        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'list');
        }

        if (!this.hasAttribute('data-test-id')) {
            this.setAttribute('data-test-id', 'pie-list');
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
