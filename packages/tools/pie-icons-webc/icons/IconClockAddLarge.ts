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

const componentSelector = 'icon-clock-add-large';

export class IconClockAddLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--clockAddLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--clockAddLarge', '', null, 'IconClockAddLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--clockAddLarge', '', this.size, 'IconClockAddLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--clockAddLarge"><path d="m20.795 20.253-5.67-3.404V9h1.75v6.851l4.83 2.896-.91 1.506Z"></path><path d="M16 3.75A12.25 12.25 0 0 0 4.266 19.5h1.847A10.325 10.325 0 0 1 5.5 16 10.5 10.5 0 1 1 16 26.5a10.299 10.299 0 0 1-4.375-.971v1.898A12.25 12.25 0 1 0 16 3.75Z"></path><path d="M10.094 21.049v-3.736h-1.75v3.718H4.625v1.75l3.719-.017V26.5h1.75v-3.719h3.719v-1.75l-3.72.018Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconClockAddLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconClockAddLarge;
    }
}
