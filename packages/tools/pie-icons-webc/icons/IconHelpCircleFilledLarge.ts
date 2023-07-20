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

const componentSelector = 'icon-help-circle-filled-large';

export class IconHelpCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--helpCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--helpCircleFilledLarge', '', null, 'IconHelpCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--helpCircleFilledLarge', '', this.size, 'IconHelpCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--helpCircleFilledLarge"><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 18.375a1.313 1.313 0 1 1 0-2.626 1.313 1.313 0 0 1 0 2.626Zm1.024-5.81H16.9l-.166 1.435h-1.391l-.219-2.511h.088c1.75-.272 2.782-1.199 2.782-2.424a1.75 1.75 0 0 0-1.89-1.689 2.67 2.67 0 0 0-1.61.508l-.061.043L13.2 10.41l.07-.062a4.489 4.489 0 0 1 2.922-.997c2.704 0 3.92 1.654 3.92 3.299a3.955 3.955 0 0 1-3.088 3.666Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconHelpCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHelpCircleFilledLarge;
    }
}
