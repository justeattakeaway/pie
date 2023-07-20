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

const componentSelector = 'icon-more-horizontal-large';

export class IconMoreHorizontalLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--moreHorizontalLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--moreHorizontalLarge', '', null, 'IconMoreHorizontalLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--moreHorizontalLarge', '', this.size, 'IconMoreHorizontalLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--moreHorizontalLarge"><path d="M7.688 14.031a1.969 1.969 0 1 1 0 3.938 1.969 1.969 0 0 1 0-3.938ZM14.03 16a1.97 1.97 0 1 0 3.938 0 1.97 1.97 0 0 0-3.938 0Zm8.313 0a1.97 1.97 0 1 0 3.938 0 1.97 1.97 0 0 0-3.938 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMoreHorizontalLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMoreHorizontalLarge;
    }
}
