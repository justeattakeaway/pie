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

const componentSelector = 'icon-house';

export class IconHouse extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--house';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--house', '', null, 'IconHouse');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--house', '', this.size, 'IconHouse');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--house"><g clip-path="url(#prefix__clip0_15_1251)"><path d="M15.044 8.07c-.158-.166-3.815-4.174-6.125-5.722a1.75 1.75 0 0 0-1.794.008C4.771 3.896 1.114 7.904 1 8.07l.971.875 1.042-1.102v6.055h10.062V7.85c.613.648 1.024 1.094 1.041 1.103l.928-.884Zm-6.169 4.524v-1.969a.875.875 0 1 0-1.75 0v1.969H4.281V6.52a28.148 28.148 0 0 1 3.5-3.062.429.429 0 0 1 .385 0 28.33 28.33 0 0 1 3.5 3.071v6.073l-2.791-.01Z"></path></g><defs><clipPath id="prefix__clip0_15_1251"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconHouse);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHouse;
    }
}
