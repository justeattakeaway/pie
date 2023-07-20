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

const componentSelector = 'icon-social-twitter-circle';

export class IconSocialTwitterCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--twitterCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircle', '', null, 'IconSocialTwitterCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircle', '', this.size, 'IconSocialTwitterCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--twitterCircle"><g clip-path="url(#prefix__clip0_889_616)"><path d="M11.22 5.786c.339-.195.596-.506.726-.875-.325.192-.68.328-1.05.403a1.654 1.654 0 0 0-2.852 1.47 4.725 4.725 0 0 1-3.413-1.75 1.662 1.662 0 0 0 .516 2.205 1.698 1.698 0 0 1-.752-.21v.096A1.662 1.662 0 0 0 5.76 8.7c-.143.035-.29.053-.438.052a1.75 1.75 0 0 1-.306 0A1.636 1.636 0 0 0 6.556 9.9a3.308 3.308 0 0 1-2.056.726h-.394A4.699 4.699 0 0 0 11.342 6.6v-.219c.328-.236.607-.533.823-.875a3.15 3.15 0 0 1-.945.28Z"></path><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.468 5.468 0 1 1 8 2.488a5.468 5.468 0 0 1 0 10.937Z"></path></g><defs><clipPath id="prefix__clip0_889_616"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialTwitterCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialTwitterCircle;
    }
}
