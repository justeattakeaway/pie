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

const componentSelector = 'icon-close-circle-filled-large';

export class IconCloseCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--closeCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--closeCircleFilledLarge', '', null, 'IconCloseCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--closeCircleFilledLarge', '', this.size, 'IconCloseCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--closeCircleFilledLarge"><path d="M16.25 4a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm4.996 16.004-1.242 1.242-3.754-3.762-3.754 3.762-1.242-1.242 3.762-3.754-3.762-3.754 1.242-1.242 3.754 3.762 3.754-3.762 1.242 1.242-3.762 3.754 3.762 3.754Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCloseCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCloseCircleFilledLarge;
    }
}
