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

const componentSelector = 'icon-key';

export class IconKey extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--key';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--key', '', null, 'IconKey');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--key', '', this.size, 'IconKey');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--key"><path d="M6.171 5.375a.875.875 0 1 1-.796-.875.823.823 0 0 1 .796.875Zm7.823 5.11v3.386h-3.5l-.665-.665.148-1.172-.227-.237L8.639 12l-.446-.42v-1.287l-.123-.122-1.199.07-.735-.735a.184.184 0 0 0-.227 0l-.306.158a1.523 1.523 0 0 1-1.75-.307L1.664 7.125a1.479 1.479 0 0 1-.315-1.697A8.199 8.199 0 0 1 3.021 3.02 8.4 8.4 0 0 1 5.375 1.36a1.54 1.54 0 0 1 1.75.297L9.339 3.88a1.496 1.496 0 0 1 .306 1.689l-.105.227a.193.193 0 0 0 0 .228l4.454 4.462Zm-1.313.534L8.64 6.95a1.496 1.496 0 0 1-.271-1.75l.087-.184a.21.21 0 0 0 0-.218L6.189 2.584a.201.201 0 0 0-.237 0A6.904 6.904 0 0 0 2.55 5.96a.184.184 0 0 0 .043.219l2.223 2.223a.184.184 0 0 0 .219 0l.253-.132a1.496 1.496 0 0 1 1.75.263l.333.341 1.199-.07.927.945v.761l.691-.122 1.147 1.111-.123.998h1.461l.01-1.48Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconKey);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconKey;
    }
}
