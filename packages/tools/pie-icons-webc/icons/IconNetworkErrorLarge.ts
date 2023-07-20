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

const componentSelector = 'icon-network-error-large';

export class IconNetworkErrorLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--networkErrorLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--networkErrorLarge', '', null, 'IconNetworkErrorLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--networkErrorLarge', '', this.size, 'IconNetworkErrorLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--networkErrorLarge"><path d="M7 25h4.8V14.5H7V25Zm1.5-9h1.8v7.5H8.5V16Z"></path><path d="M25 7h-4.8v14.543l-1.8-3V10.75h-4.65l-3.623-6H8.372l5.25 8.707V25h4.8v-3.54l1.8 3V25h.278l1.35 2.25h1.755L22.255 25H25V7Zm-9.9 5.25h1.8v3.795l-1.8-3v-.795Zm1.8 11.25h-1.8v-7.545l1.8 3V23.5Zm6.6 0h-1.8v-15h1.8v15Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconNetworkErrorLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconNetworkErrorLarge;
    }
}
