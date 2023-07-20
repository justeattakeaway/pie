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

const componentSelector = 'icon-car';

export class IconCar extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--car';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--car', '', null, 'IconCar');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--car', '', this.size, 'IconCar');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--car"><path d="M6 9H4.5v1H6V9Z"></path><path d="M11.5 9H10v1h1.5V9Z"></path><path fill-rule="evenodd" d="M14.895 6.906h-1.4l.28.648c.088.207.132.43.131.656v5.04h-1.312v-1.479a27.513 27.513 0 0 1-9.188 0v1.479H2.094V8.21a1.662 1.662 0 0 1 .131-.656l.28-.648h-1.4l.665-1.312h1.225l.499-1.969A1.435 1.435 0 0 1 4.5 2.575c2.29-.634 4.71-.634 7 0a1.435 1.435 0 0 1 1.006 1.05l.499 1.969h1.225l.665 1.312ZM4.85 3.835a.21.21 0 0 0-.088.131l-.56 2.162c2.51.446 5.078.446 7.587 0l-.551-2.162a.21.21 0 0 0-.088-.131 11.848 11.848 0 0 0-6.3 0Zm7.787 6.597v-.595l-.07-1.627a.359.359 0 0 0 0-.14l-.297-.7A22.084 22.084 0 0 1 8 7.781c-1.427 0-2.852-.137-4.253-.411l-.297.7a.359.359 0 0 0 0 .14v2.222h.079c2.99.525 6.048.525 9.039 0h.07Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCar);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCar;
    }
}
