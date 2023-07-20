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

const componentSelector = 'icon-vegetarian-filled';

export class IconVegetarianFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--vegetarianFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--vegetarianFilled', '', null, 'IconVegetarianFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--vegetarianFilled', '', this.size, 'IconVegetarianFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--vegetarianFilled"><path d="m10.844 1.052.324.57.01.018c.242.437 3.254 5.86 2.378 9.09a5.18 5.18 0 0 1-4.978 3.806 5.29 5.29 0 0 1-1.374-.184 5.438 5.438 0 0 1-1.068-.428l.35-.175.359-.237c.21-.145.411-.303.604-.472A6.458 6.458 0 0 0 9.47 9.75L8.201 9.4a5.171 5.171 0 0 1-2.047 2.94c-.05.034-.098.072-.147.11-.062.05-.126.1-.194.144l-.22.114c-.21.116-.43.216-.655.297A5.162 5.162 0 0 1 3.625 8c.857-3.221 6.185-6.35 6.628-6.611l.022-.013.569-.324Z"></path><path d="M2 14.518c.386.073.777.111 1.17.114a6.529 6.529 0 0 0 2.966-.734 5.25 5.25 0 0 1-1.199-.875A5.154 5.154 0 0 1 2 13.185v1.333Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconVegetarianFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconVegetarianFilled;
    }
}
