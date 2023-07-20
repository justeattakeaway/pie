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

const componentSelector = 'icon-number-symbol';

export class IconNumberSymbol extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--numberSymbol';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--numberSymbol', '', null, 'IconNumberSymbol');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--numberSymbol', '', this.size, 'IconNumberSymbol');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--numberSymbol"><path d="m13.18 6.049.184-1.295h-1.96l.472-3.247h-1.312l-.473 3.247H6.854l.472-3.247H6.022l-.48 3.247H3.545l-.184 1.295h2.013L4.806 9.95H2.82l-.184 1.295h1.96l-.472 3.246h1.312l.473-3.246h3.237l-.472 3.246h1.303l.482-3.246h1.995l.183-1.295h-2.012l.569-3.902h1.986ZM9.33 9.95H6.101L6.67 6.05h3.229L9.33 9.95Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconNumberSymbol);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconNumberSymbol;
    }
}
