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

const componentSelector = 'icon-social-youtube-circle-filled';

export class IconSocialYoutubeCircleFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--youtubeCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircleFilled', '', null, 'IconSocialYoutubeCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircleFilled', '', this.size, 'IconSocialYoutubeCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--youtubeCircleFilled"><g clip-path="url(#prefix__clip0_1611_662)"><path fill-rule="evenodd" d="M4.237 2.315A6.781 6.781 0 0 1 8 1.175 6.79 6.79 0 0 1 14.78 8 6.781 6.781 0 1 1 4.237 2.315Zm6.638 4.356a.76.76 0 0 0-.53-.543C9.875 6 8 6 8 6s-1.876 0-2.344.128a.76.76 0 0 0-.53.543C5 7.15 5 8.148 5 8.148s0 1 .125 1.478a.76.76 0 0 0 .53.543c.469.128 2.345.128 2.345.128s1.876 0 2.344-.128a.76.76 0 0 0 .53-.543C11 9.147 11 8.148 11 8.148s0-.998-.125-1.477ZM7.386 9.209l1.569-.907-1.569-.907V9.21Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_1611_662"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialYoutubeCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialYoutubeCircleFilled;
    }
}
