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

const componentSelector = 'icon-cheque';

export class IconCheque extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--cheque';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cheque', '', null, 'IconCheque');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cheque', '', this.size, 'IconCheque');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cheque"><path d="m13.119 4.719.358-.368a1.873 1.873 0 0 0 .56-1.356 1.864 1.864 0 0 0-.56-1.348 1.898 1.898 0 0 0-2.703 0L7.703 4.72H1.218v8.312H14.78V4.72H13.12Zm-4.183.656 2.765-2.8a.595.595 0 0 1 .875 0 .603.603 0 0 1 0 .875L9.794 6.189l-.998.14.14-.954Zm4.533 6.387H2.53v-5.73H7.51l-.263 1.845 3.16-.455 1.4-1.39h1.662v5.73ZM3.625 9.095h5.25v1.312h-5.25V9.094Zm7 0h1.75v1.312h-1.75V9.094Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCheque);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCheque;
    }
}
