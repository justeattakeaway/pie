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

const componentSelector = 'icon-battery-large';

export class IconBatteryLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--batteryLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--batteryLarge', '', null, 'IconBatteryLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--batteryLarge', '', this.size, 'IconBatteryLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--batteryLarge"><path d="M27.375 12.5V9.875A2.625 2.625 0 0 0 24.75 7.25H5.5a2.625 2.625 0 0 0-2.625 2.625v12.25A2.625 2.625 0 0 0 5.5 24.75h19.25a2.625 2.625 0 0 0 2.625-2.625V19.5h1.75v-7h-1.75Zm-1.75 9.625a.875.875 0 0 1-.875.875H5.5a.875.875 0 0 1-.875-.875V9.875A.875.875 0 0 1 5.5 9h19.25a.875.875 0 0 1 .875.875v12.25ZM8.125 12.5h1.75v7h-1.75v-7Zm4.375 0h1.75v7H12.5v-7Zm4.375 0h1.75v7h-1.75v-7Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBatteryLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBatteryLarge;
    }
}
