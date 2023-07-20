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

const componentSelector = 'icon-navigation-expand-large';

export class IconNavigationExpandLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--navigationExpandLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationExpandLarge', '', null, 'IconNavigationExpandLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationExpandLarge', '', this.size, 'IconNavigationExpandLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--navigationExpandLarge"><path d="M4.48 4.48v23.03h18.602a4.429 4.429 0 0 0 4.429-4.428V4.48H4.48Zm7.086 21.26H6.252V6.251h5.314v19.487Zm14.173-2.658a2.657 2.657 0 0 1-2.657 2.657h-9.744V6.252h12.401v16.83Z"></path><path d="m19.468 16.952 1.7 1.701H15.11v1.771h6.058l-1.7 1.701 1.249 1.258 2.905-2.905a1.338 1.338 0 0 0 0-1.878l-2.905-2.897-1.25 1.25Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconNavigationExpandLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconNavigationExpandLarge;
    }
}
