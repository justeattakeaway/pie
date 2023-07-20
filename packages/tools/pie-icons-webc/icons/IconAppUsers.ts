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

const componentSelector = 'icon-app-users';

export class IconAppUsers extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--appUsers';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--appUsers', '', null, 'IconAppUsers');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--appUsers', '', this.size, 'IconAppUsers');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--appUsers"><path d="m2.426 12.375.49-1.601A1.645 1.645 0 0 1 4.447 9.53H6.25c.319.012.625.126.875.324-.1.19-.182.39-.245.595l-.508 1.925h1.365l.464-1.557A1.662 1.662 0 0 1 9.75 9.53h1.838a1.663 1.663 0 0 1 1.522 1.287l.429 1.557h1.365l-.56-1.925a3.053 3.053 0 0 0-2.083-2.126 2.387 2.387 0 0 0 .499-3.771 2.45 2.45 0 0 0-3.395 0 2.362 2.362 0 0 0-.709 1.697 2.389 2.389 0 0 0 .709 1.698c.097.102.206.193.324.27A2.756 2.756 0 0 0 8 8.876a2.756 2.756 0 0 0-1.689-.612c.118-.079.226-.17.324-.272a2.389 2.389 0 0 0 .709-1.741 2.362 2.362 0 0 0-.709-1.697 2.45 2.45 0 0 0-3.395 0 2.362 2.362 0 0 0-.709 1.697 2.389 2.389 0 0 0 .709 1.698c.145.147.31.274.49.376a3.001 3.001 0 0 0-2.074 2.065l-.604 1.986h1.374Zm7.875-6.895a1.103 1.103 0 0 1 1.78.352 1.076 1.076 0 0 1-.24 1.188 1.085 1.085 0 0 1-1.54 0 1.077 1.077 0 0 1 0-1.54Zm-6.125 0a1.103 1.103 0 0 1 1.78.352 1.076 1.076 0 0 1-.24 1.188 1.085 1.085 0 0 1-1.54 0 1.076 1.076 0 0 1 0-1.54Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconAppUsers);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconAppUsers;
    }
}
