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

const componentSelector = 'icon-heart-large';

export class IconHeartLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--heartLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--heartLarge', '', null, 'IconHeartLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--heartLarge', '', this.size, 'IconHeartLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--heartLarge"><path d="M16 27.751 5.176 16.63a7.315 7.315 0 0 1 0-9.984 6.676 6.676 0 0 1 9.573 0L16 7.88l1.277-1.225a6.668 6.668 0 0 1 9.573 0 7.315 7.315 0 0 1 0 9.984L16 27.75ZM9.963 6.375a4.926 4.926 0 0 0-3.5 1.505 5.504 5.504 0 0 0 0 7.525L16 25.249l9.573-9.844a5.504 5.504 0 0 0 0-7.525 4.927 4.927 0 0 0-3.535-1.505 4.978 4.978 0 0 0-3.562 1.523l-1.601 1.54a1.321 1.321 0 0 1-1.838 0l-1.53-1.558a4.944 4.944 0 0 0-3.544-1.505Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconHeartLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHeartLarge;
    }
}
