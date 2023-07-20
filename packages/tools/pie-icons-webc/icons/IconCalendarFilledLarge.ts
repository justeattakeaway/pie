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

const componentSelector = 'icon-calendar-filled-large';

export class IconCalendarFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--calendarFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarFilledLarge', '', null, 'IconCalendarFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarFilledLarge', '', this.size, 'IconCalendarFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--calendarFilledLarge"><path d="M22.125 6.375V9h-1.75V6.375h-8.75V9h-1.75V6.375h-5.25v21H23A4.375 4.375 0 0 0 27.375 23V6.375h-5.25ZM15.799 19.5h-.875v-1.488h.831c.787 0 1.225-.393 1.225-.962s-.63-.963-1.286-.963a2.343 2.343 0 0 0-1.689.736l-1.024-1.164a3.71 3.71 0 0 1 2.853-1.112c1.75 0 2.931 1.024 2.931 2.31a2.012 2.012 0 0 1-1.199 1.82 2.048 2.048 0 0 1 1.514 1.952c0 1.365-1.172 2.423-3.281 2.423a3.85 3.85 0 0 1-2.966-1.084l1.023-1.182a2.562 2.562 0 0 0 1.829.726c.98 0 1.601-.376 1.601-1.058 0-.683-.604-.954-1.487-.954Zm6.877-8.75-.875 1.75H10.313l-.876-1.75h13.24Z"></path><path d="M11.625 4.625h-1.75v1.75h1.75v-1.75Z"></path><path d="M22.125 4.625h-1.75v1.75h1.75v-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCalendarFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCalendarFilledLarge;
    }
}
