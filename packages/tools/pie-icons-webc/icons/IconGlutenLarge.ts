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

const componentSelector = 'icon-gluten-large';

export class IconGlutenLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--glutenLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--glutenLarge', '', null, 'IconGlutenLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--glutenLarge', '', this.size, 'IconGlutenLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--glutenLarge"><path d="M23.464 18.288a43.4 43.4 0 0 0-1.36.043c.689-1.62.846-5.185.872-5.943l.052-1.395-1.272.567c-.323.14-1.185.54-2.144 1.037.183-.453.288-.941.288-1.455 0-1.83-2.632-6.127-3.155-6.972l-.74-1.185-.741 1.185c-.532.845-3.155 5.142-3.155 6.972 0 .514.104 1.01.287 1.464a45.25 45.25 0 0 0-2.143-1.055l-1.273-.575.044 1.394c.026.759.165 4.332.845 5.952a25.135 25.135 0 0 0-1.324-.043L7.15 18.26l.593 1.264c.357.758 2.196 4.584 3.512 5.438a3.41 3.41 0 0 0 1.839.549c.244 0 .479-.026.723-.079a3.311 3.311 0 0 0 1.316-.61v4.183h1.743v-4.174c.592.436 1.307.68 2.03.68.628 0 1.273-.174 1.839-.54 1.316-.854 3.163-4.68 3.512-5.438l.593-1.264-1.395.018h.009ZM20.44 17.8a1.656 1.656 0 1 1-2.745-1.856c.314-.462 1.856-1.378 3.468-2.17-.14 1.795-.41 3.564-.723 4.026ZM16.004 6.33c1.055 1.83 2.153 4.026 2.153 4.82a2.157 2.157 0 0 1-2.153 2.152 2.157 2.157 0 0 1-2.152-2.153c0-.793 1.098-2.989 2.152-4.819Zm-1.708 9.63a1.665 1.665 0 0 1-.453 2.3c-.366.244-.81.332-1.246.244a1.65 1.65 0 0 1-1.055-.705c-.305-.462-.566-2.24-.697-4.027 1.604.81 3.146 1.726 3.451 2.188Zm.2 7.05a1.669 1.669 0 0 1-2.291.497c-.47-.305-1.412-1.822-2.24-3.416 1.795.104 3.573.33 4.035.636a1.656 1.656 0 0 1 .497 2.292v-.01Zm5.308.488c-.366.244-.81.322-1.246.227a1.656 1.656 0 0 1-1.046-.724 1.614 1.614 0 0 1-.227-1.246c.096-.436.349-.802.724-1.046.47-.305 2.24-.531 4.035-.636-.828 1.595-1.778 3.12-2.24 3.416v.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGlutenLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGlutenLarge;
    }
}
