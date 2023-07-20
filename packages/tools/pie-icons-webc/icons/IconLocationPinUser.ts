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

const componentSelector = 'icon-location-pin-user';

export class IconLocationPinUser extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--locationPinUser';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinUser', '', null, 'IconLocationPinUser');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinUser', '', this.size, 'IconLocationPinUser');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--locationPinUser"><path d="M8 4.08a1.54 1.54 0 1 0 0 3.08 1.54 1.54 0 0 0 0-3.08Z"></path><path d="M11.658 3.187a5.136 5.136 0 0 0-7.315 0 5.25 5.25 0 0 0 0 7.377L8 14.265l3.658-3.701a5.25 5.25 0 0 0 0-7.377Zm-2.46 8.164L8 12.56 5.375 9.934a2.012 2.012 0 0 1 1.47-.613h2.126a2.004 2.004 0 0 1 1.549.718L9.199 11.35Zm2.118-2.257a3.238 3.238 0 0 0-2.345-.998H6.845a3.246 3.246 0 0 0-2.231.875A4.078 4.078 0 0 1 5.19 4.02a3.946 3.946 0 0 1 5.618 0 4.095 4.095 0 0 1 .507 5.075Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLocationPinUser);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLocationPinUser;
    }
}
