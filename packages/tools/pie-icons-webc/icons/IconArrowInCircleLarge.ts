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

const componentSelector = 'icon-arrow-in-circle-large';

export class IconArrowInCircleLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--arrowInCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowInCircleLarge', '', null, 'IconArrowInCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowInCircleLarge', '', this.size, 'IconArrowInCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--arrowInCircleLarge"><path d="M16 3.75a12.25 12.25 0 0 0-11.961 9.625H5.84a10.5 10.5 0 1 1 0 5.25H4.04A12.25 12.25 0 1 0 16 3.75Z"></path><path d="m19.141 16.875-4.165 4.165 1.234 1.234 5.04-5.04c.085-.083.161-.173.227-.272a1.75 1.75 0 0 0 0-1.925 1.7 1.7 0 0 0-.227-.27l-5.04-5.04-1.234 1.233 4.165 4.165H2.875v1.75h16.266Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconArrowInCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconArrowInCircleLarge;
    }
}
