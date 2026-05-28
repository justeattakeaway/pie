import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list-item.scss?inline';
import { type ListItemProps } from './defs';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 */
@safeCustomElement('pie-list-item')
export class PieListItem extends LitElement implements ListItemProps {
    @property({ type: String, attribute: 'primary-text' })
    public primaryText?: string;

    @property({ type: String, attribute: 'secondary-text' })
    public secondaryText?: string;

    @property({ type: Boolean, attribute: 'is-bold' })
    public isBold = false;

    @property({ type: Boolean, reflect: true, attribute: 'is-compact' })
    public isCompact = false;

    render () {
        return html`
            <slot name="leading"></slot>
            <div class="c-listItem-text">
                <slot name="primaryText"></slot>
                <slot name="secondaryText"></slot>
            </div>
            <slot name="trailing"></slot>
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
