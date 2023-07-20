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

const componentSelector = 'icon-stopwatch';

export class IconStopwatch extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--stopwatch';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatch', '', null, 'IconStopwatch');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatch', '', this.size, 'IconStopwatch');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--stopwatch"><path d="M13.547 9.234a5.547 5.547 0 0 1-10.114 3.141h1.75A4.165 4.165 0 0 0 8 13.469a4.235 4.235 0 1 0 0-8.461A4.191 4.191 0 0 0 5.008 6.25H3.336a5.539 5.539 0 0 1 10.212 2.984ZM7.344 6.705v2.966L9.67 11.23l.727-1.094-1.75-1.164V6.705H7.344ZM5.375 9.969H2.531l.438 1.312h2.406V9.97Zm0-2.625H1l.438 1.312h3.937V7.344Zm4.804-4.83-.315-1.295H6.136l-.315 1.295h4.375-.017Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconStopwatch);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconStopwatch;
    }
}
