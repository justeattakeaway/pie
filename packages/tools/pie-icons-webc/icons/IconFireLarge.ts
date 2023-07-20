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

const componentSelector = 'icon-fire-large';

export class IconFireLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--fireLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--fireLarge', '', null, 'IconFireLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fireLarge', '', this.size, 'IconFireLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--fireLarge"><path d="M22.125 11.625 16 5.5l-6.125 6.125a8.75 8.75 0 0 0 0 12.32 8.574 8.574 0 0 0 12.198 0 8.75 8.75 0 0 0 .052-12.32ZM11.18 12.85 16 7.968l4.848 4.9a7 7 0 0 1 1.128 8.33c-1.75-1.75-3.5-3.544-5.31-5.25l-.622-.604-.613.612-5.355 5.338a7 7 0 0 1 1.077-8.427l.026-.017ZM16 24.75a6.764 6.764 0 0 1-4.847-2.03l4.908-4.97a506.56 506.56 0 0 1 4.874 4.839l-.087.087A6.763 6.763 0 0 1 16 24.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFireLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFireLarge;
    }
}
