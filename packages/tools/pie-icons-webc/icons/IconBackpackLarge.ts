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

const componentSelector = 'icon-backpack-large';

export class IconBackpackLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--backpackLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--backpackLarge', '', null, 'IconBackpackLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--backpackLarge', '', this.size, 'IconBackpackLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--backpackLarge"><path d="M23.875 7.25h-3.106l-1.374-3.5h-6.79l-1.374 3.5H8.125A2.625 2.625 0 0 0 5.5 9.875v15.75a2.625 2.625 0 0 0 2.625 2.625h15.75a2.625 2.625 0 0 0 2.625-2.625V9.875a2.625 2.625 0 0 0-2.625-2.625ZM13.795 5.5h4.375l.682 1.75h-5.74l.683-1.75ZM24.75 25.625a.875.875 0 0 1-.875.875H8.125a.875.875 0 0 1-.875-.875V9.875A.875.875 0 0 1 8.125 9h15.75a.875.875 0 0 1 .875.875v15.75ZM9.875 10.75h12.25v1.75H12.5c.153.873.111 1.77-.123 2.625a1.27 1.27 0 0 1-2.415-.787 5.33 5.33 0 0 1 1.094-1.838H9.875v-1.75Zm9.363 7a31.01 31.01 0 0 0-.158-1.348.875.875 0 0 0-.744-.743h-.218a.875.875 0 0 0-.7.21l-.105.114a4.55 4.55 0 0 0-.744-.64 1.085 1.085 0 0 0-1.138 0 11.18 11.18 0 0 0-3.5 3.614.874.874 0 0 0 0 .805.875.875 0 0 0 .63.49h.166c.08 1.418.158 2.416.237 2.905a.876.876 0 0 0 .875.735h4.375a.875.875 0 0 0 .875-.726c.079-.498.157-1.505.236-2.913h.158a.874.874 0 0 0 .586-1.313 10.2 10.2 0 0 0-.831-1.19Zm-1.672 2.144v.114a75.165 75.165 0 0 1-.14 2.126h-2.843a51.947 51.947 0 0 1-.14-2.127v-.13a1.417 1.417 0 0 0-.43-.876 9.619 9.619 0 0 1 1.943-1.925c.201.193.464.473.7.744l.683.796a.875.875 0 0 0 .604.306l.052.07c-.238.238-.39.55-.429.884v.018Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBackpackLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBackpackLarge;
    }
}
