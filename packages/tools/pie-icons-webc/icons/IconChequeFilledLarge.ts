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

const componentSelector = 'icon-cheque-filled-large';

export class IconChequeFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--chequeFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chequeFilledLarge', '', null, 'IconChequeFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chequeFilledLarge', '', this.size, 'IconChequeFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chequeFilledLarge"><path d="m19.832 14.539-3.788.586.542-3.789 6.23-6.274a2.31 2.31 0 0 1 2.503-.498l1.435-1.435 1.242 1.242-1.435 1.435a2.31 2.31 0 0 1-.498 2.503l-6.23 6.23Zm9.293-2.914v14H2.875v-14h11.891l-.787 5.521 6.676-.954 4.559-4.567h3.911ZM17.75 19.5H7.25v1.75h10.5V19.5Zm7 0h-3.5v1.75h3.5V19.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChequeFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChequeFilledLarge;
    }
}
