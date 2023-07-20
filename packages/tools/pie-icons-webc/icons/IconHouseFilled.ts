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

const componentSelector = 'icon-house-filled';

export class IconHouseFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--houseFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--houseFilled', '', null, 'IconHouseFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--houseFilled', '', this.size, 'IconHouseFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--houseFilled"><g clip-path="url(#prefix__clip0_2290_4013)"><path d="M8.875 2.348a1.75 1.75 0 0 0-1.75.008C4.771 3.905 1.114 7.904 1 8.08l.971.875s.42-.464 1.042-1.111v6.055h10.062V7.86a38.793 38.793 0 0 1 1.033 1.103l.97-.875a47.034 47.034 0 0 0-6.203-5.74Zm-1.75 8.277a.875.875 0 0 1 1.75 0v1.969h-1.75v-1.969Z"></path></g><defs><clipPath id="prefix__clip0_2290_4013"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconHouseFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHouseFilled;
    }
}
