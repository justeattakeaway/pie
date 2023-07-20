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

const componentSelector = 'icon-high-contrast';

export class IconHighContrast extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--highContrast';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--highContrast', '', null, 'IconHighContrast');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--highContrast', '', this.size, 'IconHighContrast');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--highContrast"><g clip-path="url(#prefix__clip0_3104_5201)"><path d="M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781Zm0 12.25A5.476 5.476 0 0 1 2.531 8c0-3.01 2.45-5.478 5.469-5.478a5.476 5.476 0 0 1 5.469 5.47A5.482 5.482 0 0 1 8 13.46v.009Z"></path><path d="M3.844 8A4.16 4.16 0 0 0 8 12.156V3.835a4.16 4.16 0 0 0-4.156 4.156V8Z"></path></g><defs><clipPath id="prefix__clip0_3104_5201"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconHighContrast);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHighContrast;
    }
}
