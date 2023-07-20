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

const componentSelector = 'icon-user-partnership-large';

export class IconUserPartnershipLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--userPartnershipLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userPartnershipLarge', '', null, 'IconUserPartnershipLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userPartnershipLarge', '', this.size, 'IconUserPartnershipLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userPartnershipLarge"><path d="M8.125 14.25a4.375 4.375 0 1 0 0-8.75 4.375 4.375 0 0 0 0 8.75Zm0-7a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm15.75 7a4.375 4.375 0 1 0 0-8.75 4.375 4.375 0 0 0 0 8.75Zm0-7a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm5.25 13.633v7.367h-1.75v-7.367a4.058 4.058 0 0 0-4.113-4.008 4.174 4.174 0 0 0-3.5 1.951L16 24.62l-3.719-5.775a4.182 4.182 0 0 0-3.543-1.969 4.06 4.06 0 0 0-4.113 4.008v7.367h-1.75v-7.367a5.819 5.819 0 0 1 5.863-5.758 5.897 5.897 0 0 1 5.022 2.791l2.24 3.5 2.249-3.5a5.898 5.898 0 0 1 5.014-2.791 5.818 5.818 0 0 1 5.862 5.758Zm-17.754 1.496 3.5 3.5-1.242 1.242-2.004-2.012v3.141h-1.75V23a.875.875 0 0 1 .543-.805.875.875 0 0 1 .953.184ZM22.125 23v5.25h-1.75v-3.141l-2.004 2.012-1.242-1.242 3.5-3.5a.875.875 0 0 1 .953-.184.874.874 0 0 1 .543.805Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserPartnershipLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserPartnershipLarge;
    }
}
