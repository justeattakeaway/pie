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

const componentSelector = 'icon-recycle';

export class IconRecycle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--recycle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--recycle', '', null, 'IconRecycle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--recycle', '', this.size, 'IconRecycle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--recycle"><path d="M14.58 12.279a1.496 1.496 0 0 1-1.33.778h-3.246l.945.928-.928.936-2.546-2.546 2.546-2.529.928.937-.945.936h3.246a.21.21 0 0 0 .193-.114.184.184 0 0 0 0-.201l-1.55-2.625 1.13-.665 1.557 2.625a1.505 1.505 0 0 1 0 1.54ZM8.193 2.566l1.6 2.704-1.33-.385-.367 1.26 3.448.98 1.006-3.412-1.26-.377-.367 1.252L9.32 1.875a1.549 1.549 0 0 0-2.625 0L5.218 4.369l1.128.665 1.462-2.468c.113-.183.27-.183.385 0Zm-3.86 5.872.43 1.312 1.25-.402-1.075-3.36-3.43 1.058.367 1.252 1.208-.368-1.654 2.826a1.531 1.531 0 0 0 1.321 2.301h3.028v-1.312H2.75a.21.21 0 0 1-.192-.114.184.184 0 0 1 0-.201l1.776-2.992Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconRecycle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconRecycle;
    }
}
