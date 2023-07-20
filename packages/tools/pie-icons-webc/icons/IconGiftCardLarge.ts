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

const componentSelector = 'icon-gift-card-large';

export class IconGiftCardLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--giftCardLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--giftCardLarge', '', null, 'IconGiftCardLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--giftCardLarge', '', this.size, 'IconGiftCardLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--giftCardLarge"><path d="M29.125 11.266v12.968l-3.141 3.141H6.016l-3.141-3.141V11.266l3.141-3.141H9v1.75H6.734l-2.109 2.109v11.532l2.109 2.109h18.532l2.109-2.109V11.984l-2.109-2.109H23v-1.75h2.984l3.141 3.141Zm-19.25 4.961a.875.875 0 0 1 .455-1.478l3.307-.648 1.575-2.896a.875.875 0 0 1 1.54 0l1.576 2.896 3.307.648a.876.876 0 0 1 .49 1.478l-2.319 2.328.473 3.386a.875.875 0 0 1-.368.832.875.875 0 0 1-.498.166.876.876 0 0 1-.403-.096L16 21.31l-2.992 1.532a.875.875 0 0 1-1.27-.875l.473-3.387-2.336-2.354Zm2.389-.07 1.47 1.47a.874.874 0 0 1 .245.744l-.289 2.153 1.899-.972a.876.876 0 0 1 .787 0l1.899.972-.289-2.153a.876.876 0 0 1 .245-.743l1.47-1.47-2.117-.42a.875.875 0 0 1-.595-.438L16 13.454 14.994 15.3a.875.875 0 0 1-.595.438l-2.135.42ZM16.875 3.75h-1.75V9h1.75V3.75Zm4.305 2.625-1.68-.481-1.015 3.342 1.671.516 1.024-3.377ZM13.672 9.21l-.97-3.369-1.68.534.97 3.36 1.68-.525Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGiftCardLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGiftCardLarge;
    }
}
