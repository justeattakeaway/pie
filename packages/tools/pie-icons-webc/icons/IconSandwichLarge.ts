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

const componentSelector = 'icon-sandwich-large';

export class IconSandwichLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--sandwichLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sandwichLarge', '', null, 'IconSandwichLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sandwichLarge', '', this.size, 'IconSandwichLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--sandwichLarge"><path d="M28.836 15.125v1.75c-1.898 0-2.038.464-2.275 1.304a2.94 2.94 0 0 1-2.126 2.354 3.062 3.062 0 0 1-3.395-1.164c-.49-.517-.761-.788-1.234-.788-.289 0-.306 0-.542.569-.333.779-.875 2.091-3.264 2.091s-2.931-1.312-3.264-2.091c-.236-.525-.236-.525-.542-.525-.473 0-.744.271-1.234.788a3.062 3.062 0 0 1-3.395 1.163 2.94 2.94 0 0 1-2.126-2.354c-.236-.875-.376-1.303-2.275-1.303v-1.794c2.975 0 3.587 1.269 3.955 2.564.192.665.28.971.945 1.163.665.193.98 0 1.619-.682a3.342 3.342 0 0 1 2.51-1.295 2.188 2.188 0 0 1 2.153 1.628c.289.665.438 1.032 1.654 1.032s1.365-.367 1.654-1.032a2.187 2.187 0 0 1 2.152-1.628 3.343 3.343 0 0 1 2.511 1.339c.64.674.875.875 1.62.682.743-.192.752-.498.944-1.163.368-1.34.98-2.608 3.955-2.608ZM25.625 23a.875.875 0 0 1-.875.875H7.25A.875.875 0 0 1 6.375 23v-1.75h-1.75V23a2.625 2.625 0 0 0 2.625 2.625h17.5A2.625 2.625 0 0 0 27.375 23v-1.75h-1.75V23Zm-21-9.625v-1.531a5.582 5.582 0 0 1 8.584-4.594 5.46 5.46 0 0 1 2.983-.875c.99.003 1.962.266 2.818.761a5.556 5.556 0 0 1 8.365 4.708v1.531a.875.875 0 0 1-.875.875h-21a.875.875 0 0 1-.875-.875Zm1.75-.875h19.25v-.656a3.78 3.78 0 0 0-3.824-3.719 3.876 3.876 0 0 0-1.312.236c.31.38.565.802.761 1.252h-2.012a3.841 3.841 0 0 0-4.655-1.13c.274.35.509.728.7 1.13h-2.04A3.859 3.859 0 0 0 10.2 8.125a3.78 3.78 0 0 0-3.824 3.719v.656Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSandwichLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSandwichLarge;
    }
}
