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

const componentSelector = 'icon-fries';

export class IconFries extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--fries';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--fries', '', null, 'IconFries');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fries', '', this.size, 'IconFries');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--fries"><path d="M12.769 5.725a.639.639 0 0 0-.648-.079l.674-2.152L11.5 3.1l-.875 3.036c-.297.07-.586.131-.875.175l.543-5.031-1.313-.149-.604 5.311H7.72L7.195 1.5l-1.313.14.508 4.69c-.306 0-.621-.105-.875-.175L4.5 2.619l-1.269.341.727 2.721h-.106a.647.647 0 0 0-.874.683l.778 6.238a1.531 1.531 0 0 0 1.514 1.34h5.46a1.531 1.531 0 0 0 1.514-1.34l.779-6.238a.63.63 0 0 0-.254-.639Zm-1.82 6.65a.227.227 0 0 1-.219.193H5.27a.227.227 0 0 1-.219-.193L4.412 7.23c2.336.735 4.84.735 7.176 0l-.64 5.145Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFries);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFries;
    }
}
