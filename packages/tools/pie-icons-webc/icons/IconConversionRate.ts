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

const componentSelector = 'icon-conversion-rate';

export class IconConversionRate extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--conversionRate';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--conversionRate', '', null, 'IconConversionRate');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--conversionRate', '', this.size, 'IconConversionRate');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--conversionRate"><path d="M10.249 8.157a2.328 2.328 0 1 0-2.328 2.328 2.336 2.336 0 0 0 2.328-2.328Zm-3.343 0a1.015 1.015 0 1 1 2.03 0 1.015 1.015 0 0 1-2.03 0ZM15 7.125 13.25 9.75l-2.03-2.625h1.277a4.506 4.506 0 0 0-1.25-2.371 4.586 4.586 0 0 0-6.493 0l-.928-.928a5.898 5.898 0 0 1 8.348 0 5.819 5.819 0 0 1 1.662 3.299H15Zm-3.754 4.121.928.928a5.897 5.897 0 0 1-8.348 0 5.818 5.818 0 0 1-1.662-3.299H1L2.75 6.25l2.03 2.625H3.502c.167.9.604 1.726 1.252 2.371a4.586 4.586 0 0 0 6.492 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconConversionRate);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconConversionRate;
    }
}
