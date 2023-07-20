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

const componentSelector = 'icon-offer-large';

export class IconOfferLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--offerLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--offerLarge', '', null, 'IconOfferLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--offerLarge', '', this.size, 'IconOfferLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--offerLarge"><path d="M22.125 5.211c.113-.169.242-.327.385-.472a3.369 3.369 0 0 1 4.76 0l1.242-1.234a5.136 5.136 0 0 0-7.245 0c-.43.44-.78.953-1.032 1.514l-4.156-.394a2.31 2.31 0 0 0-1.83.656L2.692 16.796l11.944 13.125 12.092-12.127a2.336 2.336 0 0 0 .648-1.873L26.369 5.64l-4.244-.429Zm3.377 11.375L14.696 27.375l-9.625-10.5L15.44 6.515a.586.586 0 0 1 .472-.14l3.877.385a5.25 5.25 0 0 0 .472 2.573A1.75 1.75 0 1 0 23 10.75a1.75 1.75 0 0 0-.516-1.242 3.35 3.35 0 0 1-.972-2.625l3.238.367.875 8.864a.577.577 0 0 1-.14.446l.017.026Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconOfferLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconOfferLarge;
    }
}
