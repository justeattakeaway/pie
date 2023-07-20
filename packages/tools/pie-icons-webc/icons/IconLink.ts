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

const componentSelector = 'icon-link';

export class IconLink extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--link';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--link', '', null, 'IconLink');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--link', '', this.size, 'IconLink');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--link"><path d="M2.531 8.438c-.01-.861.302-1.695.875-2.337a2.791 2.791 0 0 1 2.074-.945h1.645V3.844H5.48a4.121 4.121 0 0 0-3.036 1.365 4.813 4.813 0 0 0-1.225 3.229 4.445 4.445 0 0 0 4.26 4.593h1.646V11.72H5.48A3.133 3.133 0 0 1 2.53 8.438Z"></path><path d="M10.52 3.844H8.875v1.312h1.645a3.133 3.133 0 0 1 2.949 3.282c.01.86-.302 1.694-.875 2.336a2.792 2.792 0 0 1-2.065.945H8.875v1.312h1.645a4.12 4.12 0 0 0 3.036-1.365 4.813 4.813 0 0 0 1.225-3.229 4.445 4.445 0 0 0-4.261-4.593Z"></path><path d="M5.471 9.094h5.058l.603-1.313H4.867l.604 1.313Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLink);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLink;
    }
}
