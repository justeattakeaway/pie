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

const componentSelector = 'icon-check-circle-filled-large';

export class IconCheckCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--checkCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircleFilledLarge', '', null, 'IconCheckCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircleFilledLarge', '', this.size, 'IconCheckCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--checkCircleFilledLarge"><path d="M26.5 9.718 16.22 20.664a1.802 1.802 0 0 1-2.055.435 1.828 1.828 0 0 1-.605-.427l-3.754-4.217 1.313-1.164 3.727 4.209h.096l10.5-11.226A12.25 12.25 0 1 0 28.252 16a12.092 12.092 0 0 0-1.75-6.282Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCheckCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCheckCircleFilledLarge;
    }
}
