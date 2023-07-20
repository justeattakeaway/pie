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

const componentSelector = 'icon-clock-alert-large';

export class IconClockAlertLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--clockAlertLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--clockAlertLarge', '', null, 'IconClockAlertLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--clockAlertLarge', '', this.size, 'IconClockAlertLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--clockAlertLarge"><path d="M16 3.75a12.25 12.25 0 0 0-11.874 9.284l.403-.158a5.838 5.838 0 0 1 1.566-.323A10.5 10.5 0 1 1 9.49 24.224a2.914 2.914 0 0 1-.044 2.109A12.251 12.251 0 1 0 16 3.75Z"></path><path d="M15.125 9v7.849l5.67 3.404.91-1.506-4.83-2.896V9h-1.75Z"></path><path d="M6.602 26.535a1.312 1.312 0 1 0 0-2.625 1.312 1.312 0 0 0 0 2.625Z"></path><path d="m5.15 14.512.744 7.613H7.31l.744-7.648a4.541 4.541 0 0 0-1.444-.227 4.5 4.5 0 0 0-1.461.262Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconClockAlertLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconClockAlertLarge;
    }
}
