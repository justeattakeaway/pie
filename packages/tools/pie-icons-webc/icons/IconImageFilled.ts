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

const componentSelector = 'icon-image-filled';

export class IconImageFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--imageFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--imageFilled', '', null, 'IconImageFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--imageFilled', '', this.size, 'IconImageFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--imageFilled"><path d="M1.219 2.219V14.03H14.78V2.22H1.22Zm12.25 1.312V7.82A2.756 2.756 0 0 1 12.2 9.48c-1.75 1.103-2.922.525-4.375-.192-1.453-.718-3.063-1.514-5.25-.525v-5.25l10.894.017ZM10.188 9a2.187 2.187 0 1 0 0-4.375 2.187 2.187 0 0 0 0 4.375Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconImageFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconImageFilled;
    }
}
