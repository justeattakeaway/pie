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

const componentSelector = 'icon-user-circle-filled-large';

export class IconUserCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--userCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userCircleFilledLarge', '', null, 'IconUserCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userCircleFilledLarge', '', this.size, 'IconUserCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userCircleFilledLarge"><path d="M16 3.75a12.25 12.25 0 0 0-9.293 20.212c1.27-4.173 4.63-5.337 6.397-5.337h5.783c1.75 0 5.128 1.164 6.397 5.346A12.25 12.25 0 0 0 16 3.75Zm0 13.125a4.375 4.375 0 1 1 0-8.75 4.375 4.375 0 0 1 0 8.75Z"></path><path d="M16 15.125a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z"></path><path d="M18.887 20.375h-5.783s-4.025.07-4.98 4.996a12.25 12.25 0 0 0 15.75 0c-.962-4.926-4.952-4.996-4.987-4.996Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserCircleFilledLarge;
    }
}
