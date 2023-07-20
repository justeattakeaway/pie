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

const componentSelector = 'icon-curry-large';

export class IconCurryLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--curryLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--curryLarge', '', null, 'IconCurryLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--curryLarge', '', this.size, 'IconCurryLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--curryLarge"><path d="m30 5.903-1.523-.875-4.305 7.603a4.446 4.446 0 0 0-.577-.709 4.577 4.577 0 0 0-4.55-1.172 4.576 4.576 0 0 0-8.628 0 4.464 4.464 0 0 0-1.268-.193 4.594 4.594 0 0 0-4.524 3.693h-1.75v2.625a7.875 7.875 0 0 0 5.39 7.446l.508 2.179h14.454l.508-2.179a7.876 7.876 0 0 0 5.39-7.446V14.25H25.24L30 5.903Zm-20.851 6.43a2.8 2.8 0 0 1 1.444.412.875.875 0 0 0 .874 0 .875.875 0 0 0 .473-.7 2.826 2.826 0 0 1 5.635 0 .875.875 0 0 0 .473.7.875.875 0 0 0 .875 0A2.817 2.817 0 0 1 23 14.25H6.471a2.835 2.835 0 0 1 2.678-1.916Zm18.226 4.542a6.125 6.125 0 0 1-4.594 5.906l-.516.132-.429 1.837H10.164l-.429-1.837-.516-.132a6.125 6.125 0 0 1-4.594-5.906V16h22.75v.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCurryLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCurryLarge;
    }
}
