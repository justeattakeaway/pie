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

const componentSelector = 'icon-office-large';

export class IconOfficeLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--officeLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--officeLarge', '', null, 'IconOfficeLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--officeLarge', '', this.size, 'IconOfficeLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--officeLarge"><path d="M24.75 4.625H7.25A2.625 2.625 0 0 0 4.625 7.25v20.125h22.75V7.25a2.625 2.625 0 0 0-2.625-2.625Zm-10.5 21v-3.5h3.5v3.5h-3.5Zm11.375 0H19.5v-3.5h1.75v-1.75h-10.5v1.75h1.75v3.5H6.375V7.25a.875.875 0 0 1 .875-.875h17.5a.875.875 0 0 1 .875.875v18.375ZM17.75 9.875h3.5v1.75h-3.5v-1.75Zm-7 0h3.5v1.75h-3.5v-1.75Zm7 5.25h3.5v1.75h-3.5v-1.75Zm-7 0h3.5v1.75h-3.5v-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconOfficeLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconOfficeLarge;
    }
}
