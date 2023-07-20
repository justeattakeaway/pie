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

const componentSelector = 'icon-food-ready';

export class IconFoodReady extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--foodReady';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--foodReady', '', null, 'IconFoodReady');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--foodReady', '', this.size, 'IconFoodReady');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--foodReady"><path d="M13.941 12.935v-2.923a5.95 5.95 0 0 0-5.25-5.897 1.278 1.278 0 1 0-1.347 0 5.95 5.95 0 0 0-5.25 5.897v2.923h-.656v1.313h13.124v-1.313h-.62Zm-10.57-2.923a4.629 4.629 0 0 1 9.258 0v2.923H3.37v-2.923Z"></path><path d="M7.151 10.152 5.944 8.937 4.98 9.9l2.17 2.17L11.02 8.2l-.963-.953-2.905 2.904Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFoodReady);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFoodReady;
    }
}
