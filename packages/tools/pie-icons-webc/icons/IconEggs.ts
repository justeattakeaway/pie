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

const componentSelector = 'icon-eggs';

export class IconEggs extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--eggs';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--eggs', '', null, 'IconEggs');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eggs', '', this.size, 'IconEggs');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--eggs"><path d="M7.996 14.808a5.387 5.387 0 0 1-5.384-5.384c0-2.97 2.221-8.084 5.384-8.084 3.162 0 5.384 5.244 5.384 8.084s-2.414 5.384-5.384 5.384Zm0-12.162c-2.065 0-4.078 4.287-4.078 6.778a4.082 4.082 0 0 0 4.078 4.078 4.082 4.082 0 0 0 4.077-4.078c0-2.491-2.013-6.777-4.077-6.777Z"></path><path d="M7.996 14.808a5.387 5.387 0 0 1-5.384-5.384c0-2.97 2.221-8.084 5.384-8.084 3.162 0 5.384 5.244 5.384 8.084s-2.414 5.384-5.384 5.384Zm0-12.162c-2.065 0-4.078 4.287-4.078 6.778a4.082 4.082 0 0 0 4.078 4.078 4.082 4.082 0 0 0 4.077-4.078c0-2.491-2.013-6.777-4.077-6.777Z"></path><path d="M9.233 8.065c-.253-.845-.689-1.76-1.142-2.387l1.055-.766c.531.74 1.045 1.803 1.332 2.779l-1.254.374h.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEggs);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEggs;
    }
}
