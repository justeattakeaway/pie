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

const componentSelector = 'icon-cash-large';

export class IconCashLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--cashLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cashLarge', '', null, 'IconCashLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cashLarge', '', this.size, 'IconCashLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cashLarge"><path d="M29.125 8.125H6.375v3.5h-3.5v12.25h22.75v-3.5h3.5V8.125Zm-5.25 14H4.625v-8.75h1.75v7h17.5v1.75Zm3.5-3.5H8.125v-8.75h19.25v8.75Zm-9.625-1.356a3.019 3.019 0 1 0-3.019-3.019 3.028 3.028 0 0 0 3.019 3.019Zm0-4.288a1.27 1.27 0 1 1 0 2.539 1.27 1.27 0 0 1 0-2.539Zm-4.375 2.144h-3.5v-1.75h3.5v1.75Zm12.25 0h-3.5v-1.75h3.5v1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCashLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCashLarge;
    }
}
