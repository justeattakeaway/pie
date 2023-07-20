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

const componentSelector = 'icon-euro-large';

export class IconEuroLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--euroLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--euroLarge', '', null, 'IconEuroLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--euroLarge', '', this.size, 'IconEuroLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--euroLarge"><path d="m19.894 19.5 1.356 1.12a5.73 5.73 0 0 1-4.419 1.951 5.95 5.95 0 0 1-5.748-3.946H9v-1.75h1.636a7.338 7.338 0 0 1-.061-.875c.003-.293.023-.585.061-.875H9v-1.75h2.056a5.906 5.906 0 0 1 5.732-3.946 5.845 5.845 0 0 1 4.375 1.942l-1.296 1.181a4.068 4.068 0 0 0-3.114-1.373 4.103 4.103 0 0 0-3.745 2.196h3.867v1.75h-4.471a4.896 4.896 0 0 0 0 1.75h4.471v1.75h-3.867a4.104 4.104 0 0 0 3.78 2.196 3.974 3.974 0 0 0 3.106-1.321ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEuroLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEuroLarge;
    }
}
