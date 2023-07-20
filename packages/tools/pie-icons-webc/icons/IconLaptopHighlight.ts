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

const componentSelector = 'icon-laptop-highlight';

export class IconLaptopHighlight extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--laptopHighlight';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopHighlight', '', null, 'IconLaptopHighlight');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopHighlight', '', this.size, 'IconLaptopHighlight');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--laptopHighlight"><path d="M13.031 9.094V4.5A1.54 1.54 0 0 0 11.5 2.969h-7A1.54 1.54 0 0 0 2.969 4.5v4.594h-1.75V11.5a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531V9.094h-1.75ZM4.281 4.5a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v4.594H4.28V4.5Zm9.188 7a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-1.094H13.47V11.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLaptopHighlight);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLaptopHighlight;
    }
}
