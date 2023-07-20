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

const componentSelector = 'icon-convenience-large';

export class IconConvenienceLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--convenienceLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--convenienceLarge', '', null, 'IconConvenienceLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--convenienceLarge', '', this.size, 'IconConvenienceLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--convenienceLarge"><path d="m25.623 25.905-1.41-12.81h-1.662V9.289H16.9v-.28a2.905 2.905 0 0 0-2.774-2.897V2.875h-1.75v3.237c-1.54.08-2.774 1.34-2.774 2.897v4.077H7.825l-1.409 12.81a2.914 2.914 0 0 0 .727 2.258 2.91 2.91 0 0 0 2.16.962h13.415c.822 0 1.61-.35 2.16-.971a2.914 2.914 0 0 0 .727-2.258l.018.018ZM20.8 11.039v2.056H16.9v-2.056H20.8Zm-9.45-2.03c0-.639.525-1.164 1.164-1.164h1.47c.639 0 1.164.525 1.164 1.164v4.077H11.36V9.01h-.009ZM23.593 26.99a1.141 1.141 0 0 1-.858.385H9.321c-.332 0-.638-.14-.857-.385a1.163 1.163 0 0 1-.289-.901l1.243-11.253h13.238L23.89 26.09c.035.332-.07.647-.289.901h-.008Z"></path><path d="M15.998 19.561a2.087 2.087 0 0 1-2.083-2.082h-1.75a3.831 3.831 0 1 0 7.665 0h-1.75a2.087 2.087 0 0 1-2.082 2.082Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconConvenienceLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconConvenienceLarge;
    }
}
