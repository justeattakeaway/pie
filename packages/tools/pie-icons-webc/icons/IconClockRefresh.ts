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

const componentSelector = 'icon-clock-refresh';

export class IconClockRefresh extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--clockRefresh';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--clockRefresh', '', null, 'IconClockRefresh');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--clockRefresh', '', this.size, 'IconClockRefresh');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--clockRefresh"><path d="M8 14.781V13.47a5.486 5.486 0 1 0-4.812-2.949l.936-.945.464 3.623-3.404-.683L2.225 11.5A6.711 6.711 0 0 1 1.254 8 6.781 6.781 0 1 1 8 14.781Z"></path><path d="m10.013 10.905-2.95-1.768V5.095h1.313v3.299l2.31 1.391-.673 1.12Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconClockRefresh);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconClockRefresh;
    }
}
