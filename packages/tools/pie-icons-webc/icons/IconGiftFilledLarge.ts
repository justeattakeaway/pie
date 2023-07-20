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

const componentSelector = 'icon-gift-filled-large';

export class IconGiftFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--giftFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--giftFilledLarge', '', null, 'IconGiftFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--giftFilledLarge', '', this.size, 'IconGiftFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--giftFilledLarge"><path d="M16.831 28.215h7.044A2.633 2.633 0 0 0 26.5 25.59V14.215h-9.669v14Z"></path><path d="M5.5 25.59a2.633 2.633 0 0 0 2.625 2.625h6.956v-14H5.5V25.59Z"></path><path d="M16.849 8.09v-.017a3.064 3.064 0 0 1 3.01-2.538c.175 0 .35.026.525.053v-1.75c-.175-.018-.341-.053-.525-.053a4.801 4.801 0 0 0-3.894 1.995 4.801 4.801 0 0 0-3.894-1.995c-.149 0-.288.026-.437.044v1.75c.149-.018.288-.044.437-.044a3.063 3.063 0 0 1 3.01 2.538v.017H3.75v4.375h11.331V8.081h1.75v4.375H28.25V8.09H16.849Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGiftFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGiftFilledLarge;
    }
}
