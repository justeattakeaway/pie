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

const componentSelector = 'icon-house-large';

export class IconHouseLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--houseLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--houseLarge', '', null, 'IconHouseLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--houseLarge', '', this.size, 'IconHouseLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--houseLarge"><path d="M17.488 5.028a2.975 2.975 0 0 0-2.993 0c-4.375 2.8-11.314 10.097-11.62 10.368l1.269 1.208s.875-.954 2.222-2.249v13.02h19.259v-13.02c1.313 1.295 2.196 2.223 2.223 2.249l1.277-1.208c-.306-.271-7.245-7.568-11.637-10.368Zm-3.054 20.597v-3.684a1.566 1.566 0 1 1 3.132 0v3.684h-3.132Zm9.441 0h-4.559v-3.684a3.316 3.316 0 1 0-6.632 0v3.684H8.125V12.649a56.732 56.732 0 0 1 7.28-6.125 1.269 1.269 0 0 1 1.164 0 56.376 56.376 0 0 1 7.306 6.125v12.976Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconHouseLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHouseLarge;
    }
}
