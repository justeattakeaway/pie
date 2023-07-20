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

const componentSelector = 'icon-social-twitter-circle-large';

export class IconSocialTwitterCircleLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--twitterCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircleLarge', '', null, 'IconSocialTwitterCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircleLarge', '', this.size, 'IconSocialTwitterCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--twitterCircleLarge"><path d="M16.984 21.835a8.34 8.34 0 0 1-3.224.622l-.07-.052a8.365 8.365 0 0 1-4.532-1.321 5.889 5.889 0 0 0 4.375-1.225 2.949 2.949 0 0 1-2.756-2.048c.181.035.366.053.55.053.264.001.526-.034.78-.105a2.957 2.957 0 0 1-2.363-2.896c.408.225.864.351 1.33.367a2.958 2.958 0 0 1-.875-3.946 8.347 8.347 0 0 0 6.125 3.088 2.949 2.949 0 0 1 4.053-3.374c.373.163.709.4.987.697a5.784 5.784 0 0 0 1.872-.718 2.984 2.984 0 0 1-1.294 1.637 5.748 5.748 0 0 0 1.688-.464 6.124 6.124 0 0 1-1.47 1.531v.377a8.337 8.337 0 0 1-5.176 7.777Z"></path><path fill-rule="evenodd" d="M9.194 26.186a12.25 12.25 0 1 0 13.612-20.37 12.25 12.25 0 0 0-13.612 20.37Zm.972-18.916a10.5 10.5 0 1 1 11.667 17.46A10.5 10.5 0 0 1 10.167 7.27Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialTwitterCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialTwitterCircleLarge;
    }
}
