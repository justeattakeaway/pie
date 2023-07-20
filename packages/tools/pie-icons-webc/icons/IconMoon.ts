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

const componentSelector = 'icon-moon';

export class IconMoon extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--moon';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--moon', '', null, 'IconMoon');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--moon', '', this.size, 'IconMoon');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--moon"><path d="M8.219 8a4.174 4.174 0 0 1 3.412-4.078 5.249 5.249 0 0 0-1.444-.927A5.39 5.39 0 0 0 8 2.531 5.469 5.469 0 0 0 8 13.47a5.39 5.39 0 0 0 2.188-.464 5.248 5.248 0 0 0 1.443-.928A4.174 4.174 0 0 1 8.22 8ZM8 12.156a4.155 4.155 0 0 1-3.689-6.18 4.156 4.156 0 0 1 4.433-2.054 5.443 5.443 0 0 0 0 8.155 4.12 4.12 0 0 1-.744.08Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMoon);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMoon;
    }
}
