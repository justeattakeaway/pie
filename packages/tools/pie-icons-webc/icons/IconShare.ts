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

const componentSelector = 'icon-share';

export class IconShare extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--share';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--share', '', null, 'IconShare');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--share', '', this.size, 'IconShare');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--share"><path d="M12.322 9.076a2.371 2.371 0 0 0-1.907.963L6.04 8.376a2.625 2.625 0 0 0 0-.376 2.625 2.625 0 0 0 0-.376l4.375-1.663a2.371 2.371 0 1 0-.481-1.417 1.68 1.68 0 0 0 0 .192L5.462 6.434a2.362 2.362 0 0 0-1.75-.823 2.389 2.389 0 1 0 0 4.778 2.362 2.362 0 0 0 1.75-.823l4.498 1.698a1.68 1.68 0 0 0 0 .192 2.39 2.39 0 1 0 2.389-2.38h-.027Zm0-5.608a1.076 1.076 0 1 1 0 2.152 1.076 1.076 0 0 1 0-2.152ZM3.678 9.076a1.076 1.076 0 1 1 0-2.152 1.076 1.076 0 0 1 0 2.152Zm8.646 3.457a1.076 1.076 0 1 1 .002-2.153 1.076 1.076 0 0 1-.002 2.153Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconShare);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconShare;
    }
}
