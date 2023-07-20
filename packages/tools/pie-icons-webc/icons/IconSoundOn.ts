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

const componentSelector = 'icon-sound-on';

export class IconSoundOn extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--soundOn';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOn', '', null, 'IconSoundOn');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOn', '', this.size, 'IconSoundOn');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--soundOn"><path d="m11.5 1.219-.193.183A21.624 21.624 0 0 1 9.348 3.1a23.625 23.625 0 0 1-2.406 1.619H4.5A1.54 1.54 0 0 0 2.969 6.25v3.5A1.54 1.54 0 0 0 4.5 11.281h2.441c.837.487 1.64 1.028 2.407 1.619a22.87 22.87 0 0 1 1.986 1.697l.192.184h1.505V1.22H11.5ZM4.281 9.75v-3.5a.219.219 0 0 1 .219-.219h1.969V9.97H4.5a.219.219 0 0 1-.219-.219Zm7.438 3.412c-.508-.463-1.033-.875-1.566-1.312a26.812 26.812 0 0 0-2.372-1.601V5.75c.82-.49 1.61-1.024 2.372-1.601.533-.411 1.058-.875 1.566-1.313v10.325Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSoundOn);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSoundOn;
    }
}
