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

const componentSelector = 'icon-sort-descending-large';

export class IconSortDescendingLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--sortDescendingLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sortDescendingLarge', '', null, 'IconSortDescendingLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sortDescendingLarge', '', this.size, 'IconSortDescendingLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--sortDescendingLarge"><path d="M18.033 22.91H2v1.75h16.768l-.735-1.75ZM2 10.66h10.87l.735 1.75H2v-1.75Zm0 6.125h13.451l.735 1.75H2v-1.75Zm25.896-3.141-4.017-4.078V21.16h-1.75V9.636l-4.017 4.008-1.234-1.234 4.927-4.935a1.75 1.75 0 0 1 2.398 0l4.927 4.935-1.234 1.234Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSortDescendingLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSortDescendingLarge;
    }
}
