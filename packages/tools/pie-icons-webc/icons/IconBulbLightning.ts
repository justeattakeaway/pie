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

const componentSelector = 'icon-bulb-lightning';

export class IconBulbLightning extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--bulbLightning';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bulbLightning', '', null, 'IconBulbLightning');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bulbLightning', '', this.size, 'IconBulbLightning');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bulbLightning"><path d="M10.162 13.469H5.838l.35 1.312h3.622l.35-1.312Z"></path><path d="m5.375 10.117.35 2.04h4.611l.29-2.048c.07-.393.267-.752.56-1.024a4.523 4.523 0 0 0 1.408-3.273 4.594 4.594 0 0 0-9.126-.76A4.533 4.533 0 0 0 4.77 9.067c.306.278.517.645.604 1.05Zm-.612-4.856a3.281 3.281 0 0 1 6.518.551 3.239 3.239 0 0 1-.988 2.337c-.49.47-.821 1.082-.945 1.75l-.158.954H6.801l-.148-.945a3.238 3.238 0 0 0-.963-1.75 3.281 3.281 0 0 1-.927-2.897Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBulbLightning);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBulbLightning;
    }
}
