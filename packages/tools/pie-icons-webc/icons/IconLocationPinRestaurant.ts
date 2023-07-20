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

const componentSelector = 'icon-location-pin-restaurant';

export class IconLocationPinRestaurant extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--locationPinRestaurant';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinRestaurant', '', null, 'IconLocationPinRestaurant');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinRestaurant', '', this.size, 'IconLocationPinRestaurant');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--locationPinRestaurant"><g clip-path="url(#prefix__clip0_3_53)"><path d="m8 12.436 3.29-3.325a4.734 4.734 0 0 0 0-6.624 4.602 4.602 0 0 0-6.58 0 4.734 4.734 0 0 0 0 6.624L8 12.436Zm-2.354-9.03a3.299 3.299 0 0 1 4.708 0 3.404 3.404 0 0 1 0 4.778L8 10.564l-2.354-2.38a3.404 3.404 0 0 1 0-4.778ZM4.5 13.47h7v1.312h-7V13.47Z"></path></g><defs><clipPath id="prefix__clip0_3_53"><rect width="16" height="16"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconLocationPinRestaurant);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLocationPinRestaurant;
    }
}
