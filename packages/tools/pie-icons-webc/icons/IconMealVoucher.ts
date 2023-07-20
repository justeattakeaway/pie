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

const componentSelector = 'icon-meal-voucher';

export class IconMealVoucher extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--mealVoucher';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--mealVoucher', '', null, 'IconMealVoucher');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--mealVoucher', '', this.size, 'IconMealVoucher');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--mealVoucher"><path d="M14.781 6.688v5.25a1.094 1.094 0 0 1-1.094 1.093H2.313a1.093 1.093 0 0 1-1.094-1.093v-5.25a1.094 1.094 0 0 1 1.093-1.094h1.313v1.312H2.531v4.813H13.47V6.906h-1.094V5.594h1.313a1.094 1.094 0 0 1 1.093 1.094Zm-5.11 1.04.517.115c0 .76-.053 1.426-.08 1.907h1.05c.08-1.444.176-4.375.062-6.405 0-.586-.158-.875-.411-1.015a.648.648 0 0 0-.508-.061.761.761 0 0 0-.42.35 7.875 7.875 0 0 0-.761 4.314.779.779 0 0 0 .551.796Zm-3.946-.997v3.02h1.05V6.73c.446-.13.875-.428.875-.927V2.26l-2.853.289v3.255c.035.49.482.787.928.927Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMealVoucher);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMealVoucher;
    }
}
