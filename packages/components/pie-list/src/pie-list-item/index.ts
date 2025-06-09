import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './list-item.scss?inline';
import { type ListItemProps, defaultProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 *
 * PIE List Item component for use within pie-list.
 */
@safeCustomElement('pie-list-item')
export class PieListItem extends RtlMixin(PieElement) implements ListItemProps {
    @property({ type: String })
    public primaryText = defaultProps.primaryText;

    @property({ type: Boolean, reflect: true })
    public selected = defaultProps.selected;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    connectedCallback () {
        super.connectedCallback();
    }

    render () {
        const classes = {
            'c-list-item': true,
            'c-list-item--selected': this.selected,
            'c-list-item--disabled': this.disabled,
            'c-list-item--rtl': this.isRTL,
        };

        return html`
            <li
                class=${classMap(classes)}
                role="listitem"
                aria-selected=${this.selected ? 'true' : 'false'}
                aria-disabled=${this.disabled ? 'true' : 'false'}
                data-test-id="pie-list-item">
                
                <div class="c-list-item__content">
                    <div class="c-list-item__primary">
                        <slot></slot>
                        ${!this.querySelector(':not([slot])') && this.primaryText ? html`<span>${this.primaryText}</span>` : ''}
                    </div>
                </div>
            </li>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListItem;
    }
}
