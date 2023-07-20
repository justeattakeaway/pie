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

const componentSelector = 'icon-location-pin-filled-large';

export class IconLocationPinFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--locationPinFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFilledLarge', '', null, 'IconLocationPinFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFilledLarge', '', this.size, 'IconLocationPinFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--locationPinFilledLarge"><path d="m21.6 23.735-1.435 1.435c1.96.455 2.835 1.067 2.835 1.33 0 .446-2.406 1.75-7 1.75-4.594 0-7-1.304-7-1.75 0-.262.875-.875 2.835-1.33L10.4 23.735c-1.811.551-3.15 1.453-3.15 2.765 0 2.406 4.533 3.5 8.75 3.5 4.218 0 8.75-1.094 8.75-3.5 0-1.313-1.339-2.214-3.15-2.765Z"></path><path d="m16 26.859 7.254-7.254a10.256 10.256 0 1 0-14.508 0L16 26.859Zm0-16.984a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLocationPinFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLocationPinFilledLarge;
    }
}
