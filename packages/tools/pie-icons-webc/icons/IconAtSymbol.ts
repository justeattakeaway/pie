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

const componentSelector = 'icon-at-symbol';

export class IconAtSymbol extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--atSymbol';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--atSymbol', '', null, 'IconAtSymbol');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--atSymbol', '', this.size, 'IconAtSymbol');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--atSymbol"><path d="M13.74 4.832a5.348 5.348 0 0 0-1.365-1.855 5.706 5.706 0 0 0-1.951-1.102 7.56 7.56 0 0 0-2.371-.385 6.422 6.422 0 0 0-2.53.49c-.748.309-1.425.77-1.985 1.356a6.011 6.011 0 0 0-1.304 2.091 7.35 7.35 0 0 0-.464 2.695 6.816 6.816 0 0 0 .464 2.564 5.879 5.879 0 0 0 3.255 3.343 6.29 6.29 0 0 0 2.441.481 6.056 6.056 0 0 0 2.625-.595h.096l-.402-1.085-.105.053a4.75 4.75 0 0 1-.998.34 5.859 5.859 0 0 1-1.198.123 4.76 4.76 0 0 1-1.908-.385A4.629 4.629 0 0 1 4.5 11.86a4.97 4.97 0 0 1-1.015-1.645 5.915 5.915 0 0 1-.367-2.118c-.01-.767.11-1.53.358-2.257.222-.63.57-1.208 1.024-1.698A4.375 4.375 0 0 1 6.05 3.074a5.145 5.145 0 0 1 2.004-.377 6.352 6.352 0 0 1 1.88.272 4.375 4.375 0 0 1 1.567.822c.461.394.826.888 1.068 1.444.278.67.412 1.392.393 2.117a4.7 4.7 0 0 1-.148 1.26 3.08 3.08 0 0 1-.438.954c-.15.24-.354.44-.595.586-.186.111-.396.177-.612.193V4.561H9.873V5.62a2.03 2.03 0 0 0-.753-.814 2.573 2.573 0 0 0-1.409-.394 2.887 2.887 0 0 0-1.233.263c-.373.18-.706.433-.98.744-.282.334-.501.717-.648 1.128A4.235 4.235 0 0 0 4.614 8c-.006.5.074.997.236 1.47.142.422.361.814.648 1.155.272.31.605.56.98.735.388.17.809.257 1.233.254.5.01.99-.137 1.4-.42.317-.209.578-.491.762-.823v1.085h1.04c.454.004.903-.094 1.313-.288.397-.2.746-.484 1.024-.832.311-.381.549-.817.7-1.286a5.19 5.19 0 0 0 .245-1.663 6.127 6.127 0 0 0-.455-2.555ZM9.794 8a2.625 2.625 0 0 1-.525 1.75 1.75 1.75 0 0 1-1.339.578 1.75 1.75 0 0 1-1.347-.578A2.625 2.625 0 0 1 6.058 8a2.625 2.625 0 0 1 .525-1.75 1.75 1.75 0 0 1 1.347-.578 1.75 1.75 0 0 1 1.339.578c.379.502.565 1.123.525 1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconAtSymbol);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconAtSymbol;
    }
}
