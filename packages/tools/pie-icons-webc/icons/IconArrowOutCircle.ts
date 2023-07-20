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

const componentSelector = 'icon-arrow-out-circle';

export class IconArrowOutCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--arrowOutCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowOutCircle', '', null, 'IconArrowOutCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowOutCircle', '', this.size, 'IconArrowOutCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--arrowOutCircle"><path d="M14.046 7.169 11.334 4.5l-.928.875 1.899 1.899H5.139v1.312h7.166l-1.899 1.908.928.927 2.712-2.712a1.111 1.111 0 0 0 0-1.54Z"></path><path d="M8.149 13.408a5.469 5.469 0 0 1 0-10.938 5.25 5.25 0 0 1 2.87.875h2.056a6.695 6.695 0 0 0-4.926-2.188 6.781 6.781 0 1 0 0 13.563 6.659 6.659 0 0 0 4.926-2.188h-2.056a5.25 5.25 0 0 1-2.87.876Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconArrowOutCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconArrowOutCircle;
    }
}
