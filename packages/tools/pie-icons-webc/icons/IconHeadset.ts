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

const componentSelector = 'icon-headset';

export class IconHeadset extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--headset';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--headset', '', null, 'IconHeadset');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--headset', '', this.size, 'IconHeadset');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--headset"><path d="M8.219 1.875A5.404 5.404 0 0 0 2.75 7.206v5a2.228 2.228 0 0 0 2.228 2.227h4.05v-1.215h-4.05a1.013 1.013 0 0 1-1.013-1.013v-.227a.808.808 0 0 0 .203 0h.81a1.426 1.426 0 0 0 1.418-1.393v-1.62a1.426 1.426 0 0 0-1.418-1.418H3.965v-.34A4.197 4.197 0 0 1 8.22 3.09a4.197 4.197 0 0 1 4.253 4.115v.34H11.46a1.426 1.426 0 0 0-1.418 1.419v1.62a1.426 1.426 0 0 0 1.418 1.418h.81a1.426 1.426 0 0 0 1.418-1.418V7.206a5.404 5.404 0 0 0-5.47-5.33ZM4.978 8.762a.203.203 0 0 1 .203.203v1.62a.203.203 0 0 1-.203.202h-.81a.202.202 0 0 1-.203-.202V8.762h1.013Zm7.494 1.823a.202.202 0 0 1-.202.202h-.81a.202.202 0 0 1-.203-.202v-1.62a.203.203 0 0 1 .203-.203h1.012v1.823Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconHeadset);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHeadset;
    }
}
