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

const componentSelector = 'icon-camera-large';

export class IconCameraLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--cameraLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cameraLarge', '', null, 'IconCameraLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cameraLarge', '', this.size, 'IconCameraLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cameraLarge"><path d="M16 9.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25Zm0 10.5a4.375 4.375 0 1 1 0-8.75 4.375 4.375 0 0 1 0 8.75ZM27.13 8.571a48.657 48.657 0 0 0-4.839-.875L21.25 5.343a2.625 2.625 0 0 0-2.371-1.593H13.12a2.625 2.625 0 0 0-2.371 1.593L9.709 7.67c-1.618.21-3.224.502-4.813.875a2.625 2.625 0 0 0-2.021 2.581v12.749A2.625 2.625 0 0 0 5.5 26.5h21a2.625 2.625 0 0 0 2.625-2.625V11.126a2.625 2.625 0 0 0-1.995-2.555Zm.245 15.304a.875.875 0 0 1-.875.875h-21a.875.875 0 0 1-.875-.875V11.126a.875.875 0 0 1 .674-.875 47.237 47.237 0 0 1 5.127-.91l.499-.061 1.391-3.246a.875.875 0 0 1 .805-.534h5.758a.875.875 0 0 1 .805.534l1.391 3.246.499.061c1.73.214 3.448.524 5.145.928a.875.875 0 0 1 .656.875v12.731Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCameraLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCameraLarge;
    }
}
