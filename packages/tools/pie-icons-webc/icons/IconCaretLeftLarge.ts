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

const componentSelector = 'icon-caret-left-large';

export class IconCaretLeftLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--caretLeftLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--caretLeftLarge', '', null, 'IconCaretLeftLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--caretLeftLarge', '', this.size, 'IconCaretLeftLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--caretLeftLarge"><path d="M23 5.5a1.689 1.689 0 0 0-.875.271l-14 8.96a1.68 1.68 0 0 0 0 2.844l14 8.671c.262.165.565.253.875.254a1.689 1.689 0 0 0 1.689-1.68V7.18A1.688 1.688 0 0 0 23 5.5Zm-.061 19.189L9.13 16.14 22.94 7.311V24.69Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCaretLeftLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCaretLeftLarge;
    }
}
