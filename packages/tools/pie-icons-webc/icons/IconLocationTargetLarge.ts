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

const componentSelector = 'icon-location-target-large';

export class IconLocationTargetLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--locationTargetLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationTargetLarge', '', null, 'IconLocationTargetLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationTargetLarge', '', this.size, 'IconLocationTargetLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--locationTargetLarge"><path d="M29.125 15.125h-3.5a9.625 9.625 0 0 0-8.75-8.706V2.875h-1.75v3.544a9.625 9.625 0 0 0-8.706 8.706H2.875v1.75h3.544a9.625 9.625 0 0 0 8.706 8.75v3.5h1.75v-3.5a9.625 9.625 0 0 0 8.75-8.75h3.5v-1.75ZM16 23.875a7.875 7.875 0 1 1 0-15.75 7.875 7.875 0 0 1 0 15.75Zm0-12.25a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75Zm0 7a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLocationTargetLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLocationTargetLarge;
    }
}
