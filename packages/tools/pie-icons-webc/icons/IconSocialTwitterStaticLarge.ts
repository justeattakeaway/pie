import {
    html, LitElement, TemplateResult, css,
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

const componentSelector = 'icon-social-twitter-static-large';

export class IconSocialTwitterStaticLarge extends LitElement implements IconProps {
    static styles = css`
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    `;

    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class = 'c-pieIcon c-pieIcon--twitterStaticLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterStaticLarge', '', null, 'IconSocialTwitterStaticLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterStaticLarge', '', this.size, 'IconSocialTwitterStaticLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--twitterStaticLarge"><path fill="#1D9BF0" d="M26.269 10.614c.015.23.015.461.015.694 0 7.087-5.325 15.26-15.064 15.26v-.003a14.847 14.847 0 0 1-8.116-2.405 10.544 10.544 0 0 0 7.836-2.223c-2.265-.044-4.252-1.54-4.946-3.725a5.21 5.21 0 0 0 2.39-.092c-2.47-.506-4.247-2.704-4.247-5.257v-.068c.736.415 1.56.645 2.403.67-2.326-1.574-3.043-4.71-1.639-7.16a14.963 14.963 0 0 0 10.912 5.603 5.412 5.412 0 0 1 1.532-5.125 5.252 5.252 0 0 1 7.49.233 10.541 10.541 0 0 0 3.363-1.302A5.372 5.372 0 0 1 25.87 8.68c1.05-.125 2.075-.41 3.04-.844a10.835 10.835 0 0 1-2.641 2.778Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialTwitterStaticLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialTwitterStaticLarge;
    }
}
