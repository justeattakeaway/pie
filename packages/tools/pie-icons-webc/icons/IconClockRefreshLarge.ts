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

const componentSelector = 'icon-clock-refresh-large';

export class IconClockRefreshLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--clockRefreshLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--clockRefreshLarge', '', null, 'IconClockRefreshLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--clockRefreshLarge', '', this.size, 'IconClockRefreshLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--clockRefreshLarge"><path d="M16 3.75A12.25 12.25 0 0 0 5.579 22.431l-2.625-.376-.245 1.75 4.812.691a.875.875 0 0 0 .989-.743l.682-4.813-1.75-.245-.402 2.852A10.378 10.378 0 0 1 5.5 16 10.5 10.5 0 1 1 16 26.5v1.75a12.25 12.25 0 1 0 0-24.5Z"></path><path d="m20.296 20.253-5.678-3.404V9h1.75v6.851l4.83 2.896-.902 1.506Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconClockRefreshLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconClockRefreshLarge;
    }
}
