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

const componentSelector = 'icon-route-pin-large';

export class IconRoutePinLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--routePinLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--routePinLarge', '', null, 'IconRoutePinLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--routePinLarge', '', this.size, 'IconRoutePinLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--routePinLarge"><path d="M26.631 6.375A8.848 8.848 0 0 0 14.12 18.887l6.256 6.222 6.256-6.257a8.864 8.864 0 0 0 0-12.477Zm-1.233 11.244-5.023 5.022-5.023-5.022a7.097 7.097 0 1 1 10.046 0Zm-5.023-8.742a3.85 3.85 0 1 0 0 7.701 3.85 3.85 0 0 0 0-7.7Zm0 5.942a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM8.895 26.5l13.23.061v1.75L8.886 28.25a2.73 2.73 0 0 1-2.38-1.4 2.537 2.537 0 0 1 .079-2.625l2.196-3.5a.796.796 0 0 0 0-.831.954.954 0 0 0-.875-.481H2v-1.75h5.941a2.73 2.73 0 0 1 2.398 1.39 2.52 2.52 0 0 1-.079 2.626l-2.188 3.5a.77.77 0 0 0 0 .822.962.962 0 0 0 .823.499Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconRoutePinLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconRoutePinLarge;
    }
}
