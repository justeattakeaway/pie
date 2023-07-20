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

const componentSelector = 'icon-sign-closed-large';

export class IconSignClosedLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--signClosedLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--signClosedLarge', '', null, 'IconSignClosedLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--signClosedLarge', '', this.size, 'IconSignClosedLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--signClosedLarge"><path d="M26.5 11.625h-4.462l-5.355-6.676h-1.365l-5.355 6.676H5.5a2.625 2.625 0 0 0-2.625 2.625v10.5A2.625 2.625 0 0 0 5.5 27.375h21a2.625 2.625 0 0 0 2.625-2.625v-10.5a2.625 2.625 0 0 0-2.625-2.625ZM16 6.9l3.789 4.725H12.21L16 6.9Zm11.375 17.85a.875.875 0 0 1-.875.875h-21a.875.875 0 0 1-.875-.875v-10.5a.875.875 0 0 1 .875-.875h21a.875.875 0 0 1 .875.875v10.5Zm-7.691-7.691-2.45 2.441 2.45 2.441-1.243 1.243L16 20.734l-2.441 2.45-1.243-1.243 2.45-2.441-2.45-2.441 1.243-1.243L16 18.266l2.441-2.45 1.243 1.243Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSignClosedLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSignClosedLarge;
    }
}
