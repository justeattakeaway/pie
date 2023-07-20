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

const componentSelector = 'icon-ice-cream';

export class IconIceCream extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--iceCream';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--iceCream', '', null, 'IconIceCream');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--iceCream', '', this.size, 'IconIceCream');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--iceCream"><path d="M12.148 7.939v-.875a2.625 2.625 0 0 0-.98-2.048 1.71 1.71 0 0 0 0-.21 3.185 3.185 0 0 0-6.37 0c0 .206.024.412.07.613a2.188 2.188 0 0 0-1.024 1.794V8a.604.604 0 0 0 .087.324l3.5 6.125a.657.657 0 0 0 1.138 0l3.5-6.125a.604.604 0 0 0 .079-.385Zm-6.02-3.176a1.872 1.872 0 0 1 3.71-.333h-.22c-.25-.014-.5.01-.743.07l.385 1.251a1.4 1.4 0 0 1 .341 0 1.251 1.251 0 0 1 1.216 1.295v.411a18.376 18.376 0 0 1-5.661-.035v-.21a.998.998 0 0 1 1.094-.91.997.997 0 0 1 .359.062l.367-1.252a2.476 2.476 0 0 0-.726-.122h-.096a1.085 1.085 0 0 1-.026-.228ZM8 12.802 5.734 8.876c.753.076 1.51.108 2.266.096.754.012 1.508-.02 2.258-.096L8 12.804Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconIceCream);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconIceCream;
    }
}
