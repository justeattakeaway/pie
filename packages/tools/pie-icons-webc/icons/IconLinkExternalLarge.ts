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

const componentSelector = 'icon-link-external-large';

export class IconLinkExternalLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--linkExternalLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--linkExternalLarge', '', null, 'IconLinkExternalLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--linkExternalLarge', '', this.size, 'IconLinkExternalLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--linkExternalLarge"><path d="M26.5 6.734v5.889h1.75V5.5a1.529 1.529 0 0 0 0-.35 1.75 1.75 0 0 0-1.4-1.4 1.532 1.532 0 0 0-.35 0h-7.122V5.5h5.888l-9.625 9.625-1.864 1.855 1.243 1.242 1.855-1.846L26.5 6.734Z"></path><path d="M24.872 15.598v6.124a3.911 3.911 0 0 1-3.902 3.903H10.269a3.911 3.911 0 0 1-3.894-3.894V11.03a3.911 3.911 0 0 1 3.894-3.902h6.125v-1.75h-6.125a5.696 5.696 0 0 0-5.644 5.652v10.701a5.687 5.687 0 0 0 5.688 5.688H20.97a5.696 5.696 0 0 0 5.688-5.688v-6.125l-1.786-.008Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLinkExternalLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLinkExternalLarge;
    }
}
