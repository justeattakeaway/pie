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

const componentSelector = 'icon-alert-triangle-filled-large';

export class IconAlertTriangleFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--alertTriangleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--alertTriangleFilledLarge', '', null, 'IconAlertTriangleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--alertTriangleFilledLarge', '', this.size, 'IconAlertTriangleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--alertTriangleFilledLarge"><path d="m28.582 21.731-10.5-16.817a2.432 2.432 0 0 0-4.147 0L3.435 21.73a2.573 2.573 0 0 0-.07 2.625A2.415 2.415 0 0 0 5.5 25.625h21a2.415 2.415 0 0 0 2.135-1.277 2.573 2.573 0 0 0-.053-2.617ZM16 21.906a1.53 1.53 0 1 1 0-3.061 1.53 1.53 0 0 1 0 3.061Zm.875-11.156v6.125h-1.75V10.75h1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconAlertTriangleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconAlertTriangleFilledLarge;
    }
}
