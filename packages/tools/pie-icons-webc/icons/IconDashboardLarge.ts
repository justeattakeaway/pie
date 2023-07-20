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

const componentSelector = 'icon-dashboard-large';

export class IconDashboardLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--dashboardLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--dashboardLarge', '', null, 'IconDashboardLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--dashboardLarge', '', this.size, 'IconDashboardLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--dashboardLarge"><path d="M29.073 18.625a13.003 13.003 0 0 1-1.112 5.25h-1.933a11.28 11.28 0 0 0-.184-10.832l1.207-1.374a13.02 13.02 0 0 1 2.022 6.956ZM15.948 7.25a11.322 11.322 0 0 1 6.308 1.916l1.155-1.321a13.125 13.125 0 0 0-19.486 16.03H5.86A11.375 11.375 0 0 1 15.948 7.25Zm3.386 5.25 1.181-1.348a8.75 8.75 0 0 0-13.317 7.473h1.75A7 7 0 0 1 19.334 12.5Zm-.508 5.889a3.5 3.5 0 1 1-2.878-1.514 3.5 3.5 0 0 1 1.557.385l8.566-9.783 1.304 1.147-8.549 9.765Zm-1.128 1.986a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDashboardLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDashboardLarge;
    }
}
