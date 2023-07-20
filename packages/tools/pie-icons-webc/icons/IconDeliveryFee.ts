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

const componentSelector = 'icon-delivery-fee';

export class IconDeliveryFee extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--deliveryFee';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--deliveryFee', '', null, 'IconDeliveryFee');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--deliveryFee', '', this.size, 'IconDeliveryFee');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--deliveryFee"><g clip-path="url(#prefix__clip0_18_2472)"><path d="M13.127 1.735 7.8 3.686 4.64 10.502l7.28 3.37 3.159-6.808-1.952-5.329Zm-2.065 9.818L6.96 9.645l2.117-4.568 3.01-1.102 1.103 3.01-2.127 4.567ZM1.876 6.25H4.5V8H1.875V6.25ZM6.031 4.5H1V2.75h5.031V4.5Z"></path></g><defs><clipPath id="prefix__clip0_18_2472"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconDeliveryFee);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDeliveryFee;
    }
}
