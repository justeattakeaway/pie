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

const componentSelector = 'icon-pie-chart-large';

export class IconPieChartLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pieChartLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pieChartLarge', '', null, 'IconPieChartLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pieChartLarge', '', this.size, 'IconPieChartLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pieChartLarge"><path d="M16.875 2.875H16A13.125 13.125 0 0 0 2.875 16v.875h14v-14Zm-1.75 12.25h-10.5a11.375 11.375 0 0 1 10.5-10.5v10.5Zm.07 11.375-.14 1.75a12.294 12.294 0 0 1-11.016-9.625h1.793a10.552 10.552 0 0 0 9.363 7.875ZM28.25 16a12.294 12.294 0 0 1-11.305 12.25l-.14-1.75a10.5 10.5 0 0 0 1.82-20.668V4.03A12.25 12.25 0 0 1 28.25 16Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPieChartLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPieChartLarge;
    }
}
