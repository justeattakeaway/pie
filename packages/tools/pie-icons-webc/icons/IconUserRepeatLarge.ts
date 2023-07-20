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

const componentSelector = 'icon-user-repeat-large';

export class IconUserRepeatLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--userRepeatLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userRepeatLarge', '', null, 'IconUserRepeatLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userRepeatLarge', '', this.size, 'IconUserRepeatLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userRepeatLarge"><path d="m9.56 20.436-.254.928h1.82l.123-.464c.498-1.811 1.837-3.019 3.333-3.019h3.562c1.496 0 2.835 1.208 3.333 3.019l.123.464h1.82l-.254-.928a5.53 5.53 0 0 0-4.454-4.252c.175-.12.34-.255.49-.403a4.016 4.016 0 1 0-5.678 0c.151.148.315.283.49.403a5.53 5.53 0 0 0-4.454 4.252Zm5.197-9.108a2.275 2.275 0 1 1 0 3.22 2.266 2.266 0 0 1 0-3.22ZM28.617 16a12.25 12.25 0 0 1-24.5 0 12.101 12.101 0 0 1 1.83-6.431l-2.626.376-.245-1.75 4.804-.691a.875.875 0 0 1 .989.744l.69 4.812-1.75.245-.367-2.835A10.369 10.369 0 0 0 5.867 16a10.5 10.5 0 1 0 10.5-10.5V3.75A12.25 12.25 0 0 1 28.617 16Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserRepeatLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserRepeatLarge;
    }
}
