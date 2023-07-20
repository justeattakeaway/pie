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

const componentSelector = 'icon-vegan';

export class IconVegan extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--vegan';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--vegan', '', null, 'IconVegan');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--vegan', '', this.size, 'IconVegan');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--vegan"><path d="m14.484 1.718-.158-.657-.656.184c-.473.131-4.672 1.348-5.933 3.5C6.25 3.214 3.162 2.418 2.75 2.321l-.656-.157-.14.665c-.079.429-.84 4.296.359 6.212a3.623 3.623 0 0 0 3.053 1.75c.14.009.28.009.42 0l1.339 3.255h1.75l1.409-3.561c.205.038.412.059.621.061a3.938 3.938 0 0 0 3.386-1.96c1.278-2.135.306-6.387.193-6.868ZM3.424 8.34c-.674-1.023-.482-3.228-.289-4.55 1.277.394 3.343 1.217 3.99 2.24.038.07.07.143.096.219a3.806 3.806 0 0 0 .088 1.505c.02.068.043.136.07.201a2.24 2.24 0 0 1-.621.919l-.64-1.645h-1.75l.876 2.196a2.319 2.319 0 0 1-1.82-1.085ZM8 12.244l-.787-2.065c.342-.236.639-.532.875-.875a3.5 3.5 0 0 0 .743.639L8 12.243Zm5.154-4.323A2.625 2.625 0 0 1 10.8 9.225l.787-1.995H9.925l-.543 1.444a2.415 2.415 0 0 1-.804-1.269 2.625 2.625 0 0 1 .297-2.03c.7-1.19 3.063-2.187 4.471-2.625.271 1.426.543 3.973-.166 5.171h-.026Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconVegan);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconVegan;
    }
}
