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

const componentSelector = 'icon-bug';

export class IconBug extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--bug';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bug', '', null, 'IconBug');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bug', '', this.size, 'IconBug');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bug"><path d="m12.156 5.83 1.969-1.243V3.03L11.5 4.719h-.245a3.273 3.273 0 0 0-6.423 0h-.288L1.875 3.03v1.557L3.844 5.83v1.514H1v1.312h2.844v1.514l-1.969 1.242v1.558l2.109-1.339a4.139 4.139 0 0 0 8.032 0l2.109 1.339v-1.558l-1.969-1.242V8.656H15V7.344h-2.844V5.83ZM8 3.406A1.96 1.96 0 0 1 9.846 4.72H6.154A1.96 1.96 0 0 1 8 3.406Zm2.844 7.219a2.844 2.844 0 0 1-5.688 0V6.031h5.688v4.594Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBug);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBug;
    }
}
