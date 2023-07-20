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

const componentSelector = 'icon-chevron-double-right';

export class IconChevronDoubleRight extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--chevronDoubleRight';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleRight', '', null, 'IconChevronDoubleRight');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleRight', '', this.size, 'IconChevronDoubleRight');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chevronDoubleRight"><path d="M7.754 13.18 13.126 8 7.71 2.82l.875-.963 5.539 5.347a1.164 1.164 0 0 1 0 1.636l-5.469 5.285-.901-.945Z"></path><path d="M2.784 13.18 8.139 8 2.74 2.82l.875-.963L9.18 7.204a1.164 1.164 0 0 1 0 1.671l-5.495 5.25-.901-.945Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChevronDoubleRight);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChevronDoubleRight;
    }
}
