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

const componentSelector = 'icon-wallet';

export class IconWallet extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--wallet';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--wallet', '', null, 'IconWallet');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--wallet', '', this.size, 'IconWallet');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--wallet"><g clip-path="url(#prefix__clip0_4814_3596)"><path fill-rule="evenodd" d="M8 2.75a.131.131 0 0 1 .079 0h.087a.201.201 0 0 1 .114.114l.096.227h1.418l-.298-.726a1.549 1.549 0 0 0-.875-.831 1.514 1.514 0 0 0-1.172 0l-3.693 1.54h3.43L8 2.75Zm4.857 8.584H12.2v1.584a.219.219 0 0 1-.218.218h-8.97a.219.219 0 0 1-.218-.218v-7a.219.219 0 0 1 .219-.22h8.969a.219.219 0 0 1 .218.22v1.478h1.313V5.918a1.531 1.531 0 0 0-1.531-1.532h-8.97a1.531 1.531 0 0 0-1.426.989c-.065.17-.1.351-.105.534v7a1.531 1.531 0 0 0 1.532 1.54h8.969a1.53 1.53 0 0 0 1.53-1.531v-1.584h-.655Zm.612-2.625h.901v1.312h-3.036V8.71H13.469Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_4814_3596"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconWallet);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconWallet;
    }
}
