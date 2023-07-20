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

const componentSelector = 'icon-thumbs-up-filled';

export class IconThumbsUpFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--thumbsUpFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsUpFilled', '', null, 'IconThumbsUpFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsUpFilled', '', this.size, 'IconThumbsUpFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--thumbsUpFilled"><path d="M4.867 13.906H1.875V7.344h3.063a12.058 12.058 0 0 0-.534 3.64c-.027.994.13 1.985.463 2.922Zm9.206-6.028a1.53 1.53 0 0 0-.998-.753l-2.45-.507.473-2.39a1.75 1.75 0 0 0-1.75-2.134h-.473L6.372 7.239a9.984 9.984 0 0 0-.647 3.736 6.685 6.685 0 0 0 .525 2.931h4.655a2.407 2.407 0 0 0 2.275-1.531l1.024-3.272a1.558 1.558 0 0 0-.132-1.225Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconThumbsUpFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconThumbsUpFilled;
    }
}
