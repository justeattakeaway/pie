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

const componentSelector = 'icon-house-filled-large';

export class IconHouseFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--houseFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--houseFilledLarge', '', null, 'IconHouseFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--houseFilledLarge', '', this.size, 'IconHouseFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--houseFilledLarge"><path d="M17.488 5.027a2.993 2.993 0 0 0-3.002 0c-4.375 2.8-11.305 10.098-11.611 10.37l1.269 1.207s.918-.954 2.231-2.249v13.02h19.25v-13.02a102.43 102.43 0 0 1 2.214 2.249l1.286-1.208c-.306-.271-7.245-7.569-11.637-10.369Zm-3.054 16.914a1.566 1.566 0 1 1 3.132 0v3.684h-3.132v-3.684Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconHouseFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHouseFilledLarge;
    }
}
