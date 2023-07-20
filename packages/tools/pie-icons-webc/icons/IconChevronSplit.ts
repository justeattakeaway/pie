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

const componentSelector = 'icon-chevron-split';

export class IconChevronSplit extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--chevronSplit';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronSplit', '', null, 'IconChevronSplit');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronSplit', '', this.size, 'IconChevronSplit');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chevronSplit"><path d="M11.307 6.25 8 2.864 4.693 6.25l-.902-.936 3.5-3.597a1.068 1.068 0 0 1 1.444 0l3.509 3.658-.937.875Z"></path><path d="M4.693 9.75 8 13.049l3.307-3.378.893.919-3.5 3.596a1.068 1.068 0 0 1-1.444 0l-3.5-3.561.937-.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChevronSplit);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChevronSplit;
    }
}
