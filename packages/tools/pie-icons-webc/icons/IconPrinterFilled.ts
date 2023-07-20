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

const componentSelector = 'icon-printer-filled';

export class IconPrinterFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--printerFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--printerFilled', '', null, 'IconPrinterFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--printerFilled', '', this.size, 'IconPrinterFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--printerFilled"><path d="M11.281 3.844V1.656H4.72v2.188h6.562Z"></path><path d="M13.25 5.156H2.75a1.54 1.54 0 0 0-1.531 1.532v5.906h3.5V9.969h-.875V8.656h8.312V9.97h-.875v2.625h3.5V6.688a1.54 1.54 0 0 0-1.531-1.532Z"></path><path d="M6.031 9.969v4.375H9.96v-.656h.009v-3.72H6.03Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPrinterFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPrinterFilled;
    }
}
