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

const componentSelector = 'icon-user-circle-filled';

export class IconUserCircleFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--userCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userCircleFilled', '', null, 'IconUserCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userCircleFilled', '', this.size, 'IconUserCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userCircleFilled"><path d="M8 7.37a1.12 1.12 0 1 0 0-2.24 1.12 1.12 0 0 0 0 2.24Z"></path><path d="M8 1.438a6.562 6.562 0 0 0-4.944 10.876c.298.322.626.615.98.875a6.537 6.537 0 0 0 7.928 0c.352-.258.678-.551.971-.875A6.554 6.554 0 0 0 8 1.438Zm0 2.38A2.433 2.433 0 1 1 5.567 6.25 2.441 2.441 0 0 1 8 3.818Zm4.042 7.524c-.14.167-.288.324-.446.482a2.834 2.834 0 0 0-.516-.455 2.992 2.992 0 0 0-1.663-.49H6.582a2.992 2.992 0 0 0-1.662.49c-.19.13-.363.283-.516.455a7.637 7.637 0 0 1-.447-.482 5.84 5.84 0 0 1-.332-.533c.117-.123.243-.237.376-.341a4.235 4.235 0 0 1 2.625-.875h2.791a4.235 4.235 0 0 1 2.626.874c.133.105.259.219.376.342a5.814 5.814 0 0 1-.377.534Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserCircleFilled;
    }
}
