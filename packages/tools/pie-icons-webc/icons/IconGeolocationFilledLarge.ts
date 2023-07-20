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

const componentSelector = 'icon-geolocation-filled-large';

export class IconGeolocationFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--geolocationFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--geolocationFilledLarge', '', null, 'IconGeolocationFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--geolocationFilledLarge', '', this.size, 'IconGeolocationFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--geolocationFilledLarge"><path d="M6.156 12.973v2.047l3.404.875a9.012 9.012 0 0 1 6.571 6.571l.875 3.404h2.048l6.405-19.329-19.303 6.431Z"></path><path d="M19.027 25.844H16.98l-.875-3.404a9.012 9.012 0 0 0-6.571-6.571l-3.404-.875v-2.021L25.459 6.54l-6.432 19.303Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGeolocationFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGeolocationFilledLarge;
    }
}
