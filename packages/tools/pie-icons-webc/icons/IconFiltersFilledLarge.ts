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

const componentSelector = 'icon-filters-filled-large';

export class IconFiltersFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--filtersFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--filtersFilledLarge', '', null, 'IconFiltersFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--filtersFilledLarge', '', this.size, 'IconFiltersFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--filtersFilledLarge"><path d="M14.25 9v-.875A2.625 2.625 0 0 0 11.625 5.5h-.875a2.625 2.625 0 0 0-2.625 2.625V9h-5.25v1.75h5.25v.875a2.625 2.625 0 0 0 2.625 2.625h.875a2.625 2.625 0 0 0 2.625-2.625v-.875h14.875V9H14.25Z"></path><path d="M23.875 20.375a2.625 2.625 0 0 0-2.625-2.625h-.875a2.625 2.625 0 0 0-2.625 2.625v.875H2.875V23H17.75v.875a2.625 2.625 0 0 0 2.625 2.625h.875a2.625 2.625 0 0 0 2.625-2.625V23h5.25v-1.75h-5.25v-.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFiltersFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFiltersFilledLarge;
    }
}
