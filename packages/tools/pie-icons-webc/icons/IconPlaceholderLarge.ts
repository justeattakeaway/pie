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

const componentSelector = 'icon-placeholder-large';

export class IconPlaceholderLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--placeholderLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--placeholderLarge', '', null, 'IconPlaceholderLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--placeholderLarge', '', this.size, 'IconPlaceholderLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--placeholderLarge"><path fill-rule="evenodd" d="M.166 0h31.668L32 .166v31.668l-.166.166H.166L0 31.834V.166L.166 0Zm31.502 31.668V.33H.33v31.337h31.337ZM6.537 2h18.926A4.537 4.537 0 0 1 30 6.537v18.926A4.537 4.537 0 0 1 25.463 30H6.537A4.537 4.537 0 0 1 2 25.463V6.537A4.537 4.537 0 0 1 6.537 2Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPlaceholderLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPlaceholderLarge;
    }
}
