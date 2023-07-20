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

const componentSelector = 'icon-over16-filled';

export class IconOver16Filled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--over16Filled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--over16Filled', '', null, 'IconOver16Filled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--over16Filled', '', this.size, 'IconOver16Filled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--over16Filled"><path d="M7.29 7.987c.087-.03.18-.04.273-.03a.652.652 0 0 1 .717.677.665.665 0 0 1-.717.679.665.665 0 0 1-.718-.692.652.652 0 0 1 .445-.634Z"></path><path fill-rule="evenodd" d="M3.625 2.313h8.75a1.313 1.313 0 0 1 1.313 1.312v8.75a1.313 1.313 0 0 1-1.313 1.313h-8.75a1.313 1.313 0 0 1-1.313-1.313v-8.75a1.313 1.313 0 0 1 1.313-1.313Zm.595 7.634h.831V5.813h-.595l-1.199.538.28.704.683-.254v3.146Zm1.754-1.969c0 1.365.626 2.043 1.61 2.043a1.43 1.43 0 0 0 1.527-1.435 1.313 1.313 0 0 0-1.37-1.334 1.111 1.111 0 0 0-.935.407c0-.713.34-1.15.875-1.15a1.024 1.024 0 0 1 .756.318l.526-.577a1.597 1.597 0 0 0-1.278-.512c-.94 0-1.71.726-1.71 2.24Zm5.526.46h.875v-.876H11.5v-.875h-.875v.875H9.75v.875h.875v.876h.875v-.876Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconOver16Filled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconOver16Filled;
    }
}
