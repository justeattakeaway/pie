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

const componentSelector = 'icon-policies-large';

export class IconPoliciesLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--policiesLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--policiesLarge', '', null, 'IconPoliciesLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--policiesLarge', '', this.size, 'IconPoliciesLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--policiesLarge"><path d="M18.625 3.75h-14v25.375h22.75V12.5a8.749 8.749 0 0 0-8.75-8.75Zm6.773 7h-5.023V5.728a7.044 7.044 0 0 1 5.023 5.022Zm.227 16.625H6.375V5.5h12.25v7h7v14.875Zm-10.5-14H10.75v-1.75h4.375v1.75Zm-4.375 7h7v1.75h-7v-1.75Zm0-4.375h10.5v1.75h-10.5V16Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPoliciesLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPoliciesLarge;
    }
}
