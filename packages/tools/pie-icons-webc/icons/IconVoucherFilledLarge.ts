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

const componentSelector = 'icon-voucher-filled-large';

export class IconVoucherFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--voucherFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--voucherFilledLarge', '', null, 'IconVoucherFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--voucherFilledLarge', '', this.size, 'IconVoucherFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--voucherFilledLarge"><path fill-rule="evenodd" d="M5.641 5.5h20.843l3.141 3.141V23.36L26.484 26.5H5.64L2.5 23.359V8.64L5.641 5.5ZM22.75 9.875h1.75v-3.5h-1.75v3.5Zm-6.396 3.77a6.922 6.922 0 0 0 2.345 1.541.875.875 0 0 1 0 1.628 6.919 6.919 0 0 0-3.885 3.885.875.875 0 0 1-1.628 0 6.92 6.92 0 0 0-3.885-3.885.875.875 0 0 1 0-1.628 6.922 6.922 0 0 0 3.885-3.885.875.875 0 0 1 1.628 0 6.922 6.922 0 0 0 1.54 2.345Zm6.396 8.48h1.75v3.5h-1.75v-3.5Zm1.75-5.25h-1.75v3.5h1.75v-3.5Zm-1.75-5.25h1.75v3.5h-1.75v-3.5Z" clip-rule="evenodd"></path><path d="M11.515 16A8.62 8.62 0 0 1 14 18.485 8.62 8.62 0 0 1 16.485 16 8.62 8.62 0 0 1 14 13.515 8.62 8.62 0 0 1 11.515 16Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconVoucherFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconVoucherFilledLarge;
    }
}
