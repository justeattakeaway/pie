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

const componentSelector = 'icon-location-pin-food-filled-large';

export class IconLocationPinFoodFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--locationPinFoodFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFoodFilledLarge', '', null, 'IconLocationPinFoodFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFoodFilledLarge', '', this.size, 'IconLocationPinFoodFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--locationPinFoodFilledLarge"><path d="M24.05 5.491c-2.152-2.17-5.014-3.368-8.05-3.368-3.036 0-5.898 1.198-8.05 3.368-4.427 4.48-4.427 11.769 0 16.249L16 29.878l8.05-8.138c4.427-4.48 4.427-11.769 0-16.249Zm-8.776 3.474c-.123 1.951-.079 4.419 0 6.589v.079c0 .595-.298 1.11-.753 1.426a.337.337 0 0 0-.149.245s-.043.332.114 1.942c.026.306.053.56.079.779h-2.082v-3.01s-.027-.018-.044-.035a1.822 1.822 0 0 1-.447-.551c-.008-.026-.026-.044-.043-.07a1.68 1.68 0 0 1-.166-.63c-.088-2.223-.132-4.786 0-6.79 0-.123.078-.219.175-.271.008 0 .026 0 .043-.01.035-.008.062-.025.097-.025.183 0 .323.14.332.315v.026c-.079 1.338-.088 2.922-.061 4.48 0 .079.026.148.07.21.008.017.026.026.043.035.07.079.167.14.28.131.21 0 .386-.175.377-.394-.026-1.575-.018-3.167.061-4.506a.33.33 0 0 1 .315-.306c.184 0 .324.14.332.315v.026c-.078 1.33-.087 2.905-.06 4.454 0 .21.183.376.393.376.21 0 .376-.175.376-.385-.026-1.566-.017-3.15.062-4.489 0-.166.148-.297.314-.306.184 0 .324.14.333.315v.026l.009.009Zm4.909 7.595c-.062 1.47-.132 2.73-.175 3.465H18.38c.061-.586.105-1.085.131-1.461V17.47s-.061-.052-.105-.061l-.98-.14-.14-.018c-.184-.035-.28-.14-.315-.28-.026-.079-.017-.175-.017-.175.096-1.365.262-2.537.472-3.543.315-1.523.709-2.66 1.085-3.474.175-.377.341-.691.482-.937.323-.542.55-.787.55-.787.062-.061.106-.087.106-.087a.35.35 0 0 1 .201-.07c.149 0 .262.096.315.218 0 0 .018.044.026.158.193 2.056.097 5.556-.017 8.286h.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLocationPinFoodFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLocationPinFoodFilledLarge;
    }
}
