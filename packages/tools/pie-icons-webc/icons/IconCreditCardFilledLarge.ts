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

const componentSelector = 'icon-credit-card-filled-large';

export class IconCreditCardFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--creditCardFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardFilledLarge', '', null, 'IconCreditCardFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardFilledLarge', '', this.size, 'IconCreditCardFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--creditCardFilledLarge"><path d="M2.875 13.813V23A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23v-9.188H2.875Zm9.625 6.562H7.25v-1.75h5.25v1.75Zm10.754.621a1.479 1.479 0 0 1-1.129-.516 1.496 1.496 0 1 1 0-1.96 1.497 1.497 0 1 1 1.129 2.476ZM2.875 11.188V9A2.625 2.625 0 0 1 5.5 6.375h21A2.625 2.625 0 0 1 29.125 9v2.188H2.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCreditCardFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCreditCardFilledLarge;
    }
}
