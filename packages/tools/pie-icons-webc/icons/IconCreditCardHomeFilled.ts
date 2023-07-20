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

const componentSelector = 'icon-credit-card-home-filled';

export class IconCreditCardHomeFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--creditCardHomeFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeFilled', '', null, 'IconCreditCardHomeFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeFilled', '', this.size, 'IconCreditCardHomeFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--creditCardHomeFilled"><path d="m14.939 5.322-.814 1.042a42.997 42.997 0 0 0-5.862-3.92 1.146 1.146 0 0 0-.543 0 42.989 42.989 0 0 0-5.845 3.92l-.814-1.042a46.042 46.042 0 0 1 6.125-4.068 2.082 2.082 0 0 1 1.637 0 45.72 45.72 0 0 1 6.116 4.068ZM2.75 10.406h10.5v2.844a.875.875 0 0 1-.875.875h-8.75a.875.875 0 0 1-.875-.875v-2.844Zm1.75 1.969h1.75V11.5H4.5v.875Zm7.875-5.25h-8.75A.875.875 0 0 0 2.75 8v1.094h10.5V8a.875.875 0 0 0-.875-.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCreditCardHomeFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCreditCardHomeFilled;
    }
}
