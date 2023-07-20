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

const componentSelector = 'icon-components-large';

export class IconComponentsLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--componentsLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--componentsLarge', '', null, 'IconComponentsLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--componentsLarge', '', this.size, 'IconComponentsLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--componentsLarge"><path d="M21.539 9.21 16 3.662 10.453 9.21 16 14.757l5.548-5.547h-.01ZM15.99 6.139l3.072 3.071-3.072 3.071-3.07-3.071 3.07-3.071Z"></path><path d="M22.79 10.453 17.243 16l5.547 5.547L28.338 16l-5.548-5.547ZM19.72 16l3.071-3.071L25.861 16l-3.07 3.071L19.718 16Z"></path><path d="M9.21 10.444 3.663 15.99 9.21 21.54l5.548-5.548-5.548-5.547ZM6.14 15.99 9.21 12.92l3.071 3.071-3.07 3.072-3.072-3.072Z"></path><path d="M10.453 22.781 16 28.33l5.548-5.548L16 17.234l-5.547 5.547ZM16 25.853 12.93 22.78 16 19.71l3.071 3.071-3.07 3.072Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconComponentsLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconComponentsLarge;
    }
}
