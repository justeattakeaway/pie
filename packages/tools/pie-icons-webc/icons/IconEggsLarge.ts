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

const componentSelector = 'icon-eggs-large';

export class IconEggsLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--eggsLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--eggsLarge', '', null, 'IconEggsLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eggsLarge', '', this.size, 'IconEggsLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--eggsLarge"><path d="m21.8 9.86-1.465.942a11.86 11.86 0 0 1 1.003 1.934c.261.628.453 1.238.584 1.804l1.708-.366a13.32 13.32 0 0 0-.671-2.109 14.29 14.29 0 0 0-1.15-2.213l-.01.009Z"></path><path d="M13.242 13.643c.497.74.967 1.664 1.333 2.614.235.627.418 1.22.532 1.778l1.708-.349c-.13-.645-.34-1.342-.61-2.048-.41-1.063-.95-2.117-1.517-2.954l-1.446.976v-.017Z"></path><path d="M19.874 4.614c-1.97 0-3.678 1.482-4.95 3.469-.741-.453-1.534-.715-2.37-.715-4.585 0-7.94 7.87-7.94 11.974 0 4.375 3.556 7.939 7.94 7.939 2.98 0 5.577-1.656 6.936-4.087.13 0 .253.017.384.017a7.43 7.43 0 0 0 7.425-7.424c0-4.096-3.06-11.164-7.425-11.164v-.009Zm-1.438 16.654a6.198 6.198 0 0 1-.793 1.595 6.185 6.185 0 0 1-5.09 2.675 6.204 6.204 0 0 1-6.196-6.196c0-3.756 3.06-10.23 6.196-10.23.514 0 1.02.182 1.508.487.48.296.941.697 1.377 1.203 1.891 2.178 3.303 5.978 3.303 8.531 0 .671-.113 1.325-.314 1.926l.009.009Zm1.76.174a8.004 8.004 0 0 0 .296-2.109c0-2.867-1.638-7.564-4.191-10.143 1.01-1.639 2.283-2.841 3.573-2.841 2.876 0 5.682 5.96 5.682 9.42 0 3.024-2.37 5.49-5.351 5.665l-.009.008Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEggsLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEggsLarge;
    }
}
