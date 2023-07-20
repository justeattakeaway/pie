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

const componentSelector = 'icon-pick-up';

export class IconPickUp extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pickUp';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pickUp', '', null, 'IconPickUp');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pickUp', '', this.size, 'IconPickUp');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pickUp"><g clip-path="url(#prefix__clip0_4_159)"><path d="M8.875 2.531H15V1.22H8.875a4.375 4.375 0 0 0-3.929 2.625H3.257l-.122.052A2.047 2.047 0 0 0 1.962 5.2a2.205 2.205 0 0 0 .788 2.275l-.796 5.95c-.012.365.12.72.367.989a1.163 1.163 0 0 0 .875.367h8.671a1.162 1.162 0 0 0 .875-.367 1.364 1.364 0 0 0 .36-1.05l-.77-5.793a2.695 2.695 0 0 0 1.478-1.54H15V4.72h-2.266l-.123.507a1.558 1.558 0 0 1-1.864 1.252l-.34-.062-1.13 1.129a.578.578 0 0 1-.805 0 .586.586 0 0 1-.12-.64.551.551 0 0 1 .13-.183l1.618-1.54a.752.752 0 0 0 .184-.875.77.77 0 0 0-.718-.49H6.46a2.888 2.888 0 0 1 2.415-1.286Zm0 6.493a1.873 1.873 0 0 0 1.33-.551l.665-.666h.087l.753 5.662H3.266l.761-5.688h3.098a1.873 1.873 0 0 0 1.75 1.242Zm-.639-3.868-.665.63c-.198.192-.35.425-.446.683h-3.5a.936.936 0 0 1-.359-.875.717.717 0 0 1 .324-.394h4.646v-.044Z"></path></g><defs><clipPath id="prefix__clip0_4_159"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconPickUp);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPickUp;
    }
}
