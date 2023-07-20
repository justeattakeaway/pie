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

const componentSelector = 'icon-stopwatch-filled-large';

export class IconStopwatchFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--stopwatchFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatchFilledLarge', '', null, 'IconStopwatchFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatchFilledLarge', '', this.size, 'IconStopwatchFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--stopwatchFilledLarge"><path d="M17.75 6.419V4.625h3.5l-.604-1.75h-7.542l-.604 1.75H16v1.794a11.375 11.375 0 0 0-9.625 6.956h4.375a.875.875 0 0 1 .875.875v7a.875.875 0 0 1-.875.875H6.375A11.375 11.375 0 1 0 17.75 6.419ZM16 11.669h1.75v5.626l3.946 2.371-.875 1.505L16 18.25v-6.58Z"></path><path d="M9.875 16.875v-1.75H2l.788 1.75h7.087Z"></path><path d="M9.875 20.375v-1.75h-5.25l.787 1.75h4.463Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconStopwatchFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconStopwatchFilledLarge;
    }
}
