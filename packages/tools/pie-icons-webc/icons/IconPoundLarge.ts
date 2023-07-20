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

const componentSelector = 'icon-pound-large';

export class IconPoundLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--poundLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--poundLarge', '', null, 'IconPoundLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--poundLarge', '', this.size, 'IconPoundLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--poundLarge"><path d="m19.29 19.281 1.523.517c-.333 1.338-1.4 1.89-2.827 1.89h-6.545v-1.54h1.138v-3.675H11.44v-1.435h1.138v-1.602c0-2.441 1.365-3.911 3.876-3.911a4.121 4.121 0 0 1 3.185 1.286l-1.102 1.12a2.737 2.737 0 0 0-2.083-.875c-1.339 0-2.144.683-2.144 2.302v1.68h3.763v1.434H14.31v3.675h3.631a1.251 1.251 0 0 0 1.348-.866ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPoundLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPoundLarge;
    }
}
