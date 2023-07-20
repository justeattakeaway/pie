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

const componentSelector = 'icon-download';

export class IconDownload extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--download';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--download', '', null, 'IconDownload');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--download', '', this.size, 'IconDownload');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--download"><path d="M7.344 7.414V1h1.312v6.414l1.671-1.671.928.927-2.503 2.502a1.059 1.059 0 0 1-1.505 0L4.745 6.67l.928-.928 1.67 1.672Zm5.031-4.445h-2.38V4.28h2.38a.219.219 0 0 1 .219.219v7.875a.219.219 0 0 1-.219.219h-8.75a.219.219 0 0 1-.219-.219V4.5a.219.219 0 0 1 .219-.219h2.38V2.97h-2.38A1.54 1.54 0 0 0 2.094 4.5v7.875a1.54 1.54 0 0 0 1.531 1.531h8.75a1.54 1.54 0 0 0 1.531-1.531V4.5a1.54 1.54 0 0 0-1.531-1.531Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDownload);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDownload;
    }
}
