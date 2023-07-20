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

const componentSelector = 'icon-social-twitter-circle-filled';

export class IconSocialTwitterCircleFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--twitterCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircleFilled', '', null, 'IconSocialTwitterCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircleFilled', '', this.size, 'IconSocialTwitterCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--twitterCircleFilled"><g clip-path="url(#prefix__clip0_1611_646)"><path d="M8.14 1.411A6.615 6.615 0 1 0 14.755 8 6.624 6.624 0 0 0 8.14 1.411Zm3.202 4.97V6.6a4.7 4.7 0 0 1-7.236 3.955l.394.07a3.307 3.307 0 0 0 2.056-.709 1.636 1.636 0 0 1-1.54-1.19c.102.01.204.01.306 0 .148 0 .295-.017.438-.052a1.663 1.663 0 0 1-1.33-1.549c.23.128.489.2.752.21a1.663 1.663 0 0 1-.516-2.205A4.725 4.725 0 0 0 8.08 6.88a1.75 1.75 0 0 1-.08-.472 1.654 1.654 0 0 1 2.862-1.13c.37-.074.725-.21 1.05-.402-.13.37-.387.68-.726.875.326-.035.645-.12.945-.253a3.169 3.169 0 0 1-.788.883Z"></path></g><defs><clipPath id="prefix__clip0_1611_646"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialTwitterCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialTwitterCircleFilled;
    }
}
