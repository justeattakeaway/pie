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

const componentSelector = 'icon-email-large';

export class IconEmailLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--emailLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--emailLarge', '', null, 'IconEmailLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--emailLarge', '', this.size, 'IconEmailLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--emailLarge"><path d="M26.5 6.375h-21A2.625 2.625 0 0 0 2.875 9v14A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23V9A2.625 2.625 0 0 0 26.5 6.375Zm.875 3.01v13.519l-7.297-6.755 7.297-6.764Zm-11.856 9.888c.16.145.37.226.586.227a.875.875 0 0 0 .595-.236l2.091-1.925 7.061 6.536H6.165l7.21-6.545 2.144 1.943ZM26.168 8.125l-10.063 9.31L5.85 8.125h20.318ZM12.08 16.149l-7.455 6.764V9.376l7.455 6.773Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEmailLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEmailLarge;
    }
}
