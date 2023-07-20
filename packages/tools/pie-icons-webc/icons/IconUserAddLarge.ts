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

const componentSelector = 'icon-user-add-large';

export class IconUserAddLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--userAddLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userAddLarge', '', null, 'IconUserAddLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userAddLarge', '', this.size, 'IconUserAddLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userAddLarge"><path d="M12.5 14.688a4.812 4.812 0 1 0-4.812-4.813 4.821 4.821 0 0 0 4.812 4.813Zm0-7.876a3.062 3.062 0 1 1 0 6.125 3.062 3.062 0 0 1 0-6.124Zm7.359 11.612L18.467 19.5a4.734 4.734 0 0 0-3.788-1.75h-4.375a4.497 4.497 0 0 0-4.288 2.625l-.673 1.75H3.488l.875-2.371A6.247 6.247 0 0 1 10.32 16h4.375a6.535 6.535 0 0 1 5.163 2.424Zm7.516 5.451h-3.5v3.5h-1.75v-3.5h-3.5v-1.75h3.5v-3.5h1.75v3.5h3.5v1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserAddLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserAddLarge;
    }
}
