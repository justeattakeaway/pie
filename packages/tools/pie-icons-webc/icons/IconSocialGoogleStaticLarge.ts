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

const componentSelector = 'icon-social-google-static-large';

export class IconSocialGoogleStaticLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--googleStaticLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--googleStaticLarge', '', null, 'IconSocialGoogleStaticLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--googleStaticLarge', '', this.size, 'IconSocialGoogleStaticLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--googleStaticLarge"><g clip-path="url(#prefix__clip0_923_592)"><path fill="#FBC02D" d="M29.728 13.258H28.6V13.2H16v5.6h7.912c-1.154 3.26-4.256 5.6-7.912 5.6a8.4 8.4 0 0 1 0-16.8c2.141 0 4.09.808 5.573 2.127l3.96-3.96C23.033 3.437 19.688 2 16 2 8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14c0-.939-.097-1.855-.272-2.742Z"></path><path fill="#E53935" d="m3.614 9.484 4.6 3.373A8.396 8.396 0 0 1 16 7.6c2.141 0 4.09.808 5.573 2.127l3.96-3.96C23.033 3.437 19.688 2 16 2 10.623 2 5.96 5.036 3.614 9.484Z"></path><path fill="#4CAF50" d="M16 30c3.616 0 6.902-1.384 9.386-3.634l-4.333-3.667A8.337 8.337 0 0 1 16 24.4c-3.641 0-6.733-2.322-7.898-5.562l-4.566 3.517C5.853 26.89 10.56 30 16 30Z"></path><path fill="#1565C0" d="m29.728 13.258-.012-.058H16v5.6h7.912a8.428 8.428 0 0 1-2.86 3.9l.001-.001 4.333 3.667C25.08 26.644 30 23 30 16c0-.939-.097-1.855-.272-2.742Z"></path></g><defs><clipPath id="prefix__clip0_923_592"><rect width="28" height="28" fill="#fff" transform="translate(2 2)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialGoogleStaticLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialGoogleStaticLarge;
    }
}
