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

const componentSelector = 'icon-trash-filled-large';

export class IconTrashFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--trashFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--trashFilledLarge', '', null, 'IconTrashFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--trashFilledLarge', '', this.size, 'IconTrashFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--trashFilledLarge"><path d="M19.938 4.625h-7.875l-.876 1.75h9.626l-.875-1.75Z"></path><path d="M3.75 8.125v1.75h2.319l1.601 16.87a2.625 2.625 0 0 0 2.625 2.38h11.428a2.624 2.624 0 0 0 2.625-2.38l1.583-16.87h2.319v-1.75H3.75Zm8.461 6.125h1.75l.63 7.875h-1.75l-.63-7.875Zm6.948 7.875h-1.75l.63-7.875h1.75l-.63 7.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconTrashFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconTrashFilledLarge;
    }
}
