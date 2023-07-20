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

const componentSelector = 'icon-thumbs-down-filled';

export class IconThumbsDownFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--thumbsDownFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsDownFilled', '', null, 'IconThumbsDownFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsDownFilled', '', this.size, 'IconThumbsDownFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--thumbsDownFilled"><path d="M4.404 5.016c-.01 1.234.17 2.461.534 3.64H1.874V2.094h2.992a8.085 8.085 0 0 0-.463 2.922Zm9.8 1.89L13.18 3.625a2.406 2.406 0 0 0-2.24-1.54H6.25a6.685 6.685 0 0 0-.569 2.922 9.984 9.984 0 0 0 .648 3.737l2.546 5.162h.402a1.75 1.75 0 0 0 1.75-2.135l-.402-2.389 2.45-.507a1.531 1.531 0 0 0 1.191-1.338 1.558 1.558 0 0 0-.062-.63Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconThumbsDownFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconThumbsDownFilled;
    }
}
