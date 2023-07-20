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

const componentSelector = 'icon-chevron-double-left-large';

export class IconChevronDoubleLeftLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--chevronDoubleLeftLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleLeftLarge', '', null, 'IconChevronDoubleLeftLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleLeftLarge', '', this.size, 'IconChevronDoubleLeftLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chevronDoubleLeftLarge"><path d="M18.021 5.876 7.54 16a.131.131 0 0 0 0 .096l10.5 10.063-1.225 1.216L6.375 17.33a1.908 1.908 0 0 1 0-2.625l10.448-10.08 1.198 1.251Z"></path><path d="M26.194 5.876 15.703 16a.131.131 0 0 0 0 .096l10.5 10.063-1.226 1.216-10.5-10.063a1.908 1.908 0 0 1 0-2.625L24.995 4.626l1.199 1.251Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChevronDoubleLeftLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChevronDoubleLeftLarge;
    }
}
