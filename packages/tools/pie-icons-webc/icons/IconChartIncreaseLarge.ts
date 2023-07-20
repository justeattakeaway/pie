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

const componentSelector = 'icon-chart-increase-large';

export class IconChartIncreaseLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--chartIncreaseLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chartIncreaseLarge', '', null, 'IconChartIncreaseLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chartIncreaseLarge', '', this.size, 'IconChartIncreaseLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chartIncreaseLarge"><path d="M6.375 23h1.75v4.375h-1.75V23Zm12.25 4.375h1.75v-8.75h-1.75v8.75Zm-6.125 0h1.75V21.25H12.5v6.125Zm12.25 0h1.75v-12.25h-1.75v12.25Zm.875-24.5h-7v1.75h5.145C17.015 12.71 12.229 14.25 5.5 14.25V16c8.006 0 13.055-2.511 19.25-9.8v4.55h1.75v-7a.875.875 0 0 0-.875-.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChartIncreaseLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChartIncreaseLarge;
    }
}
