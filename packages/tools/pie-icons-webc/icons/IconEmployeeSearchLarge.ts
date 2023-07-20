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

const componentSelector = 'icon-employee-search-large';

export class IconEmployeeSearchLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--employeeSearchLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--employeeSearchLarge', '', null, 'IconEmployeeSearchLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--employeeSearchLarge', '', this.size, 'IconEmployeeSearchLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--employeeSearchLarge"><path d="M14.25 15.125a5.688 5.688 0 1 0-5.687-5.688 5.644 5.644 0 0 0 5.687 5.688Zm0-9.625a3.937 3.937 0 1 1-3.937 3.938A3.946 3.946 0 0 1 14.25 5.5Zm10.063 10.421a5.25 5.25 0 0 0-4.28 8.287L15.93 28.31l1.243 1.234 4.077-4.104a5.252 5.252 0 0 0 8.052-2.662 5.25 5.25 0 0 0-4.99-6.858Zm0 8.75a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-5.6-7.796-4.463 7-3.404-5.25a5.977 5.977 0 0 0-5.25 3.885l-1.382 3.911H2.359l1.575-4.471a7.744 7.744 0 0 1 7.376-5.075h.473l2.467 3.797 2.468-3.797h1.995Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEmployeeSearchLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEmployeeSearchLarge;
    }
}
