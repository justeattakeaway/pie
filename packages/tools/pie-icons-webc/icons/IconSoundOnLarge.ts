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

const componentSelector = 'icon-sound-on-large';

export class IconSoundOnLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--soundOnLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnLarge', '', null, 'IconSoundOnLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnLarge', '', this.size, 'IconSoundOnLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--soundOnLarge"><path d="M18.625 3.995a48.276 48.276 0 0 1-4.008 3.439A49.96 49.96 0 0 1 9.63 10.75H6.375a2.625 2.625 0 0 0-2.625 2.625v5.25a2.625 2.625 0 0 0 2.625 2.625H9.63a48.311 48.311 0 0 1 8.995 6.755l.254.245h2.371V3.75h-2.398l-.227.245ZM5.5 18.625v-5.25a.875.875 0 0 1 .875-.875H9v7H6.375a.875.875 0 0 1-.875-.875Zm14 7.823a48.503 48.503 0 0 0-3.841-3.264 48.638 48.638 0 0 0-4.909-3.308v-7.752c1.703-1 3.343-2.105 4.909-3.308A48.502 48.502 0 0 0 19.5 5.552v20.896ZM27.375 16A6.125 6.125 0 0 1 23 21.871v-1.863a4.375 4.375 0 0 0 0-8.015v-1.864A6.125 6.125 0 0 1 27.375 16Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSoundOnLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSoundOnLarge;
    }
}
