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

const componentSelector = 'icon-social-youtube-circle-filled-large';

export class IconSocialYoutubeCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--youtubeCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircleFilledLarge', '', null, 'IconSocialYoutubeCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircleFilledLarge', '', this.size, 'IconSocialYoutubeCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--youtubeCircleFilledLarge"><path fill-rule="evenodd" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.707 9.174a1.774 1.774 0 0 0-1.237-1.267c-1.092-.299-5.47-.299-5.47-.299s-4.378 0-5.47.3a1.774 1.774 0 0 0-1.237 1.266C9 14.04 9 16.37 9 16.37s0 2.33.293 3.448c.16.616.635 1.1 1.237 1.266 1.092.299 5.47.299 5.47.299s4.378 0 5.47-.3a1.774 1.774 0 0 0 1.237-1.265C23 18.701 23 16.37 23 16.37s0-2.33-.293-3.447Zm-8.138 5.563 3.659-2.116-3.66-2.116v4.232Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialYoutubeCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialYoutubeCircleFilledLarge;
    }
}
