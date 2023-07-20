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

const componentSelector = 'icon-delivery-fee-large';

export class IconDeliveryFeeLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--deliveryFeeLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--deliveryFeeLarge', '', null, 'IconDeliveryFeeLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--deliveryFeeLarge', '', this.size, 'IconDeliveryFeeLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--deliveryFeeLarge"><path d="M25.424 4.45 15.326 8.125 9.15 21.477l13.799 6.388 6.177-13.326-3.701-10.09Zm-3.299 21.096L11.476 20.63l5.136-11.087 7.77-2.852 2.853 7.77-5.11 11.086ZM9.875 15.125H5.5v-1.75h4.375v1.75Zm1.75-4.375h-8.75V9h8.75v1.75Zm12.25.438a1.312 1.312 0 1 1-2.625 0 1.312 1.312 0 0 1 2.625 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDeliveryFeeLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDeliveryFeeLarge;
    }
}
