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

const componentSelector = 'icon-laptop-success-large';

export class IconLaptopSuccessLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--laptopSuccessLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopSuccessLarge', '', null, 'IconLaptopSuccessLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopSuccessLarge', '', this.size, 'IconLaptopSuccessLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--laptopSuccessLarge"><path d="M25.625 19.141V7.25A2.625 2.625 0 0 0 23 4.625H9A2.625 2.625 0 0 0 6.375 7.25v11.891l-3.5 3.5v2.109A2.625 2.625 0 0 0 5.5 27.375h21a2.625 2.625 0 0 0 2.625-2.625v-2.109l-3.5-3.5ZM8.125 7.25A.875.875 0 0 1 9 6.375h14a.875.875 0 0 1 .875.875v11.375H8.125V7.25Zm19.25 17.5a.875.875 0 0 1-.875.875h-21a.875.875 0 0 1-.875-.875v-1.391l2.984-2.984H24.39l2.984 2.984v1.391ZM19.062 9.254l1.243 1.242-5.617 5.609-2.993-2.984 1.242-1.242 1.75 1.75 4.376-4.375Zm-.358 12.871.7 1.75h-6.808l.7-1.75h5.408Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLaptopSuccessLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLaptopSuccessLarge;
    }
}
