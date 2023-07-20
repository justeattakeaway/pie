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

const componentSelector = 'icon-calendar-alert';

export class IconCalendarAlert extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--calendarAlert';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarAlert', '', null, 'IconCalendarAlert');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarAlert', '', this.size, 'IconCalendarAlert');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--calendarAlert"><path d="M11.273 2.842V1.75h-1.31v1.09H6.037v-1.09H4.727v1.09H2.109v10.91H10.6a3.273 3.273 0 0 0 3.273-3.272V2.842h-2.6Zm1.31 7.637a1.964 1.964 0 0 1-1.982 1.964H3.418V4.15h1.309v1.09h1.31v-1.09h3.927v1.09h1.31v-1.09h1.308v6.328Z"></path><path d="M8.655 6.263h-1.31v2.619h1.31V6.263Z"></path><path d="M8 11.5a.873.873 0 1 0 0-1.746.873.873 0 0 0 0 1.746Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCalendarAlert);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCalendarAlert;
    }
}
