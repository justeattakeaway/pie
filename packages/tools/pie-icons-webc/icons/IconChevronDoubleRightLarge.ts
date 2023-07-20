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

const componentSelector = 'icon-chevron-double-right-large';

export class IconChevronDoubleRightLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--chevronDoubleRightLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleRightLarge', '', null, 'IconChevronDoubleRightLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleRightLarge', '', this.size, 'IconChevronDoubleRightLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chevronDoubleRightLarge"><path d="M13.979 26.124 24.46 16a.131.131 0 0 0 0-.096L13.961 5.84l1.225-1.216 10.5 10.063a1.907 1.907 0 0 1 0 2.624L15.178 27.376l-1.2-1.251Z"></path><path d="M5.806 26.124 16.298 16a.131.131 0 0 0 0-.096L5.797 5.84l1.224-1.216 10.5 10.063a1.908 1.908 0 0 1 0 2.624L7.006 27.376l-1.199-1.251Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChevronDoubleRightLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChevronDoubleRightLarge;
    }
}
