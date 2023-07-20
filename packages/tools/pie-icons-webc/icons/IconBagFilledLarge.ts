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

const componentSelector = 'icon-bag-filled-large';

export class IconBagFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--bagFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bagFilledLarge', '', null, 'IconBagFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bagFilledLarge', '', this.size, 'IconBagFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--bagFilledLarge"><path d="M25.625 8.125h-5.25v-3.5l-1.75-1.75h-5.25l-1.75 1.75v3.5h-5.25l-.788 18.253a2.625 2.625 0 0 0 1.584 2.535c.326.14.678.212 1.033.212h15.592a2.626 2.626 0 0 0 1.899-.814 2.624 2.624 0 0 0 .718-1.933l-.788-18.253Zm-7 7.875v-3.5h1.75V16l-1.75 1.75h-5.25L11.625 16v-3.5h1.75V16h5.25Zm-5.25-11.375h5.25v3.5h-5.25v-3.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBagFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBagFilledLarge;
    }
}
