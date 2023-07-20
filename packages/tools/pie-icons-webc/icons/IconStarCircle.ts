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

const componentSelector = 'icon-star-circle';

export class IconStarCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--starCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--starCircle', '', null, 'IconStarCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--starCircle', '', this.size, 'IconStarCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--starCircle"><path fill-rule="evenodd" d="M1.219 8c0-3.736 3.045-6.781 6.781-6.781A6.787 6.787 0 0 1 14.781 8c0 3.736-3.045 6.781-6.781 6.781-3.736 0-6.781-3.045-6.781-6.781ZM2.53 8A5.47 5.47 0 0 0 8 13.469 5.47 5.47 0 0 0 13.469 8 5.476 5.476 0 0 0 8 2.531 5.476 5.476 0 0 0 2.531 8ZM8 5.322l.814 1.654 1.82.263L9.32 8.525l.306 1.811L8 9.48l-1.628.857.316-1.811-1.322-1.286 1.82-.263L8 5.322Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconStarCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconStarCircle;
    }
}
