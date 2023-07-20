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

const componentSelector = 'icon-social-pinterest-circle-large';

export class IconSocialPinterestCircleLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pinterestCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinterestCircleLarge', '', null, 'IconSocialPinterestCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinterestCircleLarge', '', this.size, 'IconSocialPinterestCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pinterestCircleLarge"><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.344 10.344 0 0 1-3.141-.481 8.646 8.646 0 0 0 1.233-2.538c.22-.761.403-1.531.604-2.292 0-.07.044-.131.079-.245.066.106.142.206.227.297.073.083.152.159.237.228a3.5 3.5 0 0 0 2.8.691 5.407 5.407 0 0 0 3.937-2.625 7.875 7.875 0 0 0 1.199-3.999 6.38 6.38 0 0 0-4.296-6.378 8.26 8.26 0 0 0-3.885-.377 7 7 0 0 0-4.638 2.389 6.431 6.431 0 0 0-.822 7.088 3.63 3.63 0 0 0 1.54 1.6c.245.123.341.08.411-.174.096-.394.21-.788.28-1.19a.57.57 0 0 0-.079-.394 4.707 4.707 0 0 1 .998-6.335 5.25 5.25 0 0 1 4.734-.875 4.131 4.131 0 0 1 2.773 2.284c.366.793.52 1.667.447 2.537a6.264 6.264 0 0 1-.963 3.203 3.055 3.055 0 0 1-2.485 1.461 1.627 1.627 0 0 1-1.706-2.126c.201-.761.437-1.514.647-2.266a4.683 4.683 0 0 0 .236-1.628 1.4 1.4 0 0 0-1.977-1.234 2.133 2.133 0 0 0-1.242 1.374 3.981 3.981 0 0 0 0 2.721c.034.147.034.3 0 .447-.42 1.75-.875 3.587-1.26 5.38a8.698 8.698 0 0 0-.044 2.582A10.5 10.5 0 1 1 16 26.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialPinterestCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialPinterestCircleLarge;
    }
}
