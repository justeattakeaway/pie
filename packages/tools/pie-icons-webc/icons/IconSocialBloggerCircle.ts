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

const componentSelector = 'icon-social-blogger-circle';

export class IconSocialBloggerCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--bloggerCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bloggerCircle', '', null, 'IconSocialBloggerCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bloggerCircle', '', this.size, 'IconSocialBloggerCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bloggerCircle"><g clip-path="url(#prefix__clip0_3633_3283)"><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.468 5.468 0 1 1 8 2.488a5.468 5.468 0 0 1 0 10.937Z"></path><path d="M10.84 7.383a.364.364 0 0 0-.23-.079h-.336a.39.39 0 0 1-.398-.379c0-.17-.022-.338-.066-.502a1.942 1.942 0 0 0-.698-1.026A1.957 1.957 0 0 0 7.934 5h-.987a1.952 1.952 0 0 0-1.536.749A1.937 1.937 0 0 0 5 6.929v2.146c0 .148.016.296.049.44a1.944 1.944 0 0 0 1.177 1.344c.23.093.477.141.725.141h2.102c.169 0 .336-.021.5-.062A1.937 1.937 0 0 0 11 9.061V7.688a.379.379 0 0 0-.16-.304Zm-4.017-.801h1.173a.373.373 0 0 1 .362.29.373.373 0 0 1-.34.44H6.81a.372.372 0 0 1-.291-.36.369.369 0 0 1 .29-.362l.014-.008Zm2.34 2.872H6.913a.355.355 0 0 1-.365-.298.35.35 0 0 1 .285-.398.382.382 0 0 1 .102 0H9.08a.369.369 0 0 1 .12 0 .354.354 0 0 1 .258.357.352.352 0 0 1-.294.33v.009Z"></path></g><defs><clipPath id="prefix__clip0_3633_3283"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialBloggerCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialBloggerCircle;
    }
}
