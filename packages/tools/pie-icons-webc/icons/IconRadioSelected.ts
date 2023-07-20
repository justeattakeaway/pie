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

const componentSelector = 'icon-radio-selected';

export class IconRadioSelected extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--radioSelected';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--radioSelected', '', null, 'IconRadioSelected');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--radioSelected', '', this.size, 'IconRadioSelected');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--radioSelected"><path d="M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781Zm0 12.25A5.47 5.47 0 0 1 2.531 8 5.47 5.47 0 0 1 8 2.531 5.47 5.47 0 0 1 13.469 8 5.47 5.47 0 0 1 8 13.469ZM10.625 8A2.621 2.621 0 0 1 8 10.625 2.621 2.621 0 0 1 5.375 8 2.621 2.621 0 0 1 8 5.375 2.621 2.621 0 0 1 10.625 8Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconRadioSelected);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconRadioSelected;
    }
}
