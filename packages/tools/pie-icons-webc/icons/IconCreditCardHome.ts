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

const componentSelector = 'icon-credit-card-home';

export class IconCreditCardHome extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--creditCardHome';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHome', '', null, 'IconCreditCardHome');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHome', '', this.size, 'IconCreditCardHome');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--creditCardHome"><path d="M4.5 11.5h1.75v.875H4.5V11.5ZM8.814 1.254a2.082 2.082 0 0 0-1.637 0 46.042 46.042 0 0 0-6.125 4.068l.823 1.042A42.989 42.989 0 0 1 7.72 2.452c.178-.043.364-.043.542 0a43 43 0 0 1 5.863 3.912l.814-1.042a45.719 45.719 0 0 0-6.125-4.068ZM13.906 8v5.25a1.54 1.54 0 0 1-1.531 1.531h-8.75a1.54 1.54 0 0 1-1.531-1.531V8a1.54 1.54 0 0 1 1.531-1.531h8.75A1.54 1.54 0 0 1 13.906 8Zm-10.5 0v1.094h9.188V8a.219.219 0 0 0-.219-.219h-8.75A.219.219 0 0 0 3.406 8Zm9.188 5.25v-2.844H3.406v2.844a.219.219 0 0 0 .219.219h8.75a.219.219 0 0 0 .219-.219Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCreditCardHome);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCreditCardHome;
    }
}
