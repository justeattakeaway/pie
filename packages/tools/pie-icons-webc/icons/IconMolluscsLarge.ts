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

const componentSelector = 'icon-molluscs-large';

export class IconMolluscsLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--molluscsLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--molluscsLarge', '', null, 'IconMolluscsLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--molluscsLarge', '', this.size, 'IconMolluscsLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--molluscsLarge"><path d="M26.244 10.863a2.584 2.584 0 0 0-1.63-1.09l-.035-.148a2.67 2.67 0 0 0-.888-1.377c-1.5-1.228-3.521-2.143-5.543-2.51a2.554 2.554 0 0 0-2.24.698 2.611 2.611 0 0 0-2.265-.663 12.91 12.91 0 0 0-4.445 1.743c-.427.27-.836.567-1.228.89a2.542 2.542 0 0 0-.88 1.524v.061a2.614 2.614 0 0 0-1.552 1.072c-1.098 1.63-1.551 3.216-1.568 3.268a12.469 12.469 0 0 0-.567 3.721v.401l3.617 3.085v2.31a2.622 2.622 0 0 0 2.614 2.614h3.163l.863.732a3.15 3.15 0 0 0 2.248.932c.855 0 1.648-.33 2.197-.88l.915-.784h3.154a2.622 2.622 0 0 0 2.615-2.614v-2.31l3.616-3.085v-.4c0-3.426-1.36-5.97-2.17-7.182l.009-.008ZM9.643 24.719a.874.874 0 0 1-.872-.872v-.827l1.987 1.699H9.643Zm13.412-.872c0 .48-.393.872-.872.872h-1.115l1.986-1.69v.819Zm.33-3.39L21.347 22.2l-2.954 2.519-1.455 1.246c-.54.54-1.438.593-2.074-.043l-1.403-1.203-2.955-2.519-2.039-1.742-3.285-2.798c.035-.959.192-1.9.48-2.823 0-.018.409-1.403 1.341-2.79a.835.835 0 0 1 .323-.278l3.294 7.111h1.917l-3.8-8.209.079-.427a.8.8 0 0 1 .27-.488c.331-.27.688-.532 1.054-.758a11.063 11.063 0 0 1 3.835-1.508.855.855 0 0 1 .897.418l.166.288.044 10.684h1.743L16.78 8.187l.192-.313c.183-.305.54-.48.871-.41 1.708.305 3.486 1.107 4.75 2.144a.94.94 0 0 1 .313.47l.166.62-3.852 8.19h1.926l3.416-7.267c.096.06.192.13.253.226a11.269 11.269 0 0 1 1.873 5.822l-3.285 2.797-.017-.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMolluscsLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMolluscsLarge;
    }
}
