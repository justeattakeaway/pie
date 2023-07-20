import {
    html, LitElement, TemplateResult, css,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import type { DependentMap } from '@justeattakeaway/pie-webc-core';
import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const sizes = ['small', 'medium', 'large', 'xlarge', 'xxlarge'] as const;
type Size = typeof sizes[number];

interface IconProps {
    size: Size;
    class: string;
}

const componentSelector = 'icon-language-large';

export class IconLanguageLarge extends LitElement implements IconProps {
    static styles = css`
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    `;

    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class = 'c-pieIcon c-pieIcon--languageLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--languageLarge', '', null, 'IconLanguageLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--languageLarge', '', this.size, 'IconLanguageLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--languageLarge"><path d="M27.664 19.719a12.146 12.146 0 0 0 0-7.455v-.07a12.25 12.25 0 0 0-23.275 0h-.07v.087a12.145 12.145 0 0 0 0 7.455v.07a12.25 12.25 0 0 0 23.275 0h.043l.027-.087Zm-15.217-.657a15.69 15.69 0 0 1 0-6.125 54.607 54.607 0 0 1 7.08 0 15.855 15.855 0 0 1 0 6.126 56.07 56.07 0 0 1-7.08 0Zm6.59 1.75a15.462 15.462 0 0 1-3.09 5.373 15.489 15.489 0 0 1-3.036-5.381c1.059.052 2.109.096 3.159.096 1.05 0 1.977 0 2.966-.052v-.035ZM5.5 16c0-.76.084-1.517.254-2.258l1.81-.28a53.691 53.691 0 0 1 3.107-.384 17.607 17.607 0 0 0 0 5.827 46.307 46.307 0 0 1-2.581-.315l-2.328-.341A10.604 10.604 0 0 1 5.5 16Zm7.455-4.848a15.305 15.305 0 0 1 3.089-5.372 15.278 15.278 0 0 1 3.036 5.381 57.195 57.195 0 0 0-6.125-.008Zm8.391 1.943c.875.087 1.75.184 2.581.315l2.328.341c.161.739.244 1.493.245 2.249 0 .76-.085 1.517-.254 2.258l-1.811.28c-1.033.157-2.074.28-3.106.384.33-1.928.335-3.897.017-5.827Zm4.279-1.199-1.47-.219a57.303 57.303 0 0 0-3.238-.376 16.992 16.992 0 0 0-2.695-5.547 10.5 10.5 0 0 1 7.403 6.142ZM13.804 5.771a16.878 16.878 0 0 0-2.765 5.557 54.69 54.69 0 0 0-3.772.446l-.892.105a10.5 10.5 0 0 1 7.464-6.152l-.035.044Zm-7.43 14.333 1.47.219c1.077.157 2.153.28 3.238.376a16.994 16.994 0 0 0 2.695 5.547 10.499 10.499 0 0 1-7.402-6.142Zm11.822 6.125a16.967 16.967 0 0 0 2.765-5.556c1.26-.105 2.52-.254 3.771-.447l.893-.105a10.5 10.5 0 0 1-7.464 6.152l.035-.044Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLanguageLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLanguageLarge;
    }
}
