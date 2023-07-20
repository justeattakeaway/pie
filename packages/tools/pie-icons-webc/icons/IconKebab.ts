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

const componentSelector = 'icon-kebab';

export class IconKebab extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--kebab';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--kebab', '', null, 'IconKebab');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--kebab', '', this.size, 'IconKebab');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--kebab"><path d="M13.25 2.531V1.22H2.75V2.53h4.594v1.313H5.97A1.969 1.969 0 0 0 4.01 6.03l.586 5.25a1.96 1.96 0 0 0 1.952 1.75h.796v1.094h1.312v-1.094h.796a1.96 1.96 0 0 0 1.952-1.75l.586-5.25a1.969 1.969 0 0 0-1.96-2.187H8.656V2.53h4.594Zm-3.22 2.625a.656.656 0 0 1 .656.727l-.061.638-1.82-.332v1.338l1.662.298-.175 1.593-1.487-.272v1.33l1.348.245-.053.412a.656.656 0 0 1-.647.586H6.548a.657.657 0 0 1-.648-.586L5.716 9.47l1.479-.42V7.685l-1.628.464-.253-2.266a.656.656 0 0 1 .656-.727h4.06Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconKebab);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconKebab;
    }
}
