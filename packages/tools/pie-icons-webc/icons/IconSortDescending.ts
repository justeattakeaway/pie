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

const componentSelector = 'icon-sort-descending';

export class IconSortDescending extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--sortDescending';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sortDescending', '', null, 'IconSortDescending');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sortDescending', '', this.size, 'IconSortDescending');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--sortDescending"><path d="M1 9.23h6.817l-.551-1.312H1V9.23Zm8.287 3.5H1v-1.312h7.736l.551 1.312ZM1 4.418h4.787l.56 1.312H1V4.418ZM13.995 6.92l-1.838-1.846v5.25h-1.312v-5.25L9.007 6.92l-.928-.97 2.626-2.626a1.077 1.077 0 0 1 1.54 0L14.87 5.95l-.875.971Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSortDescending);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSortDescending;
    }
}
