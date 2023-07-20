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

const componentSelector = 'icon-barcode-large';

export class IconBarcodeLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--barcodeLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--barcodeLarge', '', null, 'IconBarcodeLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--barcodeLarge', '', this.size, 'IconBarcodeLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--barcodeLarge"><path d="M8.125 8.125v15.75h-1.75V8.125h1.75Zm15.75 0v15.75h1.75V8.125h-1.75ZM19.5 21.25h1.75V8.125H19.5V21.25Zm-4.375 0h1.75V8.125h-1.75V21.25Zm-4.375 0h1.75V8.125h-1.75V21.25Zm17.5-16.625H23v1.75h4.375v4.375h1.75V5.5a.875.875 0 0 0-.875-.875ZM2.875 5.5v5.25h1.75V6.375H9v-1.75H3.75a.875.875 0 0 0-.875.875Zm1.75 15.75h-1.75v5.25a.875.875 0 0 0 .875.875H9v-1.75H4.625V21.25Zm22.75 4.375H23v1.75h5.25a.875.875 0 0 0 .875-.875v-5.25h-1.75v4.375Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBarcodeLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBarcodeLarge;
    }
}
