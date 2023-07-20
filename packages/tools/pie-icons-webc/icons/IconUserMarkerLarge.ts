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

const componentSelector = 'icon-user-marker-large';

export class IconUserMarkerLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--userMarkerLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userMarkerLarge', '', null, 'IconUserMarkerLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userMarkerLarge', '', this.size, 'IconUserMarkerLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userMarkerLarge"><path d="M16 15.125a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm5.25 8.566.691 1.934H20.07l-.499-1.313a2.204 2.204 0 0 0-2.126-1.312h-2.511a2.205 2.205 0 0 0-2.127 1.313l-.498 1.312h-1.873l.726-1.934A3.972 3.972 0 0 1 14.932 16h2.512a3.972 3.972 0 0 1 3.806 2.441ZM26.5 4.625h-21A2.625 2.625 0 0 0 2.875 7.25v14.875A2.625 2.625 0 0 0 5.5 24.75h6.641L16 28.609l3.859-3.859H26.5a2.625 2.625 0 0 0 2.625-2.625V7.25A2.625 2.625 0 0 0 26.5 4.625Zm.875 17.5A.875.875 0 0 1 26.5 23h-7.359L16 26.141 12.859 23H5.5a.875.875 0 0 1-.875-.875V7.25a.875.875 0 0 1 .875-.875h21a.875.875 0 0 1 .875.875v14.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserMarkerLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserMarkerLarge;
    }
}
