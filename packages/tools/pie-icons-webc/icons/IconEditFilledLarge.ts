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

const componentSelector = 'icon-edit-filled-large';

export class IconEditFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--editFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--editFilledLarge', '', null, 'IconEditFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--editFilledLarge', '', this.size, 'IconEditFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--editFilledLarge"><path d="m27.559 7.749-3.3-3.308a2.424 2.424 0 0 0-3.342 0l-1.82 1.829.613.621.665.621 4.165 4.166.621.612.621.621 1.82-1.829a2.338 2.338 0 0 0 0-3.333h-.043Z"></path><path d="m18.476 8.125-.621-.613L5.92 19.448l.516.07.499.148c.298.094.59.205.875.333a7.946 7.946 0 0 1 4.174 4.156c.13.298.238.605.323.919 0 .14.097.28.132.428l.096.578 11.961-11.926-.612-.621-5.408-5.408Z"></path><path d="M10.75 25.852c0-.113-.07-.218-.105-.332a6.125 6.125 0 0 0-4.165-4.165c-.123 0-.245-.088-.376-.114l-.604-.078-.963-.088a2.626 2.626 0 0 0-.183.674l-.735 6.615 6.623-.735a2.5 2.5 0 0 0 .71-.193c0-.297-.062-.621-.106-.953l-.096-.63Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEditFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEditFilledLarge;
    }
}
