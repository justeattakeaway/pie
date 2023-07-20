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

const componentSelector = 'icon-arrow-down-circle-filled-large';

export class IconArrowDownCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--arrowDownCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowDownCircleFilledLarge', '', null, 'IconArrowDownCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowDownCircleFilledLarge', '', this.size, 'IconArrowDownCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--arrowDownCircleFilledLarge"><path d="M16.875 3.75v15.367l4.165-4.17 1.234 1.235-5.04 5.047a1.749 1.749 0 0 1-2.468 0l-5.04-5.047 1.234-1.235 4.165 4.17V3.75a12.244 12.244 0 0 0-8.239 4.038 12.275 12.275 0 0 0 .608 17.023 12.242 12.242 0 0 0 17.012 0 12.273 12.273 0 0 0 .608-17.023 12.244 12.244 0 0 0-8.239-4.038Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconArrowDownCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconArrowDownCircleFilledLarge;
    }
}
