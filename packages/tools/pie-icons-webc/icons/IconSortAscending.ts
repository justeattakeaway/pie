import {
    html, LitElement, TemplateResult,
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

const componentSelector = 'icon-sort-ascending';

export class IconSortAscending extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--sortAscending';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sortAscending', '', null, 'IconSortAscending');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sortAscending', '', this.size, 'IconSortAscending');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--sortAscending"><path d="M1 7.344h6.816l-.551 1.312H1V7.344Zm8.286-3.5H1v1.312h7.735l.551-1.312ZM1 12.156h4.786l.56-1.312H1v1.312Zm12.994-2.502L12.156 11.5V6.25h-1.312v5.25L9.006 9.654l-.927.971 2.625 2.625a1.075 1.075 0 0 0 1.54 0l2.625-2.625-.875-.971Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSortAscending);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSortAscending;
    }
}
