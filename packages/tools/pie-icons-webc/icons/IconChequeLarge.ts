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

const componentSelector = 'icon-cheque-large';

export class IconChequeLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--chequeLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chequeLarge', '', null, 'IconChequeLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chequeLarge', '', this.size, 'IconChequeLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chequeLarge"><path d="m24.75 10.75 1.531-1.531a3.07 3.07 0 0 0 .517-3.623l1.233-1.225-1.277-1.242-1.225 1.233a3.071 3.071 0 0 0-3.623.517L16 10.75H2.875V26.5h26.25V10.75H24.75Zm-7.332 1.12 5.757-5.749a1.321 1.321 0 1 1 1.864 1.864l-5.749 5.757-2.179.307.306-2.179Zm9.957 12.88H4.625V12.5h10.902l-.516 3.614 5.067-.727L23 12.5h4.375v12.25ZM7.25 19.5h10.5v1.75H7.25V19.5Zm14 0h3.5v1.75h-3.5V19.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChequeLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChequeLarge;
    }
}
