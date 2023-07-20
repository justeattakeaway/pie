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

const componentSelector = 'icon-social-pinterest-static-large';

export class IconSocialPinterestStaticLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--pinterestStaticLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinterestStaticLarge', '', null, 'IconSocialPinterestStaticLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinterestStaticLarge', '', this.size, 'IconSocialPinterestStaticLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pinterestStaticLarge"><path fill="#E60023" d="M16 3.75C9.235 3.75 3.75 9.235 3.75 16c0 5.19 3.229 9.626 7.786 11.411-.107-.97-.204-2.46.042-3.518.223-.956 1.437-6.089 1.437-6.089s-.367-.734-.367-1.819c0-1.703.988-2.975 2.217-2.975 1.045 0 1.55.785 1.55 1.726 0 1.051-.67 2.622-1.015 4.079-.288 1.219.612 2.213 1.814 2.213 2.178 0 3.851-2.295 3.851-5.61 0-2.932-2.107-4.983-5.117-4.983-3.485 0-5.531 2.614-5.531 5.316 0 1.053.405 2.182.912 2.796.1.121.114.227.084.351-.093.387-.3 1.219-.34 1.39-.053.224-.177.271-.41.163-1.53-.712-2.486-2.949-2.486-4.746 0-3.864 2.808-7.413 8.094-7.413 4.25 0 7.552 3.028 7.552 7.075 0 4.222-2.662 7.62-6.357 7.62-1.241 0-2.408-.645-2.807-1.407 0 0-.615 2.34-.764 2.912-.276 1.064-1.023 2.398-1.522 3.212 1.146.355 2.364.546 3.627.546 6.765 0 12.25-5.485 12.25-12.25S22.765 3.75 16 3.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialPinterestStaticLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialPinterestStaticLarge;
    }
}
