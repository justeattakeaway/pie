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

const componentSelector = 'icon-lei-large';

export class IconLeiLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--leiLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--leiLarge', '', null, 'IconLeiLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--leiLarge', '', this.size, 'IconLeiLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--leiLarge"><path d="M9.77 10.75h1.593v8.645H9.77V10.75Zm9.301 5.6c0 .185-.021.37-.061.551h-4.436a1.548 1.548 0 0 0 1.583 1.225 2.005 2.005 0 0 0 1.497-.569l.971.937a3.204 3.204 0 0 1-2.52 1.006 3.028 3.028 0 0 1-3.133-3.168A2.965 2.965 0 0 1 16 13.192a2.95 2.95 0 0 1 3.071 3.158Zm-1.584-.595A1.39 1.39 0 0 0 16 14.539a1.374 1.374 0 0 0-1.453 1.216h2.94Zm3.947-4.926a.874.874 0 0 0-.954.918.954.954 0 0 0 1.907 0 .876.876 0 0 0-.953-.918Zm-.797 8.566h1.593v-6.02h-1.593v6.02ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLeiLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLeiLarge;
    }
}
