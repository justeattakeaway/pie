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

const componentSelector = 'icon-euro';

export class IconEuro extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--euro';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--euro', '', null, 'IconEuro');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--euro', '', this.size, 'IconEuro');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--euro"><path d="M11.885 11.815a3.928 3.928 0 0 1-3.063 1.339 4.078 4.078 0 0 1-3.98-2.748h4.033V9.094H4.5a5.765 5.765 0 0 1 0-.656 5.765 5.765 0 0 1 0-.657h4.375V6.47H4.841A4.078 4.078 0 0 1 8.822 3.72a4.016 4.016 0 0 1 3.072 1.348l.962-.875a5.25 5.25 0 0 0-4.034-1.75 5.451 5.451 0 0 0-5.39 4.025H1.876V7.78h1.304a6.17 6.17 0 0 0 0 1.313H1.875v1.312h1.558a5.451 5.451 0 0 0 5.39 4.06 5.252 5.252 0 0 0 4.042-1.75l-.98-.901Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEuro);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEuro;
    }
}
