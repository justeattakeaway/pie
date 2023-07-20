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

const componentSelector = 'icon-user-highlight';

export class IconUserHighlight extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--userHighlight';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userHighlight', '', null, 'IconUserHighlight');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userHighlight', '', this.size, 'IconUserHighlight');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userHighlight"><path d="M8.656 1.875H7.344V4.5h1.312V1.875Z"></path><path d="m11.04 3.085-1.003 2.003 1.174.587 1.003-2.002-1.174-.588Z"></path><path d="m4.961 3.082-1.174.587L4.79 5.673l1.173-.588-1.002-2.003Z"></path><path d="M12.261 12.76a3.29 3.29 0 0 0-2.441-2.047l.087-.07a2.695 2.695 0 0 0 0-3.824 2.774 2.774 0 0 0-3.815 0 2.695 2.695 0 0 0 0 3.824l.088.07a3.29 3.29 0 0 0-2.441 2.047l-.499 1.365h1.4l.332-.875a2.022 2.022 0 0 1 1.943-1.26h2.17a2.02 2.02 0 0 1 1.942 1.26l.333.875h1.4l-.499-1.365Zm-5.25-5.014a1.435 1.435 0 0 1 1.96 0 1.391 1.391 0 1 1-1.96 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserHighlight);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserHighlight;
    }
}
