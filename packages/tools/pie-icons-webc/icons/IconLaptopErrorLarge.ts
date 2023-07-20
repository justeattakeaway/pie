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

const componentSelector = 'icon-laptop-error-large';

export class IconLaptopErrorLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--laptopErrorLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopErrorLarge', '', null, 'IconLaptopErrorLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopErrorLarge', '', this.size, 'IconLaptopErrorLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--laptopErrorLarge"><path d="m18.817 8.449-2.835 2.8-2.8-2.8-1.233 1.233 2.817 2.81-2.817 2.825 1.233 1.234 2.835-2.8 2.8 2.8 1.234-1.233-2.817-2.818 2.817-2.818-1.233-1.233Z"></path><path d="M26.5 19.264V7.25a2.625 2.625 0 0 0-2.625-2.625H8.125A2.625 2.625 0 0 0 5.5 7.25v12.014L2 25.389v.236a2.625 2.625 0 0 0 2.625 2.625h22.75A2.625 2.625 0 0 0 30 25.625v-.236l-3.5-6.125ZM7.25 7.25a.875.875 0 0 1 .875-.875h15.75a.875.875 0 0 1 .875.875v11.375H7.25V7.25ZM27.375 26.5h-8.207l-.657-.875H13.49l-.657.875H4.625a.875.875 0 0 1-.875-.683l3.133-5.442h18.235l3.132 5.442a.875.875 0 0 1-.875.683Z"></path><path d="M17.75 22.125h-3.5v1.75h3.5v-1.75Z"></path><path d="M23 22.125h-3.5v1.75H23v-1.75Z"></path><path d="M12.5 22.125H9v1.75h3.5v-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLaptopErrorLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLaptopErrorLarge;
    }
}
