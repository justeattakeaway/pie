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

const componentSelector = 'icon-directions-large';

export class IconDirectionsLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--directionsLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--directionsLarge', '', null, 'IconDirectionsLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--directionsLarge', '', this.size, 'IconDirectionsLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--directionsLarge"><path d="M28.451 13.664 20.9 7.25h-6.65V5.5a1.75 1.75 0 0 0-1.75-1.75h-1.75A1.75 1.75 0 0 0 9 5.5v1.75H2.875v14.875H9v5.25h1.75v-5.25h1.75v5.25h1.75v-5.25h6.65l7.499-5.495a1.91 1.91 0 0 0 .726-1.505 1.873 1.873 0 0 0-.674-1.461ZM10.75 5.938a.438.438 0 0 1 .438-.438h.874a.438.438 0 0 1 .438.438V7.25h-1.75V5.937Zm9.45 14.437H4.625V9H20.2l7.175 6.125-7.175 5.25Z"></path><path d="m19.78 14.197-2.861-2.87-1.234 1.243 1.68 1.68H10.75v6.125h1.75V16h4.865l-1.68 1.68 1.234 1.242 2.861-2.87a1.303 1.303 0 0 0 0-1.854Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDirectionsLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDirectionsLarge;
    }
}
