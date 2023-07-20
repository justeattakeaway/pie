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

const componentSelector = 'icon-patterns-large';

export class IconPatternsLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--patternsLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--patternsLarge', '', null, 'IconPatternsLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--patternsLarge', '', this.size, 'IconPatternsLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--patternsLarge"><path d="M4.625 27.375h9.87v-9.87h-9.87v9.87Zm1.75-8.12h6.37v6.37h-6.37v-6.37Z"></path><path d="M12.596 15.23a5.374 5.374 0 0 0 0-10.745 5.374 5.374 0 0 0 0 10.745Zm0-8.995a3.63 3.63 0 0 1 3.623 3.622 3.63 3.63 0 0 1-3.623 3.623 3.63 3.63 0 0 1-3.622-3.623 3.63 3.63 0 0 1 3.622-3.622Z"></path><path d="m21.46 9.857-5.819 11.07H27.28L21.46 9.856Zm0 3.763 2.922 5.556h-5.845l2.923-5.556Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPatternsLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPatternsLarge;
    }
}
