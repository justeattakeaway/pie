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

const componentSelector = 'icon-user-large';

export class IconUserLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--userLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userLarge', '', null, 'IconUserLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userLarge', '', this.size, 'IconUserLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userLarge"><path d="M23.823 22.501a6.011 6.011 0 0 0-5.723-3.876H13.91a6.029 6.029 0 0 0-5.731 3.894l-1.182 3.316h1.83l.98-2.756a4.296 4.296 0 0 1 4.103-2.704H18.1a4.305 4.305 0 0 1 4.104 2.747l.971 2.757h1.838l-1.19-3.378Z"></path><path d="M14.994 16.656a4.437 4.437 0 0 0 5.32-5.329 4.426 4.426 0 0 0-7.442-2.11 4.428 4.428 0 0 0 2.122 7.44Zm.481-7a2.704 2.704 0 1 1-2.1 2.153 2.704 2.704 0 0 1 2.1-2.118v-.035Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserLarge;
    }
}
