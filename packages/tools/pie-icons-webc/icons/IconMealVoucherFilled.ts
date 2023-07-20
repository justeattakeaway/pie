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

const componentSelector = 'icon-meal-voucher-filled';

export class IconMealVoucherFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--mealVoucherFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--mealVoucherFilled', '', null, 'IconMealVoucherFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--mealVoucherFilled', '', this.size, 'IconMealVoucherFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--mealVoucherFilled"><path d="M9.12 6.932a7.875 7.875 0 0 1 .761-4.313.761.761 0 0 1 .42-.35.647.647 0 0 1 .508.061c.254.149.367.429.411 1.015.114 2.03 0 4.961-.061 6.405h-1.05c0-.481.052-1.146.079-1.908L9.67 7.73a.779.779 0 0 1-.551-.797Zm-3.395-.2V9.75h1.05V6.731c.446-.131.875-.429.875-.927V2.26l-2.853.289v3.255c.035.49.482.787.928.927Zm7.963-1.138h-1.103c0 1.636-.061 3.281-.114 4.226a1.321 1.321 0 0 1-1.312 1.242h-.534a1.75 1.75 0 0 1-1.75-1.75v-.875H8v.875a1.75 1.75 0 0 1-1.75 1.75 1.837 1.837 0 0 1-1.838-1.837V7.527a2.135 2.135 0 0 1-.874-1.75v-.183H2.313a1.094 1.094 0 0 0-1.094 1.093v5.25a1.094 1.094 0 0 0 1.093 1.094h11.376a1.094 1.094 0 0 0 1.093-1.094v-5.25a1.094 1.094 0 0 0-1.094-1.093Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMealVoucherFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMealVoucherFilled;
    }
}
