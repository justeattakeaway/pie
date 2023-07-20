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

const componentSelector = 'icon-drink-large';

export class IconDrinkLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--drinkLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--drinkLarge', '', null, 'IconDrinkLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--drinkLarge', '', this.size, 'IconDrinkLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--drinkLarge"><path d="M24.75 9.875h-7.875V6.13l4.655-1.505-.56-1.663-5.845 1.908v5.005H7.25v1.75h1.566l1.374 15.111a2.625 2.625 0 0 0 2.625 2.389h6.388a2.625 2.625 0 0 0 2.625-2.389l1.356-15.111h1.566v-1.75Zm-5.556 17.5h-6.388a.875.875 0 0 1-.875-.796l-.875-9.127a4.663 4.663 0 0 1 4.752.158 7.963 7.963 0 0 0 3.762 1.015c.41-.003.82-.038 1.225-.105l-.735 8.059a.875.875 0 0 1-.866.796Zm1.75-10.666a5.915 5.915 0 0 1-4.375-.674 6.23 6.23 0 0 0-5.679-.402l-.315-4.008h10.85l-.481 5.084Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDrinkLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDrinkLarge;
    }
}
