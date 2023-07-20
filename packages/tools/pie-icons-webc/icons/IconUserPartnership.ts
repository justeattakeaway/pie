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

const componentSelector = 'icon-user-partnership';

export class IconUserPartnership extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--userPartnership';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userPartnership', '', null, 'IconUserPartnership');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userPartnership', '', this.size, 'IconUserPartnership');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userPartnership"><path d="M12.865 7.598a2.424 2.424 0 1 0-2.091-.132 3.106 3.106 0 0 0-1.829 1.409L8 10.293l-.936-1.418a3.133 3.133 0 0 0-1.838-1.374 2.389 2.389 0 1 0-2.091.132 3.089 3.089 0 0 0-1.916 2.808v3.684H2.53v-3.684a1.811 1.811 0 0 1 1.838-1.75 1.846 1.846 0 0 1 1.583.875L8 12.707l2.047-3.176a1.854 1.854 0 0 1 1.584-.875 1.812 1.812 0 0 1 1.838 1.75v3.719h1.312v-3.684a3.088 3.088 0 0 0-1.916-2.843ZM4.062 4.28a1.094 1.094 0 1 1 0 2.188 1.094 1.094 0 0 1 0-2.188Zm7.875 0a1.094 1.094 0 1 1 0 2.188 1.094 1.094 0 0 1 0-2.188ZM4.72 11.5H6.03v2.625H4.72V11.5Zm5.25 0h1.312v2.625H9.97V11.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserPartnership);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserPartnership;
    }
}
