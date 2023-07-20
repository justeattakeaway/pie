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

const componentSelector = 'icon-gift';

export class IconGift extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--gift';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--gift', '', null, 'IconGift');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--gift', '', this.size, 'IconGift');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--gift"><path d="M10.329 3.333c.112-.013.226-.013.338 0V2.071a2.18 2.18 0 0 0-.338 0A2.969 2.969 0 0 0 8 3.138 2.969 2.969 0 0 0 5.671 2a2.071 2.071 0 0 0-.338.071v1.333c.113-.013.226-.013.338 0A1.68 1.68 0 0 1 7.333 4.96H2v4h.889v3.778a1.6 1.6 0 0 0 1.555 1.555h7.112a1.6 1.6 0 0 0 1.555-1.555V8.96H14v-4H8.667a1.671 1.671 0 0 1 1.662-1.627ZM7.333 12.96H4.444a.258.258 0 0 1-.222-.222V8.96h3.111v4Zm0-5.333h-4V6.293h4v1.334Zm4.445 5.075a.258.258 0 0 1-.258.258H8.667v-4h3.11v3.742Zm.889-6.409v1.334h-4V6.293h4Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGift);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGift;
    }
}
