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

const componentSelector = 'icon-calendar-edit-large';

export class IconCalendarEditLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--calendarEditLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarEditLarge', '', null, 'IconCalendarEditLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarEditLarge', '', this.size, 'IconCalendarEditLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--calendarEditLarge"><path d="M10.265 12.509h11.47l.872-1.746H9.393l.872 1.746Z"></path><path d="M6.364 25.566V8.11h3.491v.873h1.746V8.11h8.728v.873h1.746V8.11h3.491v3.954c.5.163.954.441 1.327.811l.419.472V6.364h-5.237V4.618h-1.746v1.746h-8.728V4.618H9.855v1.746H4.618v20.948h7.603l.192-1.746H6.364Z"></path><path d="m27.573 16.087-1.937-1.937a1.748 1.748 0 0 0-2.47 0l-8.274 8.274a1.745 1.745 0 0 0-.515 1.073l-.48 4.365 4.364-.48a1.869 1.869 0 0 0 1.073-.524l8.24-8.274a1.746 1.746 0 0 0 0-2.462v-.035Zm-5.498 1.624 1.937 1.937-5.944 5.918-2.199.253.253-2.19 5.953-5.918Zm4.233-.35-1.056 1.057-1.938-1.938 1.047-1.056 1.947 1.938Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCalendarEditLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCalendarEditLarge;
    }
}
