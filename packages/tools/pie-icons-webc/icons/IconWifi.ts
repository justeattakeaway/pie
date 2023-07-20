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

const componentSelector = 'icon-wifi';

export class IconWifi extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--wifi';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--wifi', '', null, 'IconWifi');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--wifi', '', this.size, 'IconWifi');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--wifi"><g clip-path="url(#prefix__clip0_15_321)"><path d="M11.832 10.231A5.023 5.023 0 0 0 8 8.333a5.023 5.023 0 0 0-3.833 1.898l-1.006-.875A6.326 6.326 0 0 1 8 7.02a6.326 6.326 0 0 1 4.839 2.363l-1.007.848Z"></path><path d="M13.95 8.096A7.788 7.788 0 0 0 8 5.156a7.787 7.787 0 0 0-5.95 2.94l-1.006-.875a9.074 9.074 0 0 1 7-3.412 9.074 9.074 0 0 1 7 3.412l-1.094.875Z"></path><path d="M9.794 12.576a2.292 2.292 0 0 0-3.588 0L5.2 11.701A3.666 3.666 0 0 1 8 10.354a3.665 3.665 0 0 1 2.8 1.373l-1.006.85Z"></path></g><defs><clipPath id="prefix__clip0_15_321"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconWifi);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconWifi;
    }
}
