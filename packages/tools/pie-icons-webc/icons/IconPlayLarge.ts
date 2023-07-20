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

const componentSelector = 'icon-play-large';

export class IconPlayLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--playLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--playLarge', '', null, 'IconPlayLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--playLarge', '', this.size, 'IconPlayLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--playLarge"><path d="m8.807 8.361.088.044L23.192 16 8.895 23.595s0 .053-.079.07V8.361h-.009Zm.01-1.75a1.75 1.75 0 0 0-1.75 1.75v15.304a1.75 1.75 0 0 0 2.624 1.47l14.306-7.63a1.75 1.75 0 0 0 0-3.062L9.717 6.865a1.75 1.75 0 0 0-.918-.271l.017.017Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPlayLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPlayLarge;
    }
}
