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

const componentSelector = 'icon-calendar-edit';

export class IconCalendarEdit extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--calendarEdit';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarEdit', '', null, 'IconCalendarEdit');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarEdit', '', this.size, 'IconCalendarEdit');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--calendarEdit"><path d="m13.136 6.189.77.77v-3.99h-2.625V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h2.844l.008-.061.14-1.251h-1.68V4.28H4.72v1.094H6.03V4.281H9.97v1.094h1.312V4.281h1.313v1.392"></path><path d="m13.119 8-.875-.875a1.077 1.077 0 0 0-1.505 0l-3.92 3.867c-.17.18-.278.41-.306.657l-.263 2.336 2.336-.262c.247-.025.479-.133.656-.307l3.877-3.885a1.06 1.06 0 0 0 0-1.505V8Zm-4.752 4.375-.56-.56 2.573-2.572.56.56-2.572 2.572Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCalendarEdit);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCalendarEdit;
    }
}
