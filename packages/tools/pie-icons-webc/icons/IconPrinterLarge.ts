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

const componentSelector = 'icon-printer-large';

export class IconPrinterLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--printerLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--printerLarge', '', null, 'IconPrinterLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--printerLarge', '', this.size, 'IconPrinterLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--printerLarge"><path d="M29.125 13.375A2.625 2.625 0 0 0 26.5 10.75H23v-7H9v7H5.5a2.625 2.625 0 0 0-2.625 2.625V24.75H9v3.5h14v-3.5h6.125V13.375ZM10.75 5.5h10.5v5.25h-10.5V5.5Zm10.5 21h-10.5v-6.125h10.5V26.5Zm6.125-3.5H23v-2.625h1.75v-1.75H7.25v1.75H9V23H4.625v-9.625A.875.875 0 0 1 5.5 12.5h21a.875.875 0 0 1 .875.875V23Zm-6.125-7.875h3.5v1.75h-3.5v-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPrinterLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPrinterLarge;
    }
}
