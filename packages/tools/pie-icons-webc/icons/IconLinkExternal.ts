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

const componentSelector = 'icon-link-external';

export class IconLinkExternal extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--linkExternal';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--linkExternal', '', null, 'IconLinkExternal');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--linkExternal', '', this.size, 'IconLinkExternal');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--linkExternal"><path d="M13.25 3.564 8.21 8.63l-.928-.928 5.093-5.066H9.662V1.324h3.833a1.093 1.093 0 0 1 1.067 1.093V6.25H13.25V3.564Z"></path><path d="M11.302 12.831c.343-.34.537-.804.54-1.287V7.598h1.312v3.946a3.141 3.141 0 0 1-3.142 3.132h-5.46a3.141 3.141 0 0 1-3.14-3.132V6.075a3.132 3.132 0 0 1 3.14-3.132h3.79v1.312h-3.79a1.829 1.829 0 0 0-1.802 1.82v5.469a1.829 1.829 0 0 0 1.802 1.82h5.46c.484 0 .948-.192 1.29-.533Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLinkExternal);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLinkExternal;
    }
}
