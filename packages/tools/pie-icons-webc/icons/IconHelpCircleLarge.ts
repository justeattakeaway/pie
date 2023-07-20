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

const componentSelector = 'icon-help-circle-large';

export class IconHelpCircleLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--helpCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--helpCircleLarge', '', null, 'IconHelpCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--helpCircleLarge', '', this.size, 'IconHelpCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--helpCircleLarge"><path d="M17.313 20.813a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0ZM16.192 9.35a4.489 4.489 0 0 0-2.923.998l-.07.06 1.269 1.26.061-.043a2.669 2.669 0 0 1 1.61-.508 1.75 1.75 0 0 1 1.89 1.69c0 1.224-1.068 2.152-2.783 2.423h-.122l.219 2.52h1.391l.14-1.4h.122a3.955 3.955 0 0 0 3.09-3.666c.026-1.68-1.19-3.334-3.895-3.334ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconHelpCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHelpCircleLarge;
    }
}
