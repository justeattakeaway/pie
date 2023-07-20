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

const componentSelector = 'icon-social-apple-large';

export class IconSocialAppleLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--appleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--appleLarge', '', null, 'IconSocialAppleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--appleLarge', '', this.size, 'IconSocialAppleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--appleLarge"><g clip-path="url(#prefix__clip0_923_536)"><path d="M25.94 21.679v.07c-.044.114-.105.219-.14.332a14.264 14.264 0 0 1-3.159 5.145 3.334 3.334 0 0 1-4.077.569 4.287 4.287 0 0 0-4.332 0 4.052 4.052 0 0 1-2.056.464 3.03 3.03 0 0 1-2.17-1.243A14.963 14.963 0 0 1 5.99 16.604a8.041 8.041 0 0 1 .674-3.168c1.365-3.115 5.11-4.707 7.944-3.045a3.072 3.072 0 0 0 3.054 0 7.476 7.476 0 0 1 1.54-.595 6.58 6.58 0 0 1 3.798.385 4.488 4.488 0 0 1 2.248 1.917c-.34.306-.682.577-.997.874-.37.31-.697.67-.971 1.068a5.425 5.425 0 0 0 .787 6.335 4.27 4.27 0 0 0 1.873 1.304Z"></path><path d="M20.821 3.75a4.655 4.655 0 0 1-.446 2.564 4.942 4.942 0 0 1-3.5 3.01c-1.103.236-1.085.245-.963-.875a5.513 5.513 0 0 1 4.375-4.638c.177-.03.355-.05.534-.061Z"></path></g><defs><clipPath id="prefix__clip0_923_536"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialAppleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialAppleLarge;
    }
}
