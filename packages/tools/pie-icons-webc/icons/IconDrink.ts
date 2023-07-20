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

const componentSelector = 'icon-drink';

export class IconDrink extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--drink';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--drink', '', null, 'IconDrink');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--drink', '', this.size, 'IconDrink');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--drink"><path d="M12.375 4.719H8.656V3.222l2.179-.726-.42-1.242-3.071 1.023V4.72H3.625V6.03h.586l.665 7.359a1.531 1.531 0 0 0 1.531 1.391h3.185a1.53 1.53 0 0 0 1.532-1.391l.665-7.359h.586V4.72ZM9.811 13.25a.219.219 0 0 1-.219.201H6.407a.22.22 0 0 1-.218-.201l-.665-7.219h4.952l-.665 7.219Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDrink);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDrink;
    }
}
