import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

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

    @property({ type: Boolean, reflect: true })
    public dividers = defaultProps.dividers;

    render () {
        const classes = {
            'c-list': true,
            'c-list--compact': this.variant === 'compact',
            'c-list--dividers': this.dividers,
            'c-list--rtl': this.isRTL,
        };

        return html`
            <ul
                class=${classMap(classes)}
                role="list"
                data-test-id="pie-list">
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
