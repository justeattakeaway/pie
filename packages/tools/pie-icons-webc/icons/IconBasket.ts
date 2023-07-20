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

const componentSelector = 'icon-basket';

export class IconBasket extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--basket';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--basket', '', null, 'IconBasket');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--basket', '', this.size, 'IconBasket');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--basket"><path d="M6.031 11.5 5.594 8h1.312l.438 3.5H6.03ZM9.094 8l-.438 3.5H9.97l.437-3.5H9.094ZM15 5.594v1.312h-.752l-.945 5.714a1.522 1.522 0 0 1-1.506 1.286H4.202a1.522 1.522 0 0 1-1.505-1.286l-.945-5.714H1V5.594h3.876L5.918 2.75h1.39L6.25 5.594h3.5L8.691 2.75h1.391l1.042 2.844H15Zm-2.082 1.312H3.082l.874 5.504a.219.219 0 0 0 .21.184h7.595a.219.219 0 0 0 .21-.184l.946-5.504Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBasket);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBasket;
    }
}
