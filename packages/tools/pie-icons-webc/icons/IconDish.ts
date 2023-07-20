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

const componentSelector = 'icon-dish';

export class IconDish extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--dish';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--dish', '', null, 'IconDish');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--dish', '', this.size, 'IconDish');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--dish"><path d="M13.469 8a4.603 4.603 0 0 0-4.594-4.594V2.094A5.906 5.906 0 1 1 6.25 13.25v-1.496c.762.558 1.68.864 2.625.875A4.603 4.603 0 0 0 13.469 8ZM3.188 6.801a.665.665 0 0 0 .656-.656v-3.64l1.295-.63v4.27a.656.656 0 1 0 1.312 0v-3.64l1.313-.63v6.352a3.08 3.08 0 0 1-2.625 2.87v3.028H3.844v-3.027a3.08 3.08 0 0 1-2.625-2.87V2.61l1.312-.639v4.174a.665.665 0 0 0 .656.656Zm0 1.313A2.074 2.074 0 0 1 2.53 8v.236c0 1.164 1.391 1.636 1.969 1.636.577 0 1.969-.472 1.969-1.636V8c-.211.076-.433.117-.657.123A1.951 1.951 0 0 1 4.5 7.598c-.358.33-.826.513-1.313.516Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDish);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDish;
    }
}
