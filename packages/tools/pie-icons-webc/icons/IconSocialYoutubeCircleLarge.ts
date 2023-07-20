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

const componentSelector = 'icon-social-youtube-circle-large';

export class IconSocialYoutubeCircleLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--youtubeCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircleLarge', '', null, 'IconSocialYoutubeCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircleLarge', '', this.size, 'IconSocialYoutubeCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--youtubeCircleLarge"><path fill-rule="evenodd" d="M9.194 5.814a12.25 12.25 0 1 1 13.612 20.372A12.25 12.25 0 0 1 9.194 5.814Zm.972 18.916A10.5 10.5 0 1 0 21.834 7.27a10.5 10.5 0 0 0-11.666 17.46Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M21.47 11.3c.602.164 1.077.65 1.238 1.266.292 1.116.292 3.447.292 3.447s0 2.33-.293 3.447a1.774 1.774 0 0 1-1.237 1.267c-1.092.299-5.47.299-5.47.299s-4.378 0-5.47-.3a1.774 1.774 0 0 1-1.237-1.266C9 18.343 9 16.013 9 16.013s0-2.33.293-3.447a1.774 1.774 0 0 1 1.237-1.267C11.622 11 16 11 16 11s4.378 0 5.47.3Zm-3.242 5.071-3.66 2.116v-4.232l3.66 2.116Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialYoutubeCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialYoutubeCircleLarge;
    }
}
