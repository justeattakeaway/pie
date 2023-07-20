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

const componentSelector = 'icon-wallet-filled';

export class IconWalletFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--walletFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--walletFilled', '', null, 'IconWalletFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--walletFilled', '', this.size, 'IconWalletFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--walletFilled"><path d="m9.75 3.065-.263-.735a1.531 1.531 0 0 0-1.995-.831L3.73 3.065h6.02Z"></path><path d="M10.397 11.325a.394.394 0 0 1-.394-.394v-3.15c.001-.075.025-.149.07-.21a.385.385 0 0 1 .298-.184h3.115V5.91a1.531 1.531 0 0 0-1.531-1.532h-8.97a1.549 1.549 0 0 0-.664.123 1.496 1.496 0 0 0-.761.875c-.071.169-.107.35-.105.534v7a1.54 1.54 0 0 0 1.53 1.531h8.97a1.54 1.54 0 0 0 1.53-1.531v-1.584h-3.088Z"></path><path d="M11.316 8.7v1.304h3.019V8.7h-3.02Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconWalletFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconWalletFilled;
    }
}
