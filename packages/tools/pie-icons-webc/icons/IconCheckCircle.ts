import {
    html, LitElement, TemplateResult,
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

const componentSelector = 'icon-check-circle';

export class IconCheckCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--checkCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircle', '', null, 'IconCheckCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircle', '', this.size, 'IconCheckCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--checkCircle"><path d="M13.495 8a5.487 5.487 0 1 1-1.75-3.99l.875-.962a6.764 6.764 0 1 0 1.759 2.616l-1.032 1.12c.098.398.148.806.148 1.216Z"></path><path d="M8.061 10.625a1.215 1.215 0 0 1-.875-.385L4.99 7.781l.98-.875 2.118 2.38 5.416-5.888.963.875-5.522 5.95a1.181 1.181 0 0 1-.875.384l-.009.018Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCheckCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCheckCircle;
    }
}
