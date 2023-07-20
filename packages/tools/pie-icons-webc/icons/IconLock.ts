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

const componentSelector = 'icon-lock';

export class IconLock extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--lock';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--lock', '', null, 'IconLock');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--lock', '', this.size, 'IconLock');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--lock"><path d="M7.344 11.5V8.875h1.312V11.5H7.344Z"></path><path fill-rule="evenodd" d="M3.844 5.375v1.094h-1.75v6.221l.245.201A9.362 9.362 0 0 0 8 14.781a9.205 9.205 0 0 0 5.661-1.89l.245-.201V6.469h-1.75V5.375a4.156 4.156 0 1 0-8.312 0Zm7 0v1.094H5.156V5.375a2.844 2.844 0 1 1 5.688 0Zm-7.438 6.676A8.094 8.094 0 0 0 8 13.47a7.945 7.945 0 0 0 4.594-1.418v-4.27H3.406v4.27Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLock);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLock;
    }
}
