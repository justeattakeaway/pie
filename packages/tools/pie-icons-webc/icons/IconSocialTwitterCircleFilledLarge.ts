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

const componentSelector = 'icon-social-twitter-circle-filled-large';

export class IconSocialTwitterCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--twitterCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircleFilledLarge', '', null, 'IconSocialTwitterCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircleFilledLarge', '', this.size, 'IconSocialTwitterCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--twitterCircleFilledLarge"><path d="M16 3.671a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.125 10.01v.377a8.4 8.4 0 0 1-12.889 7.078 5.888 5.888 0 0 0 4.366-1.225 2.95 2.95 0 0 1-2.756-2.047c.182.035.367.053.552.052a2.84 2.84 0 0 0 .778-.105 2.957 2.957 0 0 1-2.362-2.896c.408.226.864.352 1.33.368a2.957 2.957 0 0 1-.875-3.947 8.347 8.347 0 0 0 6.125 3.089 2.841 2.841 0 0 1-.079-.674 2.949 2.949 0 0 1 2.879-3.001 2.984 2.984 0 0 1 2.161.928 5.782 5.782 0 0 0 1.872-.718 2.984 2.984 0 0 1-1.294 1.636 5.88 5.88 0 0 0 1.697-.463 6.3 6.3 0 0 1-1.505 1.548Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialTwitterCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialTwitterCircleFilledLarge;
    }
}
