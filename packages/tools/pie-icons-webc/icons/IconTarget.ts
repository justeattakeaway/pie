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

const componentSelector = 'icon-target';

export class IconTarget extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--target';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--target', '', null, 'IconTarget');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--target', '', this.size, 'IconTarget');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--target"><path d="m8.56 11.229.761-1.75A1.968 1.968 0 0 0 6.54 6.696l-1.75.77a3.273 3.273 0 1 1 3.788 3.763H8.56ZM8 2.094A5.915 5.915 0 0 0 2.094 8c.004.205.022.41.052.613l1.269-.56a.114.114 0 0 1 0-.053A4.594 4.594 0 1 1 8 12.594l-.578 1.269c.193 0 .385.043.578.043A5.906 5.906 0 1 0 8 2.094ZM6.39 9.628 3.362 10.94l.718.455c.22.142.409.33.551.551l.446.709L6.39 9.628ZM8 7.518a.464.464 0 0 1 .42.648l-2.8 6.493a.445.445 0 0 1-.42.28.472.472 0 0 1-.394-.21L3.53 12.646a.571.571 0 0 0-.15-.14l-2.082-1.312a.463.463 0 0 1 .062-.814l6.475-2.818a.516.516 0 0 1 .192 0L8 7.52Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconTarget);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconTarget;
    }
}
