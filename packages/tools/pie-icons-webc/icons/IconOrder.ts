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

const componentSelector = 'icon-order';

export class IconOrder extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--order';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--order', '', null, 'IconOrder');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--order', '', this.size, 'IconOrder');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--order"><path d="M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v10.64l3.193-1.444a.202.202 0 0 1 .176 0L8 13.967l2.537-1.146a.202.202 0 0 1 .175 0l3.194 1.444V3.625a1.54 1.54 0 0 0-1.531-1.531Zm.219 10.141-1.339-.604a1.506 1.506 0 0 0-1.26 0L8 12.533l-1.995-.875a1.488 1.488 0 0 0-1.26 0l-1.339.603V3.625a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v8.61ZM5.375 5.594h5.25v1.312h-5.25V5.594Zm.875 2.625h3.5V9.53h-3.5V8.22Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconOrder);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconOrder;
    }
}
