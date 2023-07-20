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

const componentSelector = 'icon-percentage-large';

export class IconPercentageLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--percentageLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--percentageLarge', '', null, 'IconPercentageLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--percentageLarge', '', this.size, 'IconPercentageLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--percentageLarge"><path d="M23 16c-3.001 0-4.375 2.494-4.375 4.813 0 2.318 1.374 4.812 4.375 4.812s4.375-2.494 4.375-4.813C27.375 18.494 26.01 16 23 16Zm0 7.875c-2.555 0-2.625-2.747-2.625-3.063 0-.315.07-3.062 2.625-3.062s2.625 2.747 2.625 3.063c0 .315-.07 3.062-2.625 3.062Z"></path><path d="M22.16 6.375 7.766 25.625h2.188l14.393-19.25H22.16Z"></path><path d="M9 16c3.01 0 4.375-2.494 4.375-4.813 0-2.318-1.365-4.812-4.375-4.812s-4.375 2.494-4.375 4.813C4.625 13.505 5.999 16 9 16Zm0-7.875c2.555 0 2.625 2.748 2.625 3.063 0 .314-.07 3.062-2.625 3.062s-2.625-2.748-2.625-3.063c0-.314.07-3.062 2.625-3.062Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPercentageLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPercentageLarge;
    }
}
