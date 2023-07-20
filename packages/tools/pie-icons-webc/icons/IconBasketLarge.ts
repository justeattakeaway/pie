import {
    html, LitElement, TemplateResult,
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

const componentSelector = 'icon-basket-large';

export class IconBasketLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--basketLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--basketLarge', '', null, 'IconBasketLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--basketLarge', '', this.size, 'IconBasketLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--basketLarge"><path d="M16.875 15.125h-1.75v7h1.75v-7Z"></path><path d="m12.518 22.125-.858-7H9.875l.875 7h1.768Z"></path><path d="m21.88 9.875-1.75-5.25h-1.846l1.75 5.25h-8.068l1.75-5.25H11.87l-1.75 5.25H2v1.75h1.873L5.84 25.126a2.625 2.625 0 0 0 2.625 2.249H23.56a2.625 2.625 0 0 0 2.625-2.249l1.943-13.501H30v-1.75h-8.12Zm2.546 14.997a.875.875 0 0 1-.875.753H8.44a.875.875 0 0 1-.875-.753L5.64 11.625h20.72l-1.934 13.247Z"></path><path d="m20.358 15.125-.85 7h1.76l.857-7h-1.767Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBasketLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBasketLarge;
    }
}
