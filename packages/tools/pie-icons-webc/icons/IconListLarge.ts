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

const componentSelector = 'icon-list-large';

export class IconListLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--listLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--listLarge', '', null, 'IconListLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--listLarge', '', this.size, 'IconListLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--listLarge"><path d="M27.856 8.125H10.75v1.75h16.494l.612-1.75Z"></path><path d="M5.5 24.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z"></path><path d="M25.406 15.125H10.75v1.75h14.044l.612-1.75Z"></path><path d="M27.506 22.125H10.75v1.75h16.222l.534-1.75Z"></path><path d="M5.5 17.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z"></path><path d="M5.5 10.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconListLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconListLarge;
    }
}
