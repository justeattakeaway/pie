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

const componentSelector = 'icon-dine-in';

export class IconDineIn extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--dineIn';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--dineIn', '', null, 'IconDineIn');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--dineIn', '', this.size, 'IconDineIn');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--dineIn"><g clip-path="url(#prefix__clip0_18_1460)"><path d="m8.525 7.274.263.148a1.523 1.523 0 0 0 1.75-.07l2.878-2.415H11.36L9.698 6.32a.219.219 0 0 1-.228 0l-1.584-.945a2.406 2.406 0 1 0-4.042-1.75 2.362 2.362 0 0 0 .875 1.837A4.918 4.918 0 0 0 1.578 8l-.534 1.076 1.181.569.525-1.103A3.5 3.5 0 0 1 3.844 7.3v.875a2.721 2.721 0 0 0 1.277 2.292l.464.298c-.275.18-.568.329-.875.446L1.7 12.515l.534 1.199 2.975-1.339a6.013 6.013 0 0 0 1.557-.875l.604.385L8.77 15l1.199-.543-1.566-3.473-.718-.464c.369-.516.595-1.12.656-1.75l.184-1.496ZM7.038 8.647a2.354 2.354 0 0 1-.455 1.164l-.753-.49a1.4 1.4 0 0 1-.674-1.181V6.714a3.71 3.71 0 0 1 .823-.097h1.304l-.245 2.03ZM6.25 4.72a1.094 1.094 0 1 1 0-2.188 1.094 1.094 0 0 1 0 2.188ZM15 3.625h-4.375v-.289a2.161 2.161 0 0 1 4.314 0l.061.289Z"></path></g><defs><clipPath id="prefix__clip0_18_1460"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconDineIn);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDineIn;
    }
}
