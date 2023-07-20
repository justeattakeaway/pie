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

const componentSelector = 'icon-credit-card';

export class IconCreditCard extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--creditCard';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCard', '', null, 'IconCreditCard');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCard', '', this.size, 'IconCreditCard');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--creditCard"><path d="M3.625 9.094H6.25v1.312H3.625V9.094ZM14.781 4.5v7a1.54 1.54 0 0 1-1.531 1.531H2.75A1.54 1.54 0 0 1 1.219 11.5v-7A1.54 1.54 0 0 1 2.75 2.969h10.5A1.54 1.54 0 0 1 14.781 4.5Zm-12.25 0v1.094H13.47V4.5a.219.219 0 0 0-.219-.219H2.75a.219.219 0 0 0-.219.219Zm10.938 7V6.906H2.53V11.5a.219.219 0 0 0 .219.219h10.5a.219.219 0 0 0 .219-.219Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCreditCard);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCreditCard;
    }
}
