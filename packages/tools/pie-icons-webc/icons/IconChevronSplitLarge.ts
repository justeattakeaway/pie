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

const componentSelector = 'icon-chevron-split-large';

export class IconChevronSplitLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--chevronSplitLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronSplitLarge', '', null, 'IconChevronSplitLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronSplitLarge', '', this.size, 'IconChevronSplitLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chevronSplitLarge"><path d="m23.052 12.036-7.008-7.411h-.097l-7 7.402L7.68 10.83l7-7.412a1.916 1.916 0 0 1 2.625 0l7 7.412-1.252 1.207Z"></path><path d="M8.947 19.973 16 27.375h.096l7-7.402 1.278 1.198-7 7.403a1.907 1.907 0 0 1-2.625 0l-7-7.412 1.198-1.19Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChevronSplitLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChevronSplitLarge;
    }
}
