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

const componentSelector = 'icon-play-circle-filled';

export class IconPlayCircleFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--playCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--playCircleFilled', '', null, 'IconPlayCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--playCircleFilled', '', this.size, 'IconPlayCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--playCircleFilled"><path d="M7.011 9.164 9.557 8 7.011 6.836v2.328Z"></path><path d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm3.141 7.498L6.82 10.695a.744.744 0 0 1-.333.079.726.726 0 0 1-.42-.149.78.78 0 0 1-.367-.656V6.014a.779.779 0 0 1 .367-.639.77.77 0 0 1 .753-.053L11.14 7.3a.788.788 0 0 1 0 1.435v-.018Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPlayCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPlayCircleFilled;
    }
}
