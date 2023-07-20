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

const componentSelector = 'icon-upload';

export class IconUpload extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--upload';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--upload', '', null, 'IconUpload');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--upload', '', this.size, 'IconUpload');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--upload"><path d="M5.926 5.051 5 4.124 7.23 1.875a1.085 1.085 0 0 1 1.54 0l2.231 2.223-.927.953-1.418-1.426V9.75H7.344V3.625L5.926 5.051ZM11.5 6.47H9.995V7.78H11.5a.219.219 0 0 1 .219.219v5.25a.219.219 0 0 1-.219.219h-7a.219.219 0 0 1-.219-.219V8a.219.219 0 0 1 .219-.219h1.505V6.47H4.5A1.54 1.54 0 0 0 2.969 8v5.25A1.54 1.54 0 0 0 4.5 14.781h7a1.54 1.54 0 0 0 1.531-1.531V8A1.54 1.54 0 0 0 11.5 6.469Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUpload);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUpload;
    }
}
