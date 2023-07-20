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

const componentSelector = 'icon-social-linkedin-static';

export class IconSocialLinkedinStatic extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--linkedinStatic';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--linkedinStatic', '', null, 'IconSocialLinkedinStatic');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--linkedinStatic', '', this.size, 'IconSocialLinkedinStatic');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--linkedinStatic"><path fill="#069" d="M2 2.86A.87.87 0 0 1 2.881 2h10.162a.87.87 0 0 1 .881.86v10.28a.87.87 0 0 1-.88.86H2.88A.87.87 0 0 1 2 13.14V2.86Z"></path><path fill="#fff" fill-rule="evenodd" d="M5.614 12.045V6.627h-1.8v5.418h1.8Zm-.9-6.158c.628 0 1.019-.416 1.019-.936-.012-.532-.391-.937-1.007-.937-.616 0-1.02.405-1.02.937 0 .52.392.936.996.936h.012Z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M6.61 12.045h1.802V9.02c0-.162.012-.324.06-.44.13-.323.426-.658.923-.658.652 0 .913.497.913 1.225v2.9h1.8V8.937c0-1.664-.888-2.439-2.073-2.439-.971 0-1.398.544-1.635.913h.012v-.785H6.611c.024.508 0 5.418 0 5.418Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialLinkedinStatic);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialLinkedinStatic;
    }
}
