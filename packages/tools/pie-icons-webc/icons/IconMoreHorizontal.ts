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

const componentSelector = 'icon-more-horizontal';

export class IconMoreHorizontal extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--moreHorizontal';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--moreHorizontal', '', null, 'IconMoreHorizontal');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--moreHorizontal', '', this.size, 'IconMoreHorizontal');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--moreHorizontal"><path d="M3.188 6.688a1.313 1.313 0 1 1 0 2.625 1.313 1.313 0 0 1 0-2.626ZM6.688 8a1.313 1.313 0 1 0 2.625 0 1.313 1.313 0 0 0-2.626 0ZM11.5 8a1.313 1.313 0 1 0 2.625 0A1.313 1.313 0 0 0 11.5 8Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMoreHorizontal);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMoreHorizontal;
    }
}
