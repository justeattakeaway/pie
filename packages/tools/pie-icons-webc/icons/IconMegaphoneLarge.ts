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

const componentSelector = 'icon-megaphone-large';

export class IconMegaphoneLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--megaphoneLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--megaphoneLarge', '', null, 'IconMegaphoneLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--megaphoneLarge', '', this.size, 'IconMegaphoneLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--megaphoneLarge"><path d="M28.25 14.25a4.524 4.524 0 0 0-4.375-4.506V2.875h-2.354l-.271.201a46.213 46.213 0 0 1-4.008 2.94A47.948 47.948 0 0 1 12.116 9H5.5a2.625 2.625 0 0 0-2.625 2.625v5.25A2.625 2.625 0 0 0 5.5 19.5h.236l1.4 7.683h4.375l1.243-7.298a48.465 48.465 0 0 1 4.497 2.625c1.384.9 2.72 1.872 3.999 2.914l.245.201h2.38v-6.869a4.524 4.524 0 0 0 4.375-4.506ZM4.625 16.875v-5.25a.875.875 0 0 1 .875-.875h6.125v7H5.5a.875.875 0 0 1-.875-.875Zm3.973 8.558L7.52 19.5h3.544l-1.015 5.933H8.597Zm13.527-1.558a46.084 46.084 0 0 0-3.894-2.835 52.012 52.012 0 0 0-4.856-2.835V10.33a49.054 49.054 0 0 0 4.856-2.809c1.348-.875 2.625-1.837 3.894-2.835v19.189Zm1.75-6.851V11.51a2.756 2.756 0 0 1 0 5.513Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMegaphoneLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMegaphoneLarge;
    }
}
