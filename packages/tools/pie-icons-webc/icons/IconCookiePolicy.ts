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

const componentSelector = 'icon-cookie-policy';

export class IconCookiePolicy extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--cookiePolicy';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cookiePolicy', '', null, 'IconCookiePolicy');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cookiePolicy', '', this.size, 'IconCookiePolicy');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cookiePolicy"><g clip-path="url(#prefix__clip0_5014_3343)"><path d="M8 14.563A6.565 6.565 0 0 1 1.437 8 6.565 6.565 0 0 1 8 1.437a6.7 6.7 0 0 1 1.321.132l.28 1.155a1.21 1.21 0 0 0-.464.945c0 .674.552 1.225 1.226 1.225h.07l.656.866a1.22 1.22 0 0 0-.079.411c0 .674.551 1.225 1.225 1.225.429 0 .814-.218 1.041-.586l1.208.245a6.565 6.565 0 0 1-6.492 7.508H8ZM8 2.75A5.254 5.254 0 0 0 2.75 8 5.254 5.254 0 0 0 8 13.25a5.254 5.254 0 0 0 5.224-4.742 2.54 2.54 0 0 1-3.526-2.336v-.053A2.536 2.536 0 0 1 7.99 2.74L8 2.75Z"></path><path d="M5.839 7.37a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z"></path><path d="M5.839 11.106a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z"></path><path d="M9.426 11.106a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z"></path><path d="M12.279 4.692a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z"></path></g><defs><clipPath id="prefix__clip0_5014_3343"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconCookiePolicy);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCookiePolicy;
    }
}
