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

const componentSelector = 'icon-camera';

export class IconCamera extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--camera';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--camera', '', null, 'IconCamera');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--camera', '', this.size, 'IconCamera');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--camera"><path d="M8 4.719a2.844 2.844 0 1 0 2.844 2.844A2.853 2.853 0 0 0 8 4.719Zm0 4.375a1.531 1.531 0 1 1 1.531-1.531A1.54 1.54 0 0 1 8 9.093Zm5.617-5.469a24.668 24.668 0 0 0-2.318-.437l-.455-1.05a1.532 1.532 0 0 0-1.409-.92h-2.87a1.531 1.531 0 0 0-1.409.928l-.455 1.05a24.84 24.84 0 0 0-2.301.438A1.523 1.523 0 0 0 1.219 5.12V11.5a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531V5.121a1.532 1.532 0 0 0-1.164-1.496ZM13.47 11.5a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219V5.121a.219.219 0 0 1 .166-.21 22.69 22.69 0 0 1 2.538-.463h.376l.753-1.75a.219.219 0 0 1 .201-.132h2.87a.219.219 0 0 1 .201.132l.753 1.75h.376c.856.11 1.706.264 2.546.463a.227.227 0 0 1 .158.21V11.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCamera);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCamera;
    }
}
