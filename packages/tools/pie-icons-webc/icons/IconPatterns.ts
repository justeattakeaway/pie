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

const componentSelector = 'icon-patterns';

export class IconPatterns extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--patterns';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--patterns', '', null, 'IconPatterns');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--patterns', '', this.size, 'IconPatterns');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--patterns"><g clip-path="url(#prefix__clip0_7066_3739)"><path d="M1.551 14.589h5.662V8.936H1.55v5.653Zm1.313-4.34H5.89v3.027H2.864V10.25Z"></path><path d="M6.128 7.624a3.085 3.085 0 0 0 3.08-3.08 3.085 3.085 0 0 0-3.08-3.08 3.085 3.085 0 0 0-3.08 3.08 3.085 3.085 0 0 0 3.08 3.08Zm0-4.848c.97 0 1.767.796 1.767 1.768 0 .971-.796 1.767-1.767 1.767A1.774 1.774 0 0 1 4.36 4.544c0-.971.796-1.768 1.768-1.768Z"></path><path d="m11.203 4.544-3.334 6.343h6.676l-3.334-6.343h-.008Zm0 2.817 1.163 2.214H10.04l1.164-2.214Z"></path></g><defs><clipPath id="prefix__clip0_7066_3739"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconPatterns);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPatterns;
    }
}
