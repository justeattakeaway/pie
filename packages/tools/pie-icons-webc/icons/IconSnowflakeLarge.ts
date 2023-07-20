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

const componentSelector = 'icon-snowflake-large';

export class IconSnowflakeLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--snowflakeLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--snowflakeLarge', '', null, 'IconSnowflakeLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--snowflakeLarge', '', this.size, 'IconSnowflakeLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--snowflakeLarge"><path d="m27.707 17.942-3.456 1.803L17.75 16l6.501-3.745 3.456 1.802.814-1.548-3.395-1.777.158-3.823-1.75-.08-.158 3.912-6.501 3.745V6.98l3.299-2.083-.936-1.487L16 5.465l-3.238-2.056-.936 1.487 3.299 2.083v7.507l-6.501-3.745-.158-3.911-1.75.079.158 3.823-3.395 1.777.814 1.548 3.456-1.802L14.25 16l-6.501 3.745-3.456-1.803-.814 1.55 3.395 1.775-.158 3.824 1.75.079.158-3.911 6.501-3.745v7.507l-3.299 2.091.936 1.48L16 26.534l3.238 2.056.936-1.479-3.299-2.09v-7.508l6.501 3.745.158 3.91 1.75-.078-.158-3.824 3.395-1.776-.814-1.549Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSnowflakeLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSnowflakeLarge;
    }
}
