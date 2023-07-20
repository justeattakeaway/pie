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

const componentSelector = 'icon-check-circle-large';

export class IconCheckCircleLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--checkCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircleLarge', '', null, 'IconCheckCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircleLarge', '', this.size, 'IconCheckCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--checkCircleLarge"><path d="m27.375 11.38-1.339 1.426a10.587 10.587 0 1 1-2.94-4.55l1.2-1.277a12.206 12.206 0 1 0 3.08 4.375v.026Z"></path><path d="M14.941 19.5h-.096l-3.727-4.2-1.313 1.164 3.745 4.217a1.828 1.828 0 0 0 1.33.578 1.802 1.802 0 0 0 1.33-.587l9.03-9.625 1.26-1.33.936-.997-1.295-1.19-.665.717-1.216 1.295-9.319 9.958Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCheckCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCheckCircleLarge;
    }
}
