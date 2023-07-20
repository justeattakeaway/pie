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

const componentSelector = 'icon-email-filled-large';

export class IconEmailFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--emailFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--emailFilledLarge', '', null, 'IconEmailFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--emailFilledLarge', '', this.size, 'IconEmailFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--emailFilledLarge"><path d="M28.81 24.225c.203-.377.311-.797.315-1.225V9a2.687 2.687 0 0 0-.21-1.032l-8.837 8.18 8.732 8.077Z"></path><path d="M18.791 17.339 16.7 19.264a.875.875 0 0 1-.595.236.875.875 0 0 1-.586-.227l-2.144-1.943-8.899 8.085c.324.138.672.21 1.024.21h21a2.45 2.45 0 0 0 1.015-.21l-8.724-8.076Z"></path><path d="M16.105 17.435 27.716 6.69a2.625 2.625 0 0 0-1.216-.315h-21a2.546 2.546 0 0 0-1.146.28l11.751 10.78Z"></path><path d="M3.12 7.906A2.537 2.537 0 0 0 2.875 9v14c.005.425.113.842.315 1.216l8.89-8.067-8.96-8.243Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEmailFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEmailFilledLarge;
    }
}
