import {
    html, LitElement, unsafeCSS, nothing, type TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './link.scss?inline';
import {
    type LinkProps,
    variants,
    sizes,
    iconPlacements,
    tags,
    buttonTypes,
    underlineTypes,
    type AriaProps,
    defaultProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-link';

/**
 * @tagname pie-link
 * @slot icon - The icon slot
 * @slot - Default slot
 */

export class PieLink extends LitElement implements LinkProps {
    @property()
    @validPropertyValues(componentSelector, tags, defaultProps.tag)
    public tag: LinkProps['tag'] = defaultProps.tag;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant: LinkProps['variant'] = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size: LinkProps['size'] = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, underlineTypes, defaultProps.underline)
    public underline: LinkProps['underline'] = defaultProps.underline;

    @property({ type: String })
    @validPropertyValues(componentSelector, iconPlacements, defaultProps.iconPlacement)
    public iconPlacement: LinkProps['iconPlacement'] = defaultProps.iconPlacement;

    @property({ type: String, reflect: true })
    public href?: string;

    @property({ type: String, reflect: true })
    public target?: string;

    @property({ type: String, reflect: true })
    public rel?: string;

    @property({ type: Boolean })
    public isBold = defaultProps.isBold;

    @property({ type: Boolean })
    public isStandalone = defaultProps.isStandalone;

    @property({ type: Boolean })
    public hasVisited = defaultProps.hasVisited;

    @property()
    @validPropertyValues(componentSelector, buttonTypes, defaultProps.type)
    public type: LinkProps['type'] = defaultProps.type;

    @property({ type: Object })
    public aria!: AriaProps;

    /**
     * Renders the link content.
     * Icons are only shown in block elements
     * @private
     */
    private renderContent (): TemplateResult {
        const { iconPlacement, isStandalone } = this;
        return html`
                <span class="c-link-content">
                    ${isStandalone && iconPlacement === 'leading' ? html`<slot name="icon"></slot>` : nothing}
                    <slot></slot>
                    ${isStandalone && iconPlacement === 'trailing' ? html`<slot name="icon"></slot>` : nothing}
                </span>`;
    }

    /**
     * Renders the link as a button element.
     *
     * @private
     */
    private renderButton (): TemplateResult {
        return html`
            <button
                data-test-id="pie-link"
                class="c-link"
                tag=${this.tag || 'button'}
                variant=${this.variant || 'default'}
                size=${this.size || 'medium'}
                underline=${this.underline || 'default'}
                ?isBold=${this.isBold}
                ?isStandalone=${this.isStandalone}
                ?hasVisited=${this.hasVisited}
                type=${this.type || 'submit'}
                aria-label=${this.aria?.label || nothing}>
                    ${this.renderContent()}
            </button>`;
    }

    /**
     * Renders the link as an anchor element.
     *
     * @private
     */
    private renderAnchor (): TemplateResult {
        return html`
            <a
                data-test-id="pie-link"
                class="c-link"
                tag=${this.tag || 'a'}
                variant=${this.variant || 'default'}
                size=${this.size || 'medium'}
                underline=${this.underline || 'default'}
                ?isBold=${this.isBold}
                ?isStandalone=${this.isStandalone}
                ?hasVisited=${this.hasVisited}
                href=${this.href || ''}
                target=${this.target || nothing}
                rel=${this.rel || nothing}
                aria-label=${this.aria?.label || nothing}>
                    ${this.renderContent()}
            </a>`;
    }

    render () {
        const isButton = this.tag === 'button';

        return isButton ? this.renderButton() : this.renderAnchor();
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieLink);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieLink;
    }
}
