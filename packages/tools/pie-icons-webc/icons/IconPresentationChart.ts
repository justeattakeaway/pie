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

const componentSelector = 'icon-presentation-chart';

export class IconPresentationChart extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--presentationChart';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--presentationChart', '', null, 'IconPresentationChart');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--presentationChart', '', this.size, 'IconPresentationChart');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--presentationChart"><path d="M15 2.094H1v1.312h1.094v5.469a1.54 1.54 0 0 0 1.531 1.531h3.719v1.707l-1.969 2.012h1.82L8 13.311l.805.814h1.82l-1.969-2.021v-1.698h3.719a1.54 1.54 0 0 0 1.531-1.531V3.406H15V2.094Zm-2.406 6.781a.219.219 0 0 1-.219.219h-8.75a.219.219 0 0 1-.219-.219V3.406h9.188v5.469Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPresentationChart);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPresentationChart;
    }
}
