import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './link.scss?inline';
import { LinkProps, variants, sizes } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-link';

export class PieLink extends LitElement implements LinkProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, 'default')
    public variant: LinkProps['variant'] = 'default';

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: LinkProps['size'] = 'medium';

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

    render () {
        const {
            variant, size, href, target, rel, isBold, isStandalone,
        } = this;

        return html`
            <a
                data-test-id="pie-link"
                class="c-link"
                variant=${variant}
                size=${size}
                href=${ifDefined(href)}
                target=${ifDefined(target)}
                rel=${ifDefined(rel)}
                ?isBold=${isBold}
                ?isStandalone=${isStandalone}>
                <slot></slot>
            </a>`;
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
