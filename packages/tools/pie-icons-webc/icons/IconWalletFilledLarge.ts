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

const componentSelector = 'icon-wallet-filled-large';

export class IconWalletFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--walletFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--walletFilledLarge', '', null, 'IconWalletFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--walletFilledLarge', '', this.size, 'IconWalletFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--walletFilledLarge"><path d="m21.04 7.005-.787-1.899a2.626 2.626 0 0 0-3.43-1.426L8.808 7.005H21.04Z"></path><path d="M25.625 23.446h-6.562a.718.718 0 0 1-.718-.717v-9.021a.718.718 0 0 1 .718-.71h7.525v-1.67a2.625 2.625 0 0 0-.254-1.112 2.625 2.625 0 0 0-2.459-1.627H5.5c-.558.003-1.1.184-1.549.516a3.176 3.176 0 0 0-.428.411l-.158.21-.07.088c-.086.126-.16.261-.219.402a2.625 2.625 0 0 0-.253 1.112v13.886A2.678 2.678 0 0 0 5.5 27.89h18.375a2.677 2.677 0 0 0 2.678-2.677v-1.75h-.928v-.018Z"></path><path d="M20.095 14.749v6.947h9.03V14.75h-9.03Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconWalletFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconWalletFilledLarge;
    }
}
