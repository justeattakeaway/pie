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

const componentSelector = 'icon-switch-product-large';

export class IconSwitchProductLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--switchProductLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--switchProductLarge', '', null, 'IconSwitchProductLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--switchProductLarge', '', this.size, 'IconSwitchProductLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--switchProductLarge"><path d="M8.974 6.375v2.599H6.375V6.375h2.599Zm1.75-1.75H4.625v6.099h6.099V4.625Z"></path><path d="M8.974 14.696v2.599H6.375v-2.599h2.599Zm1.75-1.75H4.625v6.099h6.099v-6.099Z"></path><path d="M17.295 6.375v2.599h-2.599V6.375h2.599Zm1.75-1.75h-6.099v6.099h6.099V4.625Z"></path><path d="M17.295 14.696v2.599h-2.599v-2.599h2.599Zm1.75-1.75h-6.099v6.099h6.099v-6.099Z"></path><path d="M8.974 23.017v2.6H6.375v-2.6h2.599Zm1.75-1.75H4.625v6.1h6.099v-6.1Z"></path><path d="M17.295 23.017v2.6h-2.599v-2.6h2.599Zm1.75-1.75h-6.099v6.1h6.099v-6.1Z"></path><path d="M25.616 6.375v2.599h-2.599V6.375h2.6Zm1.75-1.75h-6.099v6.099h6.1V4.625Z"></path><path d="M25.616 14.696v2.599h-2.599v-2.599h2.6Zm1.75-1.75h-6.099v6.099h6.1v-6.099Z"></path><path d="M25.616 23.017v2.6h-2.599v-2.6h2.6Zm1.75-1.75h-6.099v6.1h6.1v-6.1Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSwitchProductLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSwitchProductLarge;
    }
}
