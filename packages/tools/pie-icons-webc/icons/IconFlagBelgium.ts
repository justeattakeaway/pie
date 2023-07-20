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

const componentSelector = 'icon-flag-belgium';

export class IconFlagBelgium extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--belgium';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--belgium', '', null, 'IconFlagBelgium');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--belgium', '', this.size, 'IconFlagBelgium');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--belgium"><path fill="#FFDA44" d="M10.433 1.438a6.986 6.986 0 0 0-4.867 0L4.956 8l.61 6.562a6.984 6.984 0 0 0 4.867 0L11.043 8l-.61-6.562Z"></path><path fill="#D80027" d="M15 8a7 7 0 0 0-4.567-6.562v13.124A7.001 7.001 0 0 0 15 8Z"></path><path fill="#333" d="M1 8a7 7 0 0 0 4.566 6.562V1.438A6.999 6.999 0 0 0 1 8Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFlagBelgium);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFlagBelgium;
    }
}
