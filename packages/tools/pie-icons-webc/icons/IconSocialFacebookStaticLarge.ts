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

const componentSelector = 'icon-social-facebook-static-large';

export class IconSocialFacebookStaticLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--facebookStaticLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookStaticLarge', '', null, 'IconSocialFacebookStaticLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookStaticLarge', '', this.size, 'IconSocialFacebookStaticLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--facebookStaticLarge"><path fill="#1778F2" d="M16 3.75a12.25 12.25 0 0 0-1.916 24.351v-8.557h-3.107V16h3.107v-2.695c0-3.071 1.828-4.769 4.628-4.769.918.013 1.833.092 2.74.237v3.018h-1.54a1.748 1.748 0 0 0-1.996 1.908V16h3.395l-.542 3.544h-2.853V28.1A12.25 12.25 0 0 0 16 3.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialFacebookStaticLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialFacebookStaticLarge;
    }
}
