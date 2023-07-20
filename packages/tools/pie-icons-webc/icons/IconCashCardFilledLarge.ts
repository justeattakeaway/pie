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

const componentSelector = 'icon-cash-card-filled-large';

export class IconCashCardFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--cashCardFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCardFilledLarge', '', null, 'IconCashCardFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCardFilledLarge', '', this.size, 'IconCashCardFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cashCardFilledLarge"><path d="M20.174 8.484a1.969 1.969 0 0 0-1.96-1.943H5.22a1.96 1.96 0 0 0-1.96 1.943h16.914Z"></path><path d="M6.27 13.646h13.904V11.11H3.26v6.063a1.951 1.951 0 0 0 1.96 1.952h1.05v-5.478Z"></path><path d="M8.02 15.396v10.99h20.23v-10.99H8.02Zm6.23 6.37h-3.045v-1.75h3.045v1.75Zm3.85 1.89a2.765 2.765 0 1 1 .035 0H18.1Zm6.93-1.89h-3.045v-1.75h3.08l-.035 1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCashCardFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCashCardFilledLarge;
    }
}
