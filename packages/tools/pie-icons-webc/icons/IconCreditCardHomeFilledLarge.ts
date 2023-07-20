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

const componentSelector = 'icon-credit-card-home-filled-large';

export class IconCreditCardHomeFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--creditCardHomeFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeFilledLarge', '', null, 'IconCreditCardHomeFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeFilledLarge', '', this.size, 'IconCreditCardHomeFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--creditCardHomeFilledLarge"><path d="M11.625 20.375V26.5h-5.25V12.797a130.828 130.828 0 0 0-2.249 2.083L2.92 13.62c.288-.245 7.227-6.939 11.602-9.494.39-.216.824-.345 1.269-.376H16.122c.467.01.925.126 1.34.341 4.374 2.573 11.374 9.231 11.62 9.511l-1.208 1.26s-.928-.874-2.249-2.082v4.095h-10.5a3.5 3.5 0 0 0-3.5 3.5ZM13.375 23H28.25v3.5a1.75 1.75 0 0 1-1.75 1.75H15.125a1.75 1.75 0 0 1-1.75-1.75V23ZM16 26.5h2.625v-1.75H16v1.75Zm10.5-7.875H15.125a1.75 1.75 0 0 0-1.75 1.75v.875H28.25v-.875a1.75 1.75 0 0 0-1.75-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCreditCardHomeFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCreditCardHomeFilledLarge;
    }
}
