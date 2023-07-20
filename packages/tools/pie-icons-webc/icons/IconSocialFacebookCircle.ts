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

const componentSelector = 'icon-social-facebook-circle';

export class IconSocialFacebookCircle extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--facebookCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircle', '', null, 'IconSocialFacebookCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircle', '', this.size, 'IconSocialFacebookCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--facebookCircle"><g clip-path="url(#prefix__clip0_889_539)"><path d="M8 1.175A6.781 6.781 0 1 0 14.782 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.469 5.469 0 1 1 8 2.487a5.469 5.469 0 0 1 0 10.938Z"></path><path d="M7.213 6.145v.98H6.058v1.313h1.155v3.167c.234.043.47.063.709.061a3.81 3.81 0 0 0 .708-.061v-3.15h1.06l.2-1.33H8.63V6.25a.656.656 0 0 1 .744-.717h.569V4.5a7 7 0 0 0-1.015-.087 1.601 1.601 0 0 0-1.715 1.732Z"></path></g><defs><clipPath id="prefix__clip0_889_539"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialFacebookCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialFacebookCircle;
    }
}
