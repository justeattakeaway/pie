import { html, unsafeCSS, nothing } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import type { PropertyValues } from 'lit';

import styles from './list-item.scss?inline';
import { defaultProps, type ListItemProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 *
 * PIE List Item component for use within pie-list.
 *
 * @slot - Primary content of the list item. Falls back to `primaryText` when
 * no light DOM content is provided.
 * @slot leading - Optional leading content such as icons, avatars, or
 * thumbnails.
 * @slot secondary - Optional secondary text displayed beneath the primary
 * content.
 * @slot trailing - Optional trailing content such as meta text or controls
 * (e.g., checkbox, radio, switch).
 */
@safeCustomElement('pie-list-item')
export class PieListItem extends RtlMixin(PieElement) implements ListItemProps {
    @property({ type: String })
    public primaryText = defaultProps.primaryText;

    @property({ type: Boolean, reflect: true })
    public isSelected = defaultProps.isSelected;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    connectedCallback () {
        super.connectedCallback();

        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'listitem');
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
                    <slot>
                        ${this.primaryText ? html`<span>${this.primaryText}</span>` : nothing}
                    </slot>
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
