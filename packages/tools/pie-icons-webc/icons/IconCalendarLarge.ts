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

const componentSelector = 'icon-calendar-large';

export class IconCalendarLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--calendarLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarLarge', '', null, 'IconCalendarLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarLarge', '', this.size, 'IconCalendarLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--calendarLarge"><path d="M17.593 18.677a2.013 2.013 0 0 0 1.198-1.802c0-1.286-1.198-2.301-2.931-2.301a3.728 3.728 0 0 0-2.852 1.111l1.023 1.155a2.336 2.336 0 0 1 1.689-.726c.656 0 1.286.271 1.286.953 0 .683-.437.963-1.225.963h-.831v1.47h.875c.875 0 1.514.324 1.514.989s-.621 1.067-1.601 1.067a2.571 2.571 0 0 1-1.83-.735l-1.023 1.181a3.85 3.85 0 0 0 2.966 1.085c2.109 0 3.281-1.058 3.281-2.415a2.056 2.056 0 0 0-1.54-1.995Z"></path><path d="M10.313 12.5H21.8l.875-1.75H9.438l.874 1.75Z"></path><path d="M22.125 6.375v-1.75h-1.75v1.75h-8.75v-1.75h-1.75v1.75h-5.25v21H23A4.375 4.375 0 0 0 27.375 23V6.375h-5.25ZM25.625 23A2.625 2.625 0 0 1 23 25.625H6.375v-17.5h3.5V9h1.75v-.875h8.75V9h1.75v-.875h3.5V23Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCalendarLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCalendarLarge;
    }
}
