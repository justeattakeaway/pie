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

const componentSelector = 'icon-social-instagram-circle-large';

export class IconSocialInstagramCircleLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--instagramCircleLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--instagramCircleLarge', '', null, 'IconSocialInstagramCircleLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--instagramCircleLarge', '', this.size, 'IconSocialInstagramCircleLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--instagramCircleLarge"><path d="M16.25 18.251a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path fill-rule="evenodd" d="M12.32 10.565c-.394.153-.729.358-1.063.693a2.936 2.936 0 0 0-.692 1.06c-.15.381-.25.818-.278 1.457-.03.64-.037.844-.037 2.474 0 1.63.007 1.834.037 2.474.029.639.131 1.075.278 1.456.153.395.358.73.692 1.064.335.334.669.539 1.064.692.38.15.817.25 1.456.278.639.03.844.037 2.473.037 1.63 0 1.834-.007 2.473-.037.64-.029 1.076-.131 1.456-.278.395-.153.73-.358 1.064-.692.334-.335.539-.669.692-1.064.15-.38.25-.817.278-1.456.03-.64.037-.845.037-2.474 0-1.63-.007-1.835-.037-2.474-.029-.639-.131-1.076-.278-1.456a2.96 2.96 0 0 0-.69-1.062 2.942 2.942 0 0 0-1.063-.692c-.38-.15-.817-.25-1.456-.278-.64-.03-.844-.037-2.474-.037-1.629 0-1.834.007-2.473.037-.641.026-1.078.129-1.458.278Zm7.854 2.483a.72.72 0 1 1-1.44 0 .72.72 0 0 1 1.44 0Zm-3.924 6.284a3.08 3.08 0 1 1 0-6.162 3.08 3.08 0 0 1 0 6.162Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M9.444 6.064a12.25 12.25 0 1 1 13.612 20.372A12.25 12.25 0 0 1 9.444 6.064Zm.972 18.916A10.5 10.5 0 1 0 22.084 7.52a10.5 10.5 0 0 0-11.666 17.46Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialInstagramCircleLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialInstagramCircleLarge;
    }
}
