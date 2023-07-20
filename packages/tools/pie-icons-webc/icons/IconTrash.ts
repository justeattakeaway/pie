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

const componentSelector = 'icon-trash';

export class IconTrash extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--trash';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--trash', '', null, 'IconTrash');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--trash', '', this.size, 'IconTrash');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--trash"><path d="M9.864 1.219H6.136L5.49 2.53h5.022L9.864 1.22Z"></path><path d="M1.875 3.844v1.312h.962l.788 8.243a1.531 1.531 0 0 0 1.522 1.382h5.723a1.53 1.53 0 0 0 1.505-1.382l.779-8.243h.971V3.844H1.875Zm9.205 9.406a.228.228 0 0 1-.219.201H5.14a.228.228 0 0 1-.219-.201l-.77-8.094h7.7l-.77 8.094Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconTrash);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconTrash;
    }
}
