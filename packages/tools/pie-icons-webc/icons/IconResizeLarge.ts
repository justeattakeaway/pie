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

const componentSelector = 'icon-resize-large';

export class IconResizeLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--resizeLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--resizeLarge', '', null, 'IconResizeLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--resizeLarge', '', this.size, 'IconResizeLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--resizeLarge"><path d="M22.726 2.243V1L1 22.735h1.243L22.726 2.243Z"></path><path d="M2.243 22.735h1.233l19.25-19.259V2.243L2.243 22.735Z"></path><path d="M14.099 22.735h1.233l7.394-7.402v-1.234L14.1 22.735Z"></path><path d="m14.099 22.735 8.627-8.636v-1.234l-9.861 9.87h1.234Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconResizeLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconResizeLarge;
    }
}
