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

const componentSelector = 'icon-temp';

export class IconTemp extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--temp';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--temp', '', null, 'IconTemp');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--temp', '', this.size, 'IconTemp');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--temp"><path d="M10.992 8V4.124A2.957 2.957 0 0 0 8 1.219a2.958 2.958 0 0 0-2.992 2.905V8a3.964 3.964 0 0 0-1.164 2.783A4.104 4.104 0 0 0 8 14.78a4.104 4.104 0 0 0 4.156-4.034A3.963 3.963 0 0 0 10.992 8ZM8 13.469a2.78 2.78 0 0 1-2.844-2.721 2.625 2.625 0 0 1 .937-2.004l.227-.193V4.124A1.645 1.645 0 0 1 8 2.53a1.645 1.645 0 0 1 1.68 1.593V8.55l.228.193a2.626 2.626 0 0 1 .936 2.004A2.784 2.784 0 0 1 8 13.468Zm1.313-2.406a1.312 1.312 0 1 1-1.97-1.13V6.25h1.313v3.684a1.304 1.304 0 0 1 .656 1.129Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconTemp);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconTemp;
    }
}
