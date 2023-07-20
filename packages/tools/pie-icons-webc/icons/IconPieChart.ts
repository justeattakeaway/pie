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

const componentSelector = 'icon-pie-chart';

export class IconPieChart extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--pieChart';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pieChart', '', null, 'IconPieChart');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pieChart', '', this.size, 'IconPieChart');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pieChart"><path d="M8.656 8.656H1.22V8A6.79 6.79 0 0 1 8 1.219h.656v7.437ZM2.531 7.344h4.813V2.566a5.495 5.495 0 0 0-4.778 4.778h-.035Zm7.412-5.346V3.38A5.031 5.031 0 0 1 8 13.031a5.075 5.075 0 0 1-4.62-3.054H1.998A6.326 6.326 0 0 0 14.344 8a6.3 6.3 0 0 0-4.367-6.002h-.034Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPieChart);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPieChart;
    }
}
