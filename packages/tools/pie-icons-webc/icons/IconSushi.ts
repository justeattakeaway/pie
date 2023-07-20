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

const componentSelector = 'icon-sushi';

export class IconSushi extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--sushi';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sushi', '', null, 'IconSushi');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sushi', '', this.size, 'IconSushi');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--sushi"><g clip-path="url(#prefix__clip0_4_481)"><path d="m1.875 11.412 3.841-1.18-1.295 3.893h1.383L7.256 9.75 15 7.379l-.385-1.26h-.114a3.15 3.15 0 0 0-.586-3.684l-.359-.359a3.272 3.272 0 0 0-3.587-.612L8.76 1.105 6.25 8.7l-4.375 1.339v1.373Zm7.726-8.015.359-.358a1.899 1.899 0 0 1 2.045-.403c.226.093.432.23.606.403l.359.358a1.863 1.863 0 0 1 .551 1.33 1.83 1.83 0 0 1-.551 1.322l-.359.358a1.916 1.916 0 0 1-2.625 0l-.359-.358a1.881 1.881 0 0 1-.026-2.652Zm-1.269 3.16c.1.15.213.292.342.42l.359.358c.138.134.287.257.446.367l-1.706.525.56-1.67Z"></path><path d="m10.695 3.971-.16.161a.84.84 0 0 0-.001 1.188l.16.161a.84.84 0 0 0 1.189 0l.16-.16a.84.84 0 0 0 0-1.189l-.16-.16a.84.84 0 0 0-1.188 0Z"></path></g><defs><clipPath id="prefix__clip0_4_481"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSushi);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSushi;
    }
}
