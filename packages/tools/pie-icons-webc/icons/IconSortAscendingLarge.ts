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

const componentSelector = 'icon-sort-ascending-large';

export class IconSortAscendingLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--sortAscendingLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sortAscendingLarge', '', null, 'IconSortAscendingLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sortAscendingLarge', '', this.size, 'IconSortAscendingLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--sortAscendingLarge"><path d="M18.03 10.75H2V9h16.765l-.735 1.75ZM2 23h10.867l.735-1.75H2V23Zm0-6.125h13.449l.735-1.75H2v1.75Zm25.891 3.141-4.016 4.078V12.5h-1.75v11.524l-4.016-4.008-1.234 1.234 4.926 4.935a1.75 1.75 0 0 0 2.398 0l4.926-4.935-1.234-1.234Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSortAscendingLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSortAscendingLarge;
    }
}
