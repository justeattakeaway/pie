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

const componentSelector = 'icon-id-card-large';

export class IconIdCardLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--idCardLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--idCardLarge', '', null, 'IconIdCardLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--idCardLarge', '', this.size, 'IconIdCardLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--idCardLarge"><path d="M26.5 6.375h-21A2.625 2.625 0 0 0 2.875 9v14A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23V9A2.625 2.625 0 0 0 26.5 6.375ZM27.375 23a.875.875 0 0 1-.875.875h-21A.875.875 0 0 1 4.625 23V9a.875.875 0 0 1 .875-.875h21a.875.875 0 0 1 .875.875v14Z"></path><path d="M12.5 9.875H9A2.625 2.625 0 0 0 6.375 12.5V16A2.625 2.625 0 0 0 9 18.625h3.5A2.625 2.625 0 0 0 15.125 16v-3.5A2.625 2.625 0 0 0 12.5 9.875ZM13.375 16a.875.875 0 0 1-.875.875H9A.875.875 0 0 1 8.125 16v-3.5A.875.875 0 0 1 9 11.625h3.5a.875.875 0 0 1 .875.875V16Z"></path><path d="m24.409 18.625.875-1.75h-6.659v1.75h5.784Z"></path><path d="m22.659 22.125.875-1.75h-4.909v1.75h4.034Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconIdCardLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconIdCardLarge;
    }
}
