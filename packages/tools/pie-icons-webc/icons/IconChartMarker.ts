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

const componentSelector = 'icon-chart-marker';

export class IconChartMarker extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--chartMarker';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chartMarker', '', null, 'IconChartMarker');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chartMarker', '', this.size, 'IconChartMarker');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chartMarker"><path d="M3.844 11.5h1.312V15H3.844v-3.5Zm3.5 3.5h1.312V8.875H7.344V15Zm3.5-4.375V15h1.312v-4.375h-1.312Zm-.158-4.751L8 8 5.314 5.874a1.531 1.531 0 0 1-.595-1.208V1.22h6.562v3.447a1.53 1.53 0 0 1-.595 1.208ZM9.97 2.53H6.03v2.135a.245.245 0 0 0 .088.175L8 6.294 9.881 4.84a.245.245 0 0 0 .088-.175V2.531Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChartMarker);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChartMarker;
    }
}
