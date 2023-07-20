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

const componentSelector = 'icon-fullscreen-exit';

export class IconFullscreenExit extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--fullscreenExit';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExit', '', null, 'IconFullscreenExit');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExit', '', this.size, 'IconFullscreenExit');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--fullscreenExit"><path d="M6.031 1.123 4.72 1.86V4.72H1.766L1.109 6.03h4.922V1.123Z"></path><path d="m9.969 1.11 1.312.656v2.953h2.859l.737 1.312H9.97V1.11Z"></path><path d="m14.89 9.969-.656 1.312h-2.953v2.859l-1.312.737V9.97h4.922Z"></path><path d="m1.123 9.969.737 1.312H4.72v2.953l1.312.657V9.969H1.123Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFullscreenExit);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFullscreenExit;
    }
}
