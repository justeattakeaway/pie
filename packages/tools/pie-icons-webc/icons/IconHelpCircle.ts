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

const componentSelector = 'icon-help-circle';

export class IconHelpCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--helpCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--helpCircle', '', null, 'IconHelpCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--helpCircle', '', this.size, 'IconHelpCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--helpCircle"><path d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm0 12.25A5.469 5.469 0 1 1 8 2.53a5.469 5.469 0 0 1 0 10.938Zm2.047-7.219a2.048 2.048 0 0 1-1.6 1.908l-.088.717h-.875l-.096-1.426c.822-.096 1.434-.49 1.434-1.138a.761.761 0 0 0-.874-.744 1.26 1.26 0 0 0-.876.316L6.32 5.12A2.24 2.24 0 0 1 8 4.5a1.811 1.811 0 0 1 2.047 1.75ZM8.77 10.625a.77.77 0 1 1-.77-.77.779.779 0 0 1 .77.77Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconHelpCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHelpCircle;
    }
}
