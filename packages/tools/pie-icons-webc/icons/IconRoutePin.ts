import {
    html, LitElement, TemplateResult, css,
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

const componentSelector = 'icon-route-pin';

export class IconRoutePin extends LitElement implements IconProps {
    static styles = css`
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    `;

    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class = 'c-pieIcon c-pieIcon--routePin';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--routePin', '', null, 'IconRoutePin');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--routePin', '', this.size, 'IconRoutePin');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--routePin"><path d="M13.031 2.575a4.646 4.646 0 0 0-6.562 0 4.655 4.655 0 0 0 0 6.571l3.281 3.281 3.281-3.28a4.655 4.655 0 0 0 0-6.572Zm-.927 5.644L9.75 10.573 7.396 8.218a3.325 3.325 0 1 1 4.708 0Zm-1.076-2.442a1.277 1.277 0 1 1-2.555 0 1.277 1.277 0 0 1 2.554 0Zm-6.738 7.7 6.344.053v1.313L4.29 14.79a1.523 1.523 0 0 1-1.295-2.319l1.041-1.75a.21.21 0 0 0 0-.219.21.21 0 0 0-.192-.113H1V9.094h2.826a1.522 1.522 0 0 1 1.313 2.319l-1.042 1.75a.219.219 0 0 0 .193.332v-.018Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconRoutePin);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconRoutePin;
    }
}
