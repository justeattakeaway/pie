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

const componentSelector = 'icon-pizza';

export class IconPizza extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pizza';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pizza', '', null, 'IconPizza');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pizza', '', this.size, 'IconPizza');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pizza"><path d="M13.924 4.99C13.1 3.704 10.625.764 5.253 1.087a1.496 1.496 0 0 0-1.41 1.497V15l9.774-8.041a1.496 1.496 0 0 0 .307-1.969Zm-8.75 4.83a1.12 1.12 0 0 0 .875-.324 1.146 1.146 0 0 0 0-1.619 1.164 1.164 0 0 0-.875-.332V4.622a7.114 7.114 0 0 1 5.941 2.704l-5.959 4.856.018-2.362Zm7.63-3.876-.674.551a8.478 8.478 0 0 0-6.974-3.176v-.735a.192.192 0 0 1 .219-.193h.718c4.156 0 6.124 2.293 6.772 3.325a.193.193 0 0 1-.079.228h.018Zm-3.5 1.12a1.006 1.006 0 1 1-.98-1.007A1.006 1.006 0 0 1 9.33 7.064h-.026Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPizza);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPizza;
    }
}
