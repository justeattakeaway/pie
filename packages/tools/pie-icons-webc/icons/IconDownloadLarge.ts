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

const componentSelector = 'icon-download-large';

export class IconDownloadLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--downloadLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--downloadLarge', '', null, 'IconDownloadLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--downloadLarge', '', this.size, 'IconDownloadLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--downloadLarge"><path d="M15.125 17.024V2.875h1.75v14.219l4.016-4.078 1.234 1.234-4.926 4.935a1.75 1.75 0 0 1-2.398 0L9.875 14.25l1.234-1.234 4.016 4.008ZM24.75 7.25H19.5V9h5.25a.875.875 0 0 1 .875.875v15.75a.875.875 0 0 1-.875.875H7.25a.875.875 0 0 1-.875-.875V9.875A.875.875 0 0 1 7.25 9h5.25V7.25H7.25a2.625 2.625 0 0 0-2.625 2.625v15.75A2.625 2.625 0 0 0 7.25 28.25h17.5a2.625 2.625 0 0 0 2.625-2.625V9.875A2.625 2.625 0 0 0 24.75 7.25Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDownloadLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDownloadLarge;
    }
}
