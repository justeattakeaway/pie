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

const componentSelector = 'icon-foundations-large';

export class IconFoundationsLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--foundationsLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--foundationsLarge', '', null, 'IconFoundationsLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--foundationsLarge', '', this.size, 'IconFoundationsLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--foundationsLarge"><path d="M4.625 27.375h10.509V16.866H4.625v10.509Zm1.75-8.759h7.009v7.009H6.375v-7.009Z"></path><path d="M16.866 16.892v10.51h10.509v-10.51H16.866Zm8.759 8.76h-7.009v-7.01h7.009v7.01Z"></path><path d="M10.75 4.625v10.509h10.509V4.625H10.75Zm1.75 8.759V6.375h7.009v7.009H12.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFoundationsLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFoundationsLarge;
    }
}
