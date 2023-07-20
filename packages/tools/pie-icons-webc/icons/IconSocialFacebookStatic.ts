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

const componentSelector = 'icon-social-facebook-static';

export class IconSocialFacebookStatic extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--facebookStatic';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookStatic', '', null, 'IconSocialFacebookStatic');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookStatic', '', this.size, 'IconSocialFacebookStatic');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--facebookStatic"><g clip-path="url(#prefix__clip0_1595_1545)"><path fill="#1778F2" d="M8 1.455A6.545 6.545 0 0 0 6.96 14.466V9.89H5.296V8H6.96V6.556A2.31 2.31 0 0 1 9.435 4.01c.49.007.978.051 1.461.131v1.61h-.822a.945.945 0 0 0-1.068 1.024V8h1.812l-.289 1.89H9.006v4.576A6.545 6.545 0 0 0 8 1.455Z"></path></g><defs><clipPath id="prefix__clip0_1595_1545"><rect width="14" height="14" fill="#fff" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialFacebookStatic);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialFacebookStatic;
    }
}
