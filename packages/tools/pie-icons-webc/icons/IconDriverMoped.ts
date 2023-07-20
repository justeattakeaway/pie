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

const componentSelector = 'icon-driver-moped';

export class IconDriverMoped extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--driverMoped';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--driverMoped', '', null, 'IconDriverMoped');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--driverMoped', '', this.size, 'IconDriverMoped');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--driverMoped"><g clip-path="url(#prefix__clip0_4_872)"><path d="M4.255 9.75a2.625 2.625 0 0 1 2.441-1.969h2.625a2.625 2.625 0 0 1 2.424 1.969h1.374l-.131-.429A3.903 3.903 0 0 0 9.303 6.47h-.315c.35-.136.668-.342.936-.604a2.73 2.73 0 0 0 0-3.85 2.8 2.8 0 0 0-3.85 0 2.73 2.73 0 0 0 0 3.85c.268.262.587.468.936.604h-.315A3.903 3.903 0 0 0 3.004 9.32l-.132.429h1.383Zm2.747-4.821a1.417 1.417 0 0 1 0-1.987 1.418 1.418 0 0 1 1.995 0A1.409 1.409 0 0 1 7.002 4.93Zm7.123 5.915v1.312h-3.089a.254.254 0 0 0-.157.061L9.645 13.46c-.267.26-.618.414-.989.438V15H7.344v-1.111a1.479 1.479 0 0 1-.937-.429l-1.242-1.243a.227.227 0 0 0-.149-.06H1.927v-1.313h3.09a1.514 1.514 0 0 1 1.075.446l1.243 1.243c.04.037.093.06.149.06H8.56a.254.254 0 0 0 .157-.06l1.234-1.243a1.522 1.522 0 0 1 1.085-.446h3.089Z"></path></g><defs><clipPath id="prefix__clip0_4_872"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconDriverMoped);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDriverMoped;
    }
}
