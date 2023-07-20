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

const componentSelector = 'icon-consent-large';

export class IconConsentLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--consentLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--consentLarge', '', null, 'IconConsentLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--consentLarge', '', this.size, 'IconConsentLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--consentLarge"><path d="m14.04 18.616-2.494-2.809-1.312 1.164 2.66 3.002a1.537 1.537 0 0 0 2.257-.009l6.72-7.245-1.286-1.19-6.571 7.079.026.008Z"></path><path d="M27.375 23.543V9.332a2.633 2.633 0 0 0-2.625-2.625H7.25a2.633 2.633 0 0 0-2.625 2.625v14.21h-1.75v1.75h26.25v-1.75h-1.75Zm-1.75 0H6.375V9.332c0-.482.394-.875.875-.875h17.5c.481 0 .875.393.875.875v14.21Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconConsentLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconConsentLarge;
    }
}
