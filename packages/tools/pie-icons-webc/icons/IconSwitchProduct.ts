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

const componentSelector = 'icon-switch-product';

export class IconSwitchProduct extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--switchProduct';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--switchProduct', '', null, 'IconSwitchProduct');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--switchProduct', '', this.size, 'IconSwitchProduct');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--switchProduct"><path d="M5.261 2.094H2.094V5.26H5.26V2.094Z"></path><path d="M5.261 6.407H2.094v3.168H5.26V6.408Z"></path><path d="M9.584 2.094H6.416V5.26h3.168V2.094Z"></path><path d="M9.584 6.407H6.416v3.168h3.168V6.408Z"></path><path d="M5.261 10.73H2.094v3.168H5.26V10.73Z"></path><path d="M9.584 10.73H6.416v3.168h3.168V10.73Z"></path><path d="M13.898 2.094H10.73V5.26h3.168V2.094Z"></path><path d="M13.898 6.407H10.73v3.168h3.168V6.408Z"></path><path d="M13.898 10.73H10.73v3.168h3.168V10.73Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSwitchProduct);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSwitchProduct;
    }
}
