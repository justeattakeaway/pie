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

const componentSelector = 'icon-review';

export class IconReview extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--review';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--review', '', null, 'IconReview');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--review', '', this.size, 'IconReview');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--review"><path d="M12.375 1.219h-8.75A1.54 1.54 0 0 0 2.094 2.75v7.875a1.54 1.54 0 0 0 1.531 1.531h1.628L8 14.904l2.748-2.748h1.627a1.54 1.54 0 0 0 1.531-1.531V2.75a1.54 1.54 0 0 0-1.531-1.531Zm.219 9.406a.219.219 0 0 1-.219.219h-2.17L8 13.049l-2.205-2.205h-2.17a.219.219 0 0 1-.219-.219V2.75a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v7.875ZM8.814 5.83l1.82.263L9.32 7.379l.306 1.811L8 8.341l-1.628.875.307-1.811-1.304-1.313 1.82-.262L8 4.185l.814 1.645Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconReview);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconReview;
    }
}
