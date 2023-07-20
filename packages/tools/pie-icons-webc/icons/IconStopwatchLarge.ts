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

const componentSelector = 'icon-stopwatch-large';

export class IconStopwatchLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--stopwatchLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatchLarge', '', null, 'IconStopwatchLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatchLarge', '', this.size, 'IconStopwatchLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--stopwatchLarge"><path d="M28.25 17.75a11.375 11.375 0 0 1-21.875 4.375h1.934a9.625 9.625 0 1 0 0-8.75H6.375a11.375 11.375 0 0 1 9.625-7v-1.75h-3.5l.604-1.75h7.542l.604 1.75h-3.5v1.794a11.375 11.375 0 0 1 10.5 11.331ZM16 11.625v6.624l4.804 2.879.875-1.506-3.929-2.37v-5.627H16Zm-6.125 7h-5.25l.787 1.75h4.463v-1.75Zm0-3.5H2l.788 1.75h7.087v-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconStopwatchLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconStopwatchLarge;
    }
}
