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

const componentSelector = 'icon-flag-spain';

export class IconFlagSpain extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--spain';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--spain', '', null, 'IconFlagSpain');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--spain', '', this.size, 'IconFlagSpain');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--spain"><path fill="#FFDA44" d="M1 8c0 .856.153 1.677.438 2.434l6.562.61 6.562-.61a6.99 6.99 0 0 0 0-4.868L8 4.956l-6.563.61A6.99 6.99 0 0 0 1 8Z"></path><path fill="#D80027" d="M14.562 5.566A7.001 7.001 0 0 0 4.003 2.254a7.002 7.002 0 0 0-2.566 3.312h13.125ZM1.438 10.434A7.002 7.002 0 0 0 8 15a6.999 6.999 0 0 0 6.562-4.566H1.438Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFlagSpain);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFlagSpain;
    }
}
