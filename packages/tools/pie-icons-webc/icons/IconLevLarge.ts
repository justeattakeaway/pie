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

const componentSelector = 'icon-lev-large';

export class IconLevLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--levLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--levLarge', '', null, 'IconLevLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--levLarge', '', this.size, 'IconLevLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--levLarge"><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21ZM9.875 12.036h5.25v7.359h-1.75v-5.609h-1.75c-.227 4.944-2.266 5.714-3.5 5.714v-1.75c1.076 0 1.75-1.855 1.75-4.839v-.875Zm11.664 3.5a1.752 1.752 0 0 0 .875-1.444c0-1.172-.875-2.1-2.477-2.1h-3.14v7.403h3.22c1.75 0 2.808-.945 2.808-2.161a1.83 1.83 0 0 0-1.286-1.698Zm-3.019-2.161h1.19c.604 0 1.015.324 1.015.875 0 .551-.411.875-1.015.875h-1.19v-1.75Zm1.391 4.725H18.52v-1.864h1.391c.718 0 1.181.324 1.181.875 0 .552-.463.945-1.18.945v.044Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLevLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLevLarge;
    }
}
