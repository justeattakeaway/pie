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

const componentSelector = 'icon-social-facebook-circle-filled-large';

export class IconSocialFacebookCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--facebookCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircleFilledLarge', '', null, 'IconSocialFacebookCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircleFilledLarge', '', this.size, 'IconSocialFacebookCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--facebookCircleFilledLarge"><path d="M16 3.671a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm3.85 7.403h-1.138a1.294 1.294 0 0 0-1.46 1.426v1.689h2.493l-.402 2.625H17.25v6.282a8.75 8.75 0 0 1-2.817 0V16.77H12.15v-2.625h2.284v-1.96a3.175 3.175 0 0 1 3.403-3.5c.675.01 1.347.068 2.013.175v2.214Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialFacebookCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialFacebookCircleFilledLarge;
    }
}
