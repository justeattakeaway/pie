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

const componentSelector = 'icon-flag-portugal';

export class IconFlagPortugal extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--portugal';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--portugal', '', null, 'IconFlagPortugal');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--portugal', '', this.size, 'IconFlagPortugal');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--portugal"><path fill="#6DA544" d="M1 8a7 7 0 0 0 4.567 6.563L6.174 8l-.607-6.563A7 7 0 0 0 1 8Z"></path><path fill="#D80027" d="M15.002 8a7 7 0 0 0-9.435-6.563v13.126A7.002 7.002 0 0 0 15.002 8Z"></path><path fill="#FFDA44" d="M5.567 10.434a2.434 2.434 0 1 0 0-4.868 2.434 2.434 0 0 0 0 4.868Z"></path><path fill="#D80027" d="M4.197 6.783v1.518a1.369 1.369 0 1 0 2.737 0V6.78H4.199l-.002.002Z"></path><path fill="#EEE" d="M5.567 8.76a.458.458 0 0 1-.456-.456v-.605h.913v.602a.458.458 0 0 1-.457.457v.002Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFlagPortugal);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFlagPortugal;
    }
}
