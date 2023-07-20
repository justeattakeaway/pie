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

const componentSelector = 'icon-printer';

export class IconPrinter extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--printer';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--printer', '', null, 'IconPrinter');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--printer', '', this.size, 'IconPrinter');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--printer"><path d="M14.781 7.125a1.54 1.54 0 0 0-1.531-1.531h-1.969v-3.5H4.72v3.5H2.75a1.54 1.54 0 0 0-1.531 1.531v5.906h3.5v1.75h6.562v-1.75h3.5V7.125Zm-8.75-3.719H9.97v2.188H6.03V3.406ZM9.97 13.47H6.03v-3.063H9.97v3.063Zm3.5-1.75H11.28v-1.313h.875V9.094H3.844v1.312h.875v1.313H2.53V7.125a.219.219 0 0 1 .219-.219h10.5a.219.219 0 0 1 .219.219v4.594Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPrinter);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPrinter;
    }
}
