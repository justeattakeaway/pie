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

const componentSelector = 'icon-placeholder';

export class IconPlaceholder extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--placeholder';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--placeholder', '', null, 'IconPlaceholder');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--placeholder', '', this.size, 'IconPlaceholder');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--placeholder"><path fill-rule="evenodd" d="M.083 0h15.834L16 .083v15.834l-.083.083H.083L0 15.917V.083L.083 0Zm15.75 15.834V.166H.166v15.668h15.669ZM3.27 1h9.463A2.268 2.268 0 0 1 15 3.269v9.463A2.268 2.268 0 0 1 12.732 15H3.269A2.268 2.268 0 0 1 1 12.732V3.269A2.269 2.269 0 0 1 3.269 1Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPlaceholder);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPlaceholder;
    }
}
