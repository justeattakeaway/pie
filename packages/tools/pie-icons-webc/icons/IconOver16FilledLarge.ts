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

const componentSelector = 'icon-over16-filled-large';

export class IconOver16FilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--over16FilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--over16FilledLarge', '', null, 'IconOver16FilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--over16FilledLarge', '', this.size, 'IconOver16FilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--over16FilledLarge"><path d="M14.58 15.973c.175-.058.36-.08.545-.06a1.304 1.304 0 0 1 1.435 1.356 1.33 1.33 0 0 1-1.435 1.356 1.33 1.33 0 0 1-1.435-1.383 1.304 1.304 0 0 1 .89-1.269Z"></path><path fill-rule="evenodd" d="M7.25 4.625h17.5a2.625 2.625 0 0 1 2.625 2.625v17.5a2.625 2.625 0 0 1-2.625 2.625H7.25a2.625 2.625 0 0 1-2.625-2.625V7.25A2.625 2.625 0 0 1 7.25 4.625Zm1.19 15.269h1.662v-8.269h-1.19l-2.397 1.076.56 1.409 1.365-.508v6.292Zm3.509-3.938c0 2.73 1.251 4.087 3.22 4.087a2.86 2.86 0 0 0 3.053-2.87 2.625 2.625 0 0 0-2.738-2.67 2.223 2.223 0 0 0-1.873.815c0-1.427.683-2.302 1.75-2.302a2.047 2.047 0 0 1 1.514.639l1.05-1.155a3.194 3.194 0 0 0-2.555-1.024c-1.881 0-3.421 1.453-3.421 4.48ZM23 16.875h1.75v-1.75H23v-1.75h-1.75v1.75H19.5v1.75h1.75v1.75H23v-1.75Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconOver16FilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconOver16FilledLarge;
    }
}
