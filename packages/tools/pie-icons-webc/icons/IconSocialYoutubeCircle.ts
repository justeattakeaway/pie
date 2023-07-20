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

const componentSelector = 'icon-social-youtube-circle';

export class IconSocialYoutubeCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--youtubeCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircle', '', null, 'IconSocialYoutubeCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircle', '', this.size, 'IconSocialYoutubeCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--youtubeCircle"><g clip-path="url(#prefix__clip0_889_625)"><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.469 5.469 0 1 1 8 2.487a5.469 5.469 0 0 1 0 10.938Z"></path><path fill-rule="evenodd" d="M10.344 6.128a.76.76 0 0 1 .53.543C11 7.15 11 8.148 11 8.148s0 1-.125 1.478a.76.76 0 0 1-.53.543c-.469.128-2.345.128-2.345.128s-1.876 0-2.344-.128a.76.76 0 0 1-.53-.543C5 9.147 5 8.148 5 8.148s0-.998.125-1.477a.76.76 0 0 1 .53-.543C6.125 6 8 6 8 6s1.876 0 2.344.128Zm-1.39 2.174-1.568.907V7.395l1.569.907Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_889_625"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialYoutubeCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialYoutubeCircle;
    }
}
