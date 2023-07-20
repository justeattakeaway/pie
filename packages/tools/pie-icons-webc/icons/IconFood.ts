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

const componentSelector = 'icon-food';

export class IconFood extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--food';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--food', '', null, 'IconFood');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--food', '', this.size, 'IconFood');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--food"><path d="M1.962 10.713A1.522 1.522 0 0 0 1 10.405V9.094a2.774 2.774 0 0 1 1.654.507c.28.208.622.315.971.306a1.54 1.54 0 0 0 .963-.306 2.791 2.791 0 0 1 1.662-.507 2.783 2.783 0 0 1 1.662.507c.278.207.617.315.963.306a1.54 1.54 0 0 0 .963-.306 2.826 2.826 0 0 1 1.662-.507v1.312a1.566 1.566 0 0 0-.971.306 2.774 2.774 0 0 1-1.654.508 2.8 2.8 0 0 1-1.662-.508 1.548 1.548 0 0 0-.963-.306 1.54 1.54 0 0 0-.963.306 2.774 2.774 0 0 1-1.662.508 2.8 2.8 0 0 1-1.663-.508Zm10.194-7.744V1h-1.312v1.969h-3.15l.28 2.625a6.125 6.125 0 0 0-1.724-.219c-2.362 0-4.279 1.225-4.576 2.905l1.295.228c.183-1.024 1.61-1.82 3.281-1.82s3.089.796 3.264 1.82l1.295-.228a3.107 3.107 0 0 0-1.444-2.03l-.21-1.969h4.375l-.717 8.094a.219.219 0 0 1-.22.201h-1.828c.04-.231.06-.465.061-.7H9.514c0 1.015 0 1.575-3.281 1.575-3.282 0-3.282-.56-3.282-1.575H1.64c0 2.442 1.548 2.888 4.593 2.888 1.882 0 3.186-.175 3.912-.875h2.45a1.514 1.514 0 0 0 1.531-1.374L15 2.969h-2.844Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFood);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFood;
    }
}
