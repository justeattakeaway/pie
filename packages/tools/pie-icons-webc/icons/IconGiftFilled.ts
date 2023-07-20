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

const componentSelector = 'icon-gift-filled';

export class IconGiftFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--giftFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--giftFilled', '', null, 'IconGiftFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--giftFilled', '', this.size, 'IconGiftFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--giftFilled"><path d="M7.333 4.966h1.334V7.63H14V4.966H8.667a1.663 1.663 0 0 1 2-1.59v-1.34c-.116-.01-.223-.036-.338-.036C9.378 2 8.542 2.453 8 3.137A2.995 2.995 0 0 0 5.671 2c-.115 0-.222.018-.338.036v1.332c.107-.018.223-.036.338-.036.907 0 1.645.728 1.662 1.625H2v2.664h5.333V4.957v.009Z"></path><path d="M8.667 14.29h2.853c.88 0 1.591-.72 1.591-1.59V8.963H8.667v5.328Z"></path><path d="M2.889 8.962v3.739c0 .879.711 1.589 1.591 1.589h2.853V8.962H2.89Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGiftFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGiftFilled;
    }
}
