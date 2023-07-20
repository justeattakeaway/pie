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

const componentSelector = 'icon-dollar';

export class IconDollar extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--dollar';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--dollar', '', null, 'IconDollar');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--dollar', '', this.size, 'IconDollar');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--dollar"><path d="M8.613 7.309c-1.47-.385-2.625-.735-2.625-1.75 0-1.015 1.05-1.383 2.012-1.383a3.701 3.701 0 0 1 2.695 1.138l.998-1.033A4.428 4.428 0 0 0 8.77 2.794V1.096H7.388v1.698c-1.75.192-2.975 1.19-2.975 2.87 0 1.837 1.575 2.555 3.15 2.975 1.575.42 2.625.682 2.625 1.697 0 1.015-1.05 1.488-2.24 1.488a3.72 3.72 0 0 1-2.923-1.2L4.01 11.72a4.568 4.568 0 0 0 3.22 1.53v1.698h1.418V13.25c1.802-.21 3.114-1.19 3.114-2.975 0-1.785-1.592-2.564-3.15-2.966Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDollar);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDollar;
    }
}
