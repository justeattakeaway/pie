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

const componentSelector = 'icon-restaurant-menu-large';

export class IconRestaurantMenuLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--restaurantMenuLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--restaurantMenuLarge', '', null, 'IconRestaurantMenuLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--restaurantMenuLarge', '', this.size, 'IconRestaurantMenuLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--restaurantMenuLarge"><path d="M19.5 22.125h-7v1.75h7v-1.75Z"></path><path d="M23.875 3.75H8.125A2.625 2.625 0 0 0 5.5 6.375v21.927l.088-.052h20.825l.087.052V6.375a2.625 2.625 0 0 0-2.625-2.625ZM7.25 26.5V6.375a.875.875 0 0 1 .875-.875h15.75a.875.875 0 0 1 .875.875V26.5H7.25Z"></path><path d="M21.25 18.625h-10.5v1.75h10.5v-1.75Z"></path><path d="M21.171 13.375a5.25 5.25 0 0 0-4.296-4.296.254.254 0 0 0 0-.079.875.875 0 0 0-1.75 0 .254.254 0 0 0 0 .079 5.25 5.25 0 0 0-4.296 4.296c-.049.29-.075.582-.079.875v.875h10.5v-.875a5.807 5.807 0 0 0-.079-.875Zm-8.548 0a3.5 3.5 0 0 1 6.755 0h-6.755Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconRestaurantMenuLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconRestaurantMenuLarge;
    }
}
