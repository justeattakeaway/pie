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

const componentSelector = 'icon-voucher';

export class IconVoucher extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--voucher';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--voucher', '', null, 'IconVoucher');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--voucher', '', this.size, 'IconVoucher');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--voucher"><path d="M10.214 8A3.938 3.938 0 0 0 8 10.214 3.938 3.938 0 0 0 5.786 8 3.937 3.937 0 0 0 8 5.786 3.937 3.937 0 0 0 10.214 8Zm4.567-3.421v6.842l-1.61 1.61H2.83l-1.61-1.61V4.58l1.61-1.61H13.17l1.61 1.61Zm-1.312.551-.875-.875H3.38l-.875.875v5.74l.875.875h9.24l.875-.875-.026-5.74Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconVoucher);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconVoucher;
    }
}
