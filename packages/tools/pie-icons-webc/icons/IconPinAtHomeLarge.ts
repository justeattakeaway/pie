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

const componentSelector = 'icon-pin-at-home-large';

export class IconPinAtHomeLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pinAtHomeLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeLarge', '', null, 'IconPinAtHomeLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeLarge', '', this.size, 'IconPinAtHomeLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pinAtHomeLarge"><path d="M13.375 18.625a1.313 1.313 0 1 1 0 2.626 1.313 1.313 0 0 1 0-2.626Zm3.063 1.313a1.313 1.313 0 1 0 2.625 0 1.313 1.313 0 0 0-2.625 0Zm4.375 0a1.313 1.313 0 1 0 2.625 0 1.313 1.313 0 0 0-2.625 0Zm5.687-1.313a1.313 1.313 0 1 0 0 2.626 1.313 1.313 0 0 0 0-2.626ZM17.461 4.109a3.15 3.15 0 0 0-2.94 0C10.146 6.68 3.208 13.375 2.92 13.62l1.207 1.26s.928-.875 2.25-2.083V26.5h19.25V23h-1.75v1.75H8.125V11.231a55.837 55.837 0 0 1 7.253-5.582 1.444 1.444 0 0 1 1.216 0 55.79 55.79 0 0 1 7.28 5.582v5.644h1.75v-4.078a130.695 130.695 0 0 1 2.249 2.083l1.251-1.26c-.332-.245-7.271-6.939-11.664-9.511Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPinAtHomeLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPinAtHomeLarge;
    }
}
