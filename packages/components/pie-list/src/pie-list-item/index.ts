import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import type { PropertyValues } from 'lit';

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

        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'listitem');
        }

        if (!this.hasAttribute('data-test-id')) {
            this.setAttribute('data-test-id', 'pie-list-item');
        }

        this._syncAriaDisabled();
    }

    protected updated (changedProperties: PropertyValues) {
        super.updated(changedProperties);

        if (changedProperties.has('disabled')) {
            this._syncAriaDisabled();
        }
    }

    private _syncAriaDisabled () {
        if (this.disabled) {
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.removeAttribute('aria-disabled');
        }
    }

    render () {
        return html`
            <div class="c-listItem-content">
                <div class="c-listItem-primary">
                    <slot></slot>
                    ${!this.querySelector(':not([slot])') && this.primaryText ? html`<span>${this.primaryText}</span>` : ''}
                </div>
            </div>
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
