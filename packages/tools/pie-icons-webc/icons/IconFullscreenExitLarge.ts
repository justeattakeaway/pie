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

const componentSelector = 'icon-fullscreen-exit-large';

export class IconFullscreenExitLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--fullscreenExitLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExitLarge', '', null, 'IconFullscreenExitLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExitLarge', '', this.size, 'IconFullscreenExitLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--fullscreenExitLarge"><path d="m21.25 4.188-1.75-.875V12.5h9.132l-.986-1.75H21.25V4.187Z"></path><path d="m4.354 21.25-.986-1.75H12.5v9.188l-1.75-.875V21.25H4.354Z"></path><path d="m28.688 19.5-.875 1.75H21.25v6.396l-1.75.986V19.5h9.188Z"></path><path d="m10.75 4.354 1.75-.986V12.5H3.312l.876-1.75h6.562V4.354Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFullscreenExitLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFullscreenExitLarge;
    }
}
