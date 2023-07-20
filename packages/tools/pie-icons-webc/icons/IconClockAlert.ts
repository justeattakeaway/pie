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

const componentSelector = 'icon-clock-alert';

export class IconClockAlert extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--clockAlert';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--clockAlert', '', null, 'IconClockAlert');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--clockAlert', '', this.size, 'IconClockAlert');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--clockAlert"><path d="M10.012 10.905 7.064 9.137V5.095h1.312v3.299l2.31 1.391-.674 1.12Z"></path><path d="M8 1.219a6.772 6.772 0 0 0-6.344 4.418l.438-.166a3.553 3.553 0 0 1 1.181-.21 5.469 5.469 0 1 1 2.17 7.569c0 .452-.155.89-.438 1.242A6.772 6.772 0 1 0 8 1.22Z"></path><path d="m3.791 11.063.429-4.376a2.669 2.669 0 0 0-.875-.13 2.625 2.625 0 0 0-.831.13l.42 4.375h.857Z"></path><path d="M2.636 12.813a.753.753 0 1 0 .753-.753.761.761 0 0 0-.753.752Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconClockAlert);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconClockAlert;
    }
}
