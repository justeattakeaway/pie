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

const componentSelector = 'icon-flag-israel';

export class IconFlagIsrael extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--israel';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--israel', '', null, 'IconFlagIsrael');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--israel', '', this.size, 'IconFlagIsrael');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--israel"><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"></path><path fill="#0052B4" d="M10.636 6.477h-1.76L8 4.957l-.877 1.52H5.364L6.242 8l-.875 1.523h1.756L8 11.043l.878-1.52h1.758L9.758 8l.876-1.523h.002ZM9.078 8l-.54.935H7.463L6.92 8l.542-.935h1.077L9.08 8h-.002ZM8 6.13l.2.347h-.4L8 6.13Zm-1.618.935h.401l-.202.347-.2-.347Zm0 1.87.2-.347.201.347h-.401ZM8 9.87l-.2-.347h.4L8 9.87Zm1.619-.935h-.402l.202-.347.2.347Zm-.402-1.87h.402l-.2.347-.202-.347Zm3.142-4.542H3.642a7.036 7.036 0 0 0-1.614 1.824h11.944a7.034 7.034 0 0 0-1.613-1.824ZM3.642 13.477h8.717a7.033 7.033 0 0 0 1.613-1.824H2.028a7.034 7.034 0 0 0 1.614 1.824Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFlagIsrael);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFlagIsrael;
    }
}
