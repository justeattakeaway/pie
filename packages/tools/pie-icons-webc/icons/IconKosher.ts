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

const componentSelector = 'icon-kosher';

export class IconKosher extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--kosher';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--kosher', '', null, 'IconKosher');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--kosher', '', this.size, 'IconKosher');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--kosher"><path d="m11.938 8.053 1.986-3.387H9.986L8 1.22 6.014 4.666H2.076l1.986 3.386-1.925 3.334h3.877L8 14.773l1.986-3.387h3.877l-1.925-3.333Zm.078-2.293-.7 1.199-.691-1.199h1.391Zm-1.338 2.284-1.322 2.248H6.644L5.322 8.044 6.644 5.76h2.712l1.322 2.284ZM8 3.406l.726 1.26H7.274L8 3.406ZM3.984 5.76h1.391l-.7 1.199-.691-1.199Zm0 4.533.708-1.155.683 1.155H3.984ZM8 12.603l-.718-1.217h1.435L8 12.602Zm3.307-3.5.665 1.155h-1.347l.682-1.155Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconKosher);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconKosher;
    }
}
