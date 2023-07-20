import {
    html, LitElement, TemplateResult, css,
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

const componentSelector = 'icon-peanuts-large';

export class IconPeanutsLarge extends LitElement implements IconProps {
    static styles = css`
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    `;

    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class = 'c-pieIcon c-pieIcon--peanutsLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--peanutsLarge', '', null, 'IconPeanutsLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--peanutsLarge', '', this.size, 'IconPeanutsLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--peanutsLarge"><path d="M11.852 27.375c-.27 0-.55 0-.83-.044a7.271 7.271 0 0 1-5.347-3.456 7.193 7.193 0 0 1 .149-7.726 7.192 7.192 0 0 1 4.524-3.037 3.947 3.947 0 0 0 3.027-2.94c.064-.27.143-.535.236-.796A7.105 7.105 0 0 1 25.957 7.46a7.307 7.307 0 0 1 .683 7.56 6.125 6.125 0 0 1-2.196 2.511 8.46 8.46 0 0 1-2.625 1.129 4.375 4.375 0 0 0-3.028 3.343 7.202 7.202 0 0 1-7 5.372h.061ZM7.25 17.155A5.425 5.425 0 0 0 7.162 23a5.469 5.469 0 0 0 8.55 1.041 5.433 5.433 0 0 0 1.408-2.459 6.125 6.125 0 0 1 4.314-4.602 6.712 6.712 0 0 0 2.056-.875 4.375 4.375 0 0 0 1.558-1.75 5.513 5.513 0 0 0-.49-5.775 5.347 5.347 0 0 0-9.328 1.382 3.974 3.974 0 0 0-.184.604 5.73 5.73 0 0 1-4.375 4.261 5.434 5.434 0 0 0-3.421 2.328Z"></path><path d="M21.25 9.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"></path><path d="M22.125 13.375a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"></path><path d="M18.625 12.5a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPeanutsLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPeanutsLarge;
    }
}
