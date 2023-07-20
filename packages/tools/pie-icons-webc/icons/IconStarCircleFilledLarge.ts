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

const componentSelector = 'icon-star-circle-filled-large';

export class IconStarCircleFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--starCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--starCircleFilledLarge', '', null, 'IconStarCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--starCircleFilledLarge', '', this.size, 'IconStarCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--starCircleFilledLarge"><path d="m17.829 16.866.656-.639 1.164-1.128-1.602-.236-.91-.132-.41-.822-.718-1.453-.718 1.453-.411.822-.91.132-1.601.236 1.163 1.128.657.64-.158.91-.271 1.6 1.435-.752.814-.429.813.429 1.435.753-.27-1.602-.158-.91Z"></path><path fill-rule="evenodd" d="M16 3.75C9.245 3.75 3.75 9.245 3.75 16S9.245 28.25 16 28.25 28.25 22.755 28.25 16 22.755 3.75 16 3.75Zm2.292 9.38 3.36.49h-.017a.873.873 0 0 1 .49 1.488l-2.433 2.37.578 3.343a.877.877 0 0 1-1.278.919l-3-1.575-3.002 1.575a.871.871 0 0 1-.928-.061.884.884 0 0 1-.35-.858l.578-3.342-2.433-2.371a.873.873 0 0 1 .49-1.488l3.36-.49 1.505-3.045c.15-.297.464-.446.788-.446s.639.149.787.446l1.505 3.045Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconStarCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconStarCircleFilledLarge;
    }
}
