import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { safeCustomElement, requiredProperty } from '@justeattakeaway/pie-webc-core';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { classMap } from 'lit/directives/class-map.js';
import { type ListItemProps, defaultProps } from './defs';
import styles from './list-item.scss?inline';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 */
@safeCustomElement('pie-list-item')
export class PieListItem extends PieElement implements ListItemProps {
    @property({ type: String })
    @requiredProperty(componentSelector)
        primaryText!: ListItemProps['primaryText'];

    @property({ type: String })
        secondaryText: ListItemProps['secondaryText'];

    @property({ type: String })
        metaText: ListItemProps['metaText'];

    @property({ type: Boolean, attribute: 'is-compact' })
        isCompact = defaultProps.isCompact;

    @property({ type: Boolean, attribute: 'is-bold' })
        isBold = defaultProps.isBold;

    @property({ type: Boolean, attribute: 'has-media' })
        hasMedia = defaultProps.hasMedia;

    connectedCallback () {
        super.connectedCallback();

        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'listitem');
        }
    }

    _renderSecondaryText () {
        const { secondaryText } = this;
        if (secondaryText) {
            return html`<span class="c-listItem-secondaryText">${secondaryText}</span>`;
        }

        return nothing;
    }

    // metaText is another form of trailing content. The component can only ever display either slotted trailing content or the metaText string
    _renderTrailingContent () {
        const { metaText } = this;
        if (metaText) {
            return html`<span class="c-listItem-metaText c-listItem-trailing">${metaText}</span>`;
        }

        return html`<div class="c-listItem-trailing"><slot name="trailing"></slot></div>`;
    }

    render () {
        const { primaryText } = this;

        // We should never render a list item that doesn't have primary text.
        if (!primaryText) return nothing;

        const containerClasses = {
            'c-listItem-container': true,
            'is-compact': this.isCompact,
            'is-bold': this.isBold,
            'has-media': this.hasMedia,
        };

        return html`
        <div class=${classMap(containerClasses)}>
            <div class="c-listItem-leading">
                <slot name="leading"></slot>
            </div>

            <div class="c-listItem-text">
                <span class="c-listItem-primaryText">${primaryText}</span>
                ${this._renderSecondaryText()}
            </div>

            ${this._renderTrailingContent()}
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
