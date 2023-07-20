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

const componentSelector = 'icon-stopwatch-filled';

export class IconStopwatchFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--stopwatchFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatchFilled', '', null, 'IconStopwatchFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatchFilled', '', this.size, 'IconStopwatchFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--stopwatchFilled"><path d="M8 3.695A5.547 5.547 0 0 0 3.336 6.25H5.83a.665.665 0 0 1 .656.656v4.821a.665.665 0 0 1-.656.657H3.433A5.546 5.546 0 0 0 13.55 9.076 5.548 5.548 0 0 0 8 3.695Zm2.398 6.44-.727 1.094L7.344 9.67V6.705h1.312V8.97l1.742 1.164Z"></path><path d="m10.179 2.514-.315-1.295H6.136l-.315 1.295v.017h4.358v-.017Z"></path><path d="M5.375 8.656V7.344H1l.438 1.312h3.937Z"></path><path d="M5.375 11.281V9.97H2.531l.438 1.312h2.406Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconStopwatchFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconStopwatchFilled;
    }
}
