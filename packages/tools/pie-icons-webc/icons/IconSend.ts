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

const componentSelector = 'icon-send';

export class IconSend extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--send';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--send', '', null, 'IconSend');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--send', '', this.size, 'IconSend');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--send"><path d="M14.457 1.525a.937.937 0 0 0-.665-.271.665.665 0 0 0-.297.052L1.814 5.13a.936.936 0 0 0 0 1.75l2.047.875v4.454h4.305L9.13 14.3a.936.936 0 0 0 .83.516h.045a.945.945 0 0 0 .83-.621L14.65 2.558a.936.936 0 0 0 .061-.342.918.918 0 0 0-.254-.691ZM3.257 6.04l8.322-2.73-4.585 4.27-3.737-1.54Zm1.9 4.804V8.219l.778.324.726.332.263.578.638 1.4-2.406-.01Zm4.75 1.96L7.94 8.499l4.873-4.541-2.905 8.846Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSend);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSend;
    }
}
