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

const componentSelector = 'icon-receipt';

export class IconReceipt extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--receipt';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--receipt', '', null, 'IconReceipt');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--receipt', '', this.size, 'IconReceipt');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--receipt"><path d="M11.1 2.57a.23.23 0 0 1-.2 0L8 1.26 5.1 2.57a.23.23 0 0 1-.2 0L1.25.92v14.16l3.65-1.65a.23.23 0 0 1 .2 0L8 14.74l2.9-1.31a.23.23 0 0 1 .2 0l3.65 1.65V.92L11.1 2.57Zm2.15 10.19-1.53-.69a1.721 1.721 0 0 0-1.44 0L8 13.1l-2.28-1a1.701 1.701 0 0 0-1.44 0l-1.53.69V3.24l1.53.69a1.72 1.72 0 0 0 1.44 0L8 2.9l2.28 1a1.7 1.7 0 0 0 1.44 0l1.53-.69v9.55Z"></path><path d="M11 5.75H5v1.5h6v-1.5Z"></path><path d="M10 8.75H6v1.5h4v-1.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconReceipt);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconReceipt;
    }
}
