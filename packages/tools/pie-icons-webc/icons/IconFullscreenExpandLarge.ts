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

const componentSelector = 'icon-fullscreen-expand-large';

export class IconFullscreenExpandLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--fullscreenExpandLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExpandLarge', '', null, 'IconFullscreenExpandLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExpandLarge', '', this.size, 'IconFullscreenExpandLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--fullscreenExpandLarge"><path d="M5.5 5.375h8.583l-.983 1.75H7.25v5.85l-1.75.983V5.375Z"></path><path d="M18.9 7.125h5.85v5.848l1.75.981V5.375h-8.583l.983 1.75Z"></path><path d="M26.5 26.375h-8.58l.982-1.75h5.848v-5.848l1.75-.982v8.58Z"></path><path d="M5.5 26.375v-8.583l1.75.983v5.85h5.848l.981 1.75H5.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFullscreenExpandLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFullscreenExpandLarge;
    }
}
