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

const componentSelector = 'icon-play-circle-large';

export class IconPlayCircleLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--playCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--playCircleLarge', '', null, 'IconPlayCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--playCircleLarge', '', this.size, 'IconPlayCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--playCircleLarge"><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Z"></path><path d="m21.425 14.766-7.516-3.928a1.417 1.417 0 0 0-1.462-.088 1.46 1.46 0 0 0-.778 1.304v7.875a1.46 1.46 0 0 0 1.444 1.487c.274 0 .542-.083.77-.236l7.56-3.964A1.462 1.462 0 0 0 22.124 16a1.479 1.479 0 0 0-.7-1.234Zm-8.05 4.734v-7l6.659 3.5-6.659 3.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPlayCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPlayCircleLarge;
    }
}
