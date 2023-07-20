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

const componentSelector = 'icon-user-circle-large';

export class IconUserCircleLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--userCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userCircleLarge', '', null, 'IconUserCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userCircleLarge', '', this.size, 'IconUserCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userCircleLarge"><path d="M16 16.875a4.375 4.375 0 1 0 0-8.75 4.375 4.375 0 0 0 0 8.75Zm0-7a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm0-6.125a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 1.75A10.5 10.5 0 0 1 26.5 16a10.404 10.404 0 0 1-2.004 6.125 6.878 6.878 0 0 0-6.055-3.5H13.56a6.92 6.92 0 0 0-6.064 3.5A10.5 10.5 0 0 1 16 5.5ZM8.755 23.586a5.128 5.128 0 0 1 4.804-3.211h4.882a5.119 5.119 0 0 1 4.804 3.211 10.5 10.5 0 0 1-14.49 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserCircleLarge;
    }
}
