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

const componentSelector = 'icon-sync';

export class IconSync extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--sync';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sync', '', null, 'IconSync');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sync', '', this.size, 'IconSync');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--sync"><path d="M8.875 2.164A5.906 5.906 0 0 1 13.906 8a5.845 5.845 0 0 1-1.75 4.174l-.927-.928a4.587 4.587 0 0 0 0-6.492 4.507 4.507 0 0 0-2.354-1.251V4.78L6.25 2.75 8.875 1v1.164ZM3.406 8a4.568 4.568 0 0 0 1.348 3.246 4.506 4.506 0 0 0 2.371 1.252V11.22l2.625 2.03L7.125 15v-1.164A5.906 5.906 0 0 1 2.094 8a5.845 5.845 0 0 1 1.75-4.174l.91.928A4.567 4.567 0 0 0 3.406 8Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSync);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSync;
    }
}
