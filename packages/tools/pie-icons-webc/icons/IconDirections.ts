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

const componentSelector = 'icon-directions';

export class IconDirections extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--directions';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--directions', '', null, 'IconDirections');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--directions', '', this.size, 'IconDirections');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--directions"><path d="M14.072 6.232 11.194 2.97H6.25V1.656H4.929V2.97h-3.5v8.75h3.5v2.625H6.25v-2.625h4.953l2.87-3.264a1.47 1.47 0 0 0 0-2.223Zm-.883 1.26-2.564 2.914H6.25V8h1.137v1.146L9.96 7.344 7.387 5.69v.997H4.93v3.72H2.75V4.28h7.875l2.476 2.844.079.079a.15.15 0 0 1 .058.208.15.15 0 0 1-.058.054l.009.026Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDirections);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDirections;
    }
}
