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

const componentSelector = 'icon-refresh-large';

export class IconRefreshLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--refreshLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--refreshLarge', '', null, 'IconRefreshLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--refreshLarge', '', this.size, 'IconRefreshLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--refreshLarge"><path d="M18.406 12.797h6.414a1.68 1.68 0 0 0 1.68-1.68V4.774h-1.75v5.433l-.333-.55-.052-.07a10.5 10.5 0 1 0 2.047 7.717l-1.75-.228a8.75 8.75 0 1 1-1.75-6.466l.263.438h-4.769v1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconRefreshLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconRefreshLarge;
    }
}
