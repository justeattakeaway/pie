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

const componentSelector = 'icon-link-large';

export class IconLinkLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--linkLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--linkLarge', '', null, 'IconLinkLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--linkLarge', '', this.size, 'IconLinkLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--linkLarge"><g clip-path="url(#prefix__clip0_18_880)"><path d="M12.377 21.25h-3.5A5.198 5.198 0 0 1 3.75 16a5.311 5.311 0 0 1 1.505-3.719 5.093 5.093 0 0 1 3.631-1.531h3.5L13.375 9H8.886a6.842 6.842 0 0 0-4.882 2.056A7.061 7.061 0 0 0 2 16a7 7 0 0 0 6.886 7h4.489l-.998-1.75Z"></path><path d="M22.125 15.125H9.875v1.75h12.25v-1.75Z"></path><path d="M23.114 9h-4.008l.954 1.75h3.054A5.198 5.198 0 0 1 28.25 16a5.311 5.311 0 0 1-1.505 3.719 5.093 5.093 0 0 1-3.631 1.531H20.06L19.106 23h4.008a6.844 6.844 0 0 0 4.882-2.056A7.061 7.061 0 0 0 30 16a7 7 0 0 0-6.886-7Z"></path></g><defs><clipPath id="prefix__clip0_18_880"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconLinkLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLinkLarge;
    }
}
