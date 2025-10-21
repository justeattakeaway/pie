import {
    html, unsafeCSS, nothing,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './link.scss?inline';
import {
    type LinkProps,
    variants,
    sizes,
    iconPlacements,
    tags,
    buttonTypes,
    underlineTypes,
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

@safeCustomElement('pie-link')
export class PieLink extends PieElement implements LinkProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, tags, defaultProps.tag)
    public tag = defaultProps.tag;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, underlineTypes, defaultProps.underline)
    public underline = defaultProps.underline;

    @property({ type: String })
    @validPropertyValues(componentSelector, iconPlacements, defaultProps.iconPlacement)
    public iconPlacement = defaultProps.iconPlacement;

    @property({ type: String, reflect: true })
    public href: LinkProps['href'];

    @property({ type: String, reflect: true })
    public target: LinkProps['target'];

    @property({ type: String, reflect: true })
    public rel: LinkProps['rel'];

    @property({ type: String })
    public download: LinkProps['download'];

    @property({ type: Boolean })
    public isBold = defaultProps.isBold;

    @property({ type: Boolean, reflect: true })
    public isStandalone = defaultProps.isStandalone;

    @property({ type: Boolean })
    public hasVisited = defaultProps.hasVisited;

    @property({ type: String })
    @validPropertyValues(componentSelector, buttonTypes, defaultProps.type)
    public type = defaultProps.type;

    @property({ type: Object })
    public aria: LinkProps['aria'];

    /**
     * Renders the link content.
     * Icons are only shown in block elements
     * @private
     */
    private renderContent () {
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
    private renderButton (classes: ClassInfo) {
        return html`
            <button
                data-test-id="pie-link-button"
                class="${classMap(classes)}"
                type=${this.type}
                aria-label=${ifDefined(this.aria?.label)}
                part="base">
                ${this.renderContent()}
            </button>`;
    }

    /**
     * Renders the link as an anchor element.
     *
     * @private
     */
    private renderAnchor (classes: ClassInfo) {
        return html`
            <a
                data-test-id="pie-link-anchor"
                class="${classMap(classes)}"
                href=${ifDefined(this.href)}
                target=${ifDefined(this.target)}
                rel=${ifDefined(this.rel)}
                download="${ifDefined(this.download)}"
                aria-label=${ifDefined(this.aria?.label)}
                part="base">
                ${this.renderContent()}
            </a>`;
    }

    render () {
        const classes: ClassInfo = {
            'c-link': true,
            [`c-link--${this.variant}`]: true,
            [`c-link--${this.size}`]: true,
            'c-link--underline-reversed': this.underline === 'reversed',
            'c-link--bold': this.isBold,
            'c-link--standalone': this.isStandalone,
            'c-link--hasVisited': this.hasVisited,
        };

        if (this.tag === 'button') {
            return this.renderButton(classes);
        }

        return this.renderAnchor(classes);
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieLink;
    }
}
