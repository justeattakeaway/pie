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

const componentSelector = 'icon-peanuts';

export class IconPeanuts extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--peanuts';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--peanuts', '', null, 'IconPeanuts');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--peanuts', '', this.size, 'IconPeanuts');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--peanuts"><path d="M10.345 4.5a.438.438 0 1 0 0-.875.438.438 0 0 0 0 .875Z"></path><path d="M11.063 6.25a.438.438 0 1 0 0-.875.438.438 0 0 0 0 .875Z"></path><path d="M9.313 6.128a.437.437 0 1 0 0-.875.437.437 0 0 0 0 .875Z"></path><path d="M5.585 14.781h-.499a4.375 4.375 0 0 1-3.211-2.091A4.323 4.323 0 0 1 1.945 8a4.375 4.375 0 0 1 2.73-1.829A2.161 2.161 0 0 0 6.311 4.57c.035-.164.082-.325.14-.481a4.279 4.279 0 0 1 7.473-1.155 4.375 4.375 0 0 1 .411 4.559 3.719 3.719 0 0 1-1.33 1.522 4.996 4.996 0 0 1-1.566.683A2.424 2.424 0 0 0 9.75 11.5a4.375 4.375 0 0 1-4.2 3.246l.035.035Zm4.891-12.25a2.824 2.824 0 0 0-.464 0 3.01 3.01 0 0 0-2.423 2.31 3.5 3.5 0 0 1-2.625 2.625 3.027 3.027 0 0 0-2.437 2.905A3.01 3.01 0 0 0 2.969 12a3.045 3.045 0 0 0 4.76.577c.377-.377.646-.848.779-1.365a3.71 3.71 0 0 1 2.625-2.791 3.745 3.745 0 0 0 1.163-.507 2.45 2.45 0 0 0 .875-.972 3.08 3.08 0 0 0-.271-3.22 3.01 3.01 0 0 0-2.424-1.19Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPeanuts);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPeanuts;
    }
}
