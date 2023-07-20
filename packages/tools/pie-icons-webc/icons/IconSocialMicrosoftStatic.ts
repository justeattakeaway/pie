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

const componentSelector = 'icon-social-microsoft-static';

export class IconSocialMicrosoftStatic extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--microsoftStatic';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--microsoftStatic', '', null, 'IconSocialMicrosoftStatic');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--microsoftStatic', '', this.size, 'IconSocialMicrosoftStatic');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--microsoftStatic"><g clip-path="url(#prefix__clip0_2820_3494)"><path fill="#00A3EE" d="M7.372 14.5H1.5V8.618h5.905L7.372 14.5Z"></path><path fill="#FFB700" d="M8.595 14.5H14.5V8.618H8.595V14.5Z"></path><path fill="#F15121" d="M7.372 7.382H1.5V1.5h5.905l-.033 5.882Z"></path><path fill="#7EB801" d="M14.5 7.382H8.595V1.5H14.5v5.882Z"></path></g><defs><clipPath id="prefix__clip0_2820_3494"><rect width="14" height="14" fill="#fff" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialMicrosoftStatic);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialMicrosoftStatic;
    }
}
