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

const componentSelector = 'icon-key-large';

export class IconKeyLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--keyLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--keyLarge', '', null, 'IconKeyLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--keyLarge', '', this.size, 'IconKeyLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--keyLarge"><path d="M10.75 8.125a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm0 3.5a.874.874 0 1 1 0-1.748.874.874 0 0 1 0 1.748Zm9.082 1.496a.989.989 0 0 1-.166-1.137c.079-.158.149-.315.219-.464a2.704 2.704 0 0 0-.551-3.036L14.582 3.67a2.721 2.721 0 0 0-3.07-.542 17.229 17.229 0 0 0-8.4 8.496 2.713 2.713 0 0 0 .55 3.036L8.414 19.5a2.686 2.686 0 0 0 3.062.543c.219-.105.429-.21.63-.324a.955.955 0 0 1 1.111.157l2.18 2.249 1.863-.297.359.358-.368 2.328.875.919 2.249-.604.551.56-.455 1.837 1.864 1.899h6.79v-6.554l-9.293-9.45Zm7.543 14.254h-4.288l-.665-.683.456-1.837-1.978-1.969-1.697.438.28-1.75-1.61-1.628-1.873.28-1.54-1.601a2.625 2.625 0 0 0-3.168-.473l-.568.28a.918.918 0 0 1-1.068-.192l-4.751-4.769a.988.988 0 0 1-.193-1.094 15.426 15.426 0 0 1 7.534-7.656.963.963 0 0 1 1.094.175l4.751 4.821a.962.962 0 0 1 .201 1.085l-.2.412a2.747 2.747 0 0 0 .533 3.141l8.75 8.899v4.121Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconKeyLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconKeyLarge;
    }
}
