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

const componentSelector = 'icon-bug-large';

export class IconBugLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--bugLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bugLarge', '', null, 'IconBugLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bugLarge', '', this.size, 'IconBugLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--bugLarge"><path d="m23.875 12.045 3.5-2.8v-2.24l-3.587 2.87h-1.75a6.125 6.125 0 0 0-12.093 0h-1.75l-3.57-2.87v2.24l3.5 2.8V16H3.75v1.75h4.375v3.938L5.5 23.805v2.24l3.001-2.398a7.875 7.875 0 0 0 14.998 0l3.001 2.398v-2.24l-2.625-2.117V17.75h4.375V16h-4.375v-3.955ZM16 6.375a4.375 4.375 0 0 1 4.288 3.5h-8.575A4.375 4.375 0 0 1 16 6.375Zm6.125 14.875a6.125 6.125 0 0 1-5.25 6.055v-10.43h-1.75v10.43a6.125 6.125 0 0 1-5.25-6.055v-9.625h12.25v9.625Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBugLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBugLarge;
    }
}
