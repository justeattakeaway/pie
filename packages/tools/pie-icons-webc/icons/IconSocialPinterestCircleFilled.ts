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

const componentSelector = 'icon-social-pinterest-circle-filled';

export class IconSocialPinterestCircleFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--pinterestCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinterestCircleFilled', '', null, 'IconSocialPinterestCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinterestCircleFilled', '', this.size, 'IconSocialPinterestCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pinterestCircleFilled"><g clip-path="url(#prefix__clip0_1611_690)"><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm3.211 8.671a2.975 2.975 0 0 1-2.144 1.426 1.88 1.88 0 0 1-1.522-.385.583.583 0 0 1-.131-.122 1.417 1.417 0 0 1-.123-.14l-.044.131c-.105.42-.21.831-.332 1.251a5.04 5.04 0 0 1-.998 1.812l-.105.14v-.053a6.125 6.125 0 0 1 0-2.117c.22-.98.455-1.96.683-2.932a.464.464 0 0 0 0-.245 2.223 2.223 0 0 1 0-1.487 1.164 1.164 0 0 1 .63-.762.761.761 0 0 1 1.076.665c.01.297-.031.593-.122.875-.114.412-.245.823-.36 1.234a.875.875 0 0 0 .893 1.173 1.637 1.637 0 0 0 1.348-.814c.33-.525.512-1.13.525-1.75a2.722 2.722 0 0 0-.245-1.391A2.25 2.25 0 0 0 8.726 5.12a2.835 2.835 0 0 0-2.572.49 2.573 2.573 0 0 0-.552 3.447.324.324 0 0 1 .053.22c-.044.218-.105.428-.158.647-.052.218-.087.157-.218.096a1.978 1.978 0 0 1-.875-.875 3.5 3.5 0 0 1 .48-3.859 3.806 3.806 0 0 1 2.53-1.304 4.533 4.533 0 0 1 2.108.202 3.5 3.5 0 0 1 2.345 3.5 4.288 4.288 0 0 1-.656 2.161Z"></path></g><defs><clipPath id="prefix__clip0_1611_690"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialPinterestCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialPinterestCircleFilled;
    }
}
