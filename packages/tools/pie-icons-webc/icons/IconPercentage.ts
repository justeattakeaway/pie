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

const componentSelector = 'icon-percentage';

export class IconPercentage extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--percentage';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--percentage', '', null, 'IconPercentage');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--percentage', '', this.size, 'IconPercentage');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--percentage"><g clip-path="url(#prefix__clip0_15_528)"><path d="M10.835 2.75 3.58 13.25h1.593l7.262-10.5h-1.601Z"></path><path d="M12.375 7.869a2.625 2.625 0 0 0-2.625 2.756 2.625 2.625 0 0 0 5.25 0 2.625 2.625 0 0 0-2.625-2.756Zm0 4.2a1.313 1.313 0 0 1-1.348-1.444 1.313 1.313 0 0 1 2.625 0 1.313 1.313 0 0 1-1.277 1.444Z"></path><path d="M6.197 5.375a2.625 2.625 0 0 0-2.572-2.756A2.625 2.625 0 0 0 1 5.375a2.625 2.625 0 0 0 2.625 2.756 2.625 2.625 0 0 0 2.572-2.756Zm-3.92 0a1.313 1.313 0 1 1 2.625 0 1.313 1.313 0 0 1-2.625 0Z"></path></g><defs><clipPath id="prefix__clip0_15_528"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconPercentage);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPercentage;
    }
}
