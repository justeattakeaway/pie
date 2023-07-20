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

const componentSelector = 'icon-pin-at-home';

export class IconPinAtHome extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pinAtHome';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHome', '', null, 'IconPinAtHome');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHome', '', this.size, 'IconPinAtHome');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pinAtHome"><path d="m14.694 7.125-.91.875s-.298-.289-.753-.7v1.575H11.72V6.154a27.329 27.329 0 0 0-3.5-2.713.534.534 0 0 0-.403 0 26.933 26.933 0 0 0-3.5 2.704v6.44h8.75v1.313H2.97V7.335c-.455.411-.744.691-.753.7l-.91-.91a42.972 42.972 0 0 1 5.819-4.813 1.75 1.75 0 0 1 1.75-.008 42.882 42.882 0 0 1 5.819 4.821ZM7.124 9.75a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm1.75.875a.875.875 0 1 0 1.751 0 .875.875 0 0 0-1.75 0Zm3.5-.875a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPinAtHome);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPinAtHome;
    }
}
