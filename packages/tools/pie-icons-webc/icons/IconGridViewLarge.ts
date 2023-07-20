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

const componentSelector = 'icon-grid-view-large';

export class IconGridViewLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--gridViewLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--gridViewLarge', '', null, 'IconGridViewLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--gridViewLarge', '', this.size, 'IconGridViewLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--gridViewLarge"><path d="M14.25 14.25H4.625V4.625h9.625v9.625ZM6.375 12.5H12.5V6.375H6.375V12.5Zm21 1.75H17.75V4.625h9.625v9.625ZM19.5 12.5h6.125V6.375H19.5V12.5Zm-5.25 14.875H4.625V17.75h9.625v9.625Zm-7.875-1.75H12.5V19.5H6.375v6.125Zm21 1.75H17.75V17.75h9.625v9.625Zm-7.875-1.75h6.125V19.5H19.5v6.125Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGridViewLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGridViewLarge;
    }
}
