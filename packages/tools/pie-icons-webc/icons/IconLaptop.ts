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

const componentSelector = 'icon-laptop';

export class IconLaptop extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--laptop';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--laptop', '', null, 'IconLaptop');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--laptop', '', this.size, 'IconLaptop');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--laptop"><path d="M13.031 9.549V4.5A1.54 1.54 0 0 0 11.5 2.969h-7A1.54 1.54 0 0 0 2.969 4.5v5.049l-1.75 2.625v.201a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531v-.201l-1.75-2.625ZM4.281 4.5a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v4.594H4.28V4.5Zm8.969 8.094H9.566l-.315-.718H6.75l-.315.718H2.75a.229.229 0 0 1-.175-.088l1.4-2.1h8.05l1.4 2.1a.228.228 0 0 1-.175.088Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLaptop);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLaptop;
    }
}
