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

const componentSelector = 'icon-star-half-filled';

export class IconStarHalfFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--starHalfFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--starHalfFilled', '', null, 'IconStarHalfFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--starHalfFilled', '', this.size, 'IconStarHalfFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--starHalfFilled"><path d="m11.544 9.601 3.386-3.299-4.672-.682a.227.227 0 0 1-.167-.114l-2.09-4.235-2.092 4.235a.228.228 0 0 1-.166.114l-4.673.682 3.43 3.3a.254.254 0 0 1 .061.192l-.848 4.655 4.182-2.197a.219.219 0 0 1 .21 0l4.183 2.197-.788-4.655a.251.251 0 0 1 .044-.193Zm-1.356.411.35 2.04-1.83-.963A1.54 1.54 0 0 0 8 10.914V4.229l.875 1.855a1.531 1.531 0 0 0 1.155.875l2.048.297-1.453 1.4a1.54 1.54 0 0 0-.437 1.356Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconStarHalfFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconStarHalfFilled;
    }
}
