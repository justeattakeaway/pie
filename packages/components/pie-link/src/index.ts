import {
    html, LitElement, unsafeCSS, nothing, TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './link.scss?inline';
import {
    LinkProps,
    variants,
    sizes,
    iconPlacements,
    tags,
    buttonTypes,
    underlineTypes,
    type AriaProps,
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
    @validPropertyValues(componentSelector, tags, 'a')
    public tag: LinkProps['tag'] = 'a';

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, 'default')
    public variant: LinkProps['variant'] = 'default';

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: LinkProps['size'] = 'medium';

    @property({ type: String })
    @validPropertyValues(componentSelector, underlineTypes, 'default')
    public underline: LinkProps['underline'] = 'default';

    @property({ type: String })
    @validPropertyValues(componentSelector, iconPlacements, 'leading')
    public iconPlacement: LinkProps['iconPlacement'] = 'leading';

    @property({ type: String, reflect: true })
    public href?: string;

    @property({ type: String, reflect: true })
    public target?: string;

    @property({ type: String, reflect: true })
    public rel?: string;

    @property({ type: Boolean })
    public isBold = false;

    @property({ type: Boolean })
    public isStandalone = false;

    @property({ type: Boolean })
    public hasVisited = false;

    @property()
    @validPropertyValues(componentSelector, buttonTypes, 'submit')
    public type: LinkProps['type'] = 'submit';

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
                tag=${this.tag}
                variant=${this.variant}
                size=${this.size}
                underline=${this.underline}
                ?isBold=${this.isBold}
                ?isStandalone=${this.isStandalone}
                ?hasVisited=${this.hasVisited}
                type=${this.type || nothing}
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
                tag=${this.tag}
                variant=${this.variant}
                size=${this.size}
                underline=${this.underline}
                ?isBold=${this.isBold}
                ?isStandalone=${this.isStandalone}
                ?hasVisited=${this.hasVisited}
                href=${this.href || nothing}
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

customElements.define(componentSelector, PieLink);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieLink;
    }
}
