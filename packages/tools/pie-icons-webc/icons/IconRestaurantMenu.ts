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

const componentSelector = 'icon-restaurant-menu';

export class IconRestaurantMenu extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--restaurantMenu';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--restaurantMenu', '', null, 'IconRestaurantMenu');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--restaurantMenu', '', this.size, 'IconRestaurantMenu');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--restaurantMenu"><path d="M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v10.281h11.812V3.625a1.54 1.54 0 0 0-1.531-1.531Zm.219 10.5H3.406V3.625a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v8.969Z"></path><path d="M10.625 7.668a2.625 2.625 0 0 0-2.196-2.144.437.437 0 1 0-.875 0 2.625 2.625 0 0 0-2.135 2.144 2.478 2.478 0 0 0 0 .437v.438h5.25v-.438a2.48 2.48 0 0 0-.044-.438Z"></path><path d="M10.625 9.645h-5.25v1.313h5.25V9.644Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconRestaurantMenu);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconRestaurantMenu;
    }
}
