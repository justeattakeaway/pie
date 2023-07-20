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

const componentSelector = 'icon-lightning-large';

export class IconLightningLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--lightningLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--lightningLarge', '', null, 'IconLightningLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--lightningLarge', '', this.size, 'IconLightningLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--lightningLarge"><path d="m14.539 3.75-6.93 13.274a1.75 1.75 0 0 0 1.549 2.563h5.967v8.663h2.354l6.904-13.125a1.75 1.75 0 0 0-1.55-2.564h-5.958V3.75H14.54Zm8.295 10.544-5.959 11.331V19.29a1.453 1.453 0 0 0-1.461-1.453H9.158l5.967-11.462v6.431a1.452 1.452 0 0 0 1.453 1.453l6.256.035Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLightningLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLightningLarge;
    }
}
