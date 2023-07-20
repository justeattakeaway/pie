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

const componentSelector = 'icon-wifi-large';

export class IconWifiLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--wifiLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--wifiLarge', '', null, 'IconWifiLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--wifiLarge', '', this.size, 'IconWifiLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--wifiLarge"><path d="M19.78 20.585a4.916 4.916 0 0 0-3.78-1.96 4.918 4.918 0 0 0-3.78 1.942L10.864 19.5A6.652 6.652 0 0 1 16 16.875a6.65 6.65 0 0 1 5.136 2.625l-1.356 1.085Z"></path><path d="M27.034 13.655A14.254 14.254 0 0 0 16 8.125a14.254 14.254 0 0 0-11.034 5.53L3.62 12.544a15.95 15.95 0 0 1 12.38-6.169 15.952 15.952 0 0 1 12.382 6.169l-1.347 1.111Z"></path><path d="M23.525 17.234A9.767 9.767 0 0 0 16 13.375a9.764 9.764 0 0 0-7.525 3.841l-1.348-1.094A11.463 11.463 0 0 1 16 11.625a11.461 11.461 0 0 1 8.872 4.48l-1.347 1.129Z"></path><path d="M16 25.406a1.531 1.531 0 1 0 0-3.062 1.531 1.531 0 0 0 0 3.062Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconWifiLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconWifiLarge;
    }
}
