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

const componentSelector = 'icon-cash-card';

export class IconCashCard extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--cashCard';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCard', '', null, 'IconCashCard');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCard', '', this.size, 'IconCashCard');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cashCard"><path d="M9.61 11.894a1.076 1.076 0 1 0 0-2.153 1.076 1.076 0 0 0 0 2.153Z"></path><path d="M3.257 8.464h-.752a.105.105 0 0 1-.114-.105V5.952h7.875v.657h1.313V3.765a1.426 1.426 0 0 0-1.418-1.426H2.505a1.426 1.426 0 0 0-1.426 1.426v4.594A1.426 1.426 0 0 0 2.505 9.75h.752V8.464Zm-.875-4.699a.114.114 0 0 1 .123-.14h7.656a.104.104 0 0 1 .1.07.106.106 0 0 1 .005.044v.875H2.391l-.009-.849Z"></path><path d="M15 14.055H4.229V7.589H15v6.466Zm-9.45-1.313h8.137V8.875H5.541l.009 3.867Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCashCard);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCashCard;
    }
}
