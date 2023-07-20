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

const componentSelector = 'icon-arrow-in-circle';

export class IconArrowInCircle extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--arrowInCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowInCircle', '', null, 'IconArrowInCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowInCircle', '', this.size, 'IconArrowInCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--arrowInCircle"><path d="M1.639 8.595h7.166l-1.899 1.907.928.928 2.712-2.713a1.11 1.11 0 0 0 0-1.548L7.834 4.5l-.928.875 1.899 1.907H1.639v1.313Z"></path><path d="M7.851 1.157A6.799 6.799 0 0 0 1.367 5.97H2.75a5.469 5.469 0 1 1 0 3.937H1.376a6.773 6.773 0 1 0 6.475-8.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconArrowInCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconArrowInCircle;
    }
}
