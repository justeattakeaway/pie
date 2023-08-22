import { LitElement, unsafeCSS, nothing } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './link.scss?inline';
import {
    LinkProps, variants, sizes, iconPlacements, tags, buttonTypes,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-link';

/**
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

    @property()
    @validPropertyValues(componentSelector, buttonTypes, 'submit')
    public type: LinkProps['type'] = 'submit';

    render () {
        const {
            tag,
            variant,
            size,
            iconPlacement,
            isBold,
            isStandalone,
            href,
            target,
            rel,
            type,
        } = this;

        const element = unsafeStatic(tag);
        const isButton = tag === 'button';

        return html`
            <${element}  
                data-test-id="pie-link"
                class="c-link"
                tag="${tag}"
                variant=${variant}
                size=${size}
                ?isBold=${isBold}
                ?isStandalone=${isStandalone}
                href=${!isButton && href ? href : nothing}
                target=${!isButton && target ? target : nothing}
                rel=${!isButton && rel ? rel : nothing}
                type=${isButton && type ? type : nothing}>
                    <span class="c-link-content">
                        ${iconPlacement === 'leading' ? html`<slot name="icon"></slot>` : nothing}
                        <slot></slot>
                        ${iconPlacement === 'trailing' ? html`<slot name="icon"></slot>` : nothing}
                    </span>
            </${element}>`;
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
