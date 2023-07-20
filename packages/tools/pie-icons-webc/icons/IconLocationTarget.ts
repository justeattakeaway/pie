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

const componentSelector = 'icon-location-target';

export class IconLocationTarget extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--locationTarget';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationTarget', '', null, 'IconLocationTarget');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationTarget', '', this.size, 'IconLocationTarget');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--locationTarget"><path d="M14.624 7.344h-1.636a5.05 5.05 0 0 0-4.332-4.332V1.376H7.344v1.636a5.049 5.049 0 0 0-4.332 4.375H1.376V8.7h1.636a5.049 5.049 0 0 0 4.375 4.331v1.636H8.7v-1.68a5.049 5.049 0 0 0 4.288-4.33h1.636V7.343ZM8 11.719A3.719 3.719 0 1 1 11.719 8 3.728 3.728 0 0 1 8 11.719ZM9.417 8A1.417 1.417 0 1 1 8 6.582 1.409 1.409 0 0 1 9.417 8Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLocationTarget);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLocationTarget;
    }
}
