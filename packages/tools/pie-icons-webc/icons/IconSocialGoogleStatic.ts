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

const componentSelector = 'icon-social-google-static';

export class IconSocialGoogleStatic extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--googleStatic';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--googleStatic', '', null, 'IconSocialGoogleStatic');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--googleStatic', '', this.size, 'IconSocialGoogleStatic');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--googleStatic"><path fill="#FBC02D" d="M14.864 6.63H14.3V6.6H8v2.8h3.956A4.198 4.198 0 0 1 3.8 8 4.2 4.2 0 0 1 8 3.8c1.07 0 2.045.404 2.786 1.064l1.98-1.98A6.968 6.968 0 0 0 8 1a7 7 0 1 0 6.864 5.63Z"></path><path fill="#E53935" d="m1.807 4.742 2.3 1.686A4.198 4.198 0 0 1 8 3.8c1.07 0 2.045.404 2.786 1.064l1.98-1.98A6.968 6.968 0 0 0 8 1a6.996 6.996 0 0 0-6.193 3.742Z"></path><path fill="#4CAF50" d="M8 15c1.808 0 3.45-.692 4.693-1.817l-2.166-1.833A4.168 4.168 0 0 1 8 12.2a4.198 4.198 0 0 1-3.95-2.781l-2.282 1.759A6.995 6.995 0 0 0 8 15Z"></path><path fill="#1565C0" d="m14.864 6.63-.006-.03H8v2.8h3.956a4.21 4.21 0 0 1-1.43 1.95l2.167 1.833C12.54 13.323 15 11.5 15 8c0-.47-.048-.928-.136-1.37Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialGoogleStatic);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialGoogleStatic;
    }
}
