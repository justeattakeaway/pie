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

const componentSelector = 'icon-presentation-chart-large';

export class IconPresentationChartLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--presentationChartLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--presentationChartLarge', '', null, 'IconPresentationChartLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--presentationChartLarge', '', this.size, 'IconPresentationChartLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--presentationChartLarge"><path d="M29.125 5.5H2.875v1.75h1.75V19.5a2.625 2.625 0 0 0 2.625 2.625h7.875V24.4l-3.824 3.85h2.468L16 25.992l2.231 2.258h2.459l-3.815-3.867v-2.258h7.875a2.625 2.625 0 0 0 2.625-2.625V7.25h1.75V5.5Zm-3.5 14a.875.875 0 0 1-.875.875H7.25a.875.875 0 0 1-.875-.875V7.25h19.25V19.5ZM12.5 16.875h-1.75v-3.5h1.75v3.5Zm4.375 0h-1.75v-7h1.75v7Zm4.375 0H19.5v-5.25h1.75v5.25Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPresentationChartLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPresentationChartLarge;
    }
}
