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

const componentSelector = 'icon-spicy';

export class IconSpicy extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--spicy';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--spicy', '', null, 'IconSpicy');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--spicy', '', this.size, 'IconSpicy');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--spicy"><path d="M4.106 13.758a3.036 3.036 0 0 1-2.625-1.138l-.429-.682.762-.29c2.275-.874 3.5-3.22 4.506-5.25a12.959 12.959 0 0 1 1.96-3.15 3.5 3.5 0 0 1 5.075 0 3.71 3.71 0 0 1 0 5.146c-1.855 1.82-5.154 4.287-7.201 4.987a6.38 6.38 0 0 1-2.048.377Zm-.761-1.383c.8.175 1.632.102 2.389-.21 1.75-.612 5.005-2.992 6.676-4.707a2.389 2.389 0 0 0 0-3.317 2.275 2.275 0 0 0-3.194 0 12.25 12.25 0 0 0-1.75 2.835c-.918 1.838-2.091 4.104-4.121 5.399Z"></path><path d="m13.145 3.783-1.085-.736A3.789 3.789 0 0 1 15 1.22V2.53a2.538 2.538 0 0 0-1.855 1.252Z"></path><path d="M13.136 6.74a3.631 3.631 0 0 1-3.631-3.631 1.75 1.75 0 0 1 0-.403l1.277.298-.638-.149.639.14v.114A2.319 2.319 0 0 0 13.1 5.428c.146.014.292.014.438 0l.297 1.277a3.325 3.325 0 0 1-.7.035Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSpicy);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSpicy;
    }
}
