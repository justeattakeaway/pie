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

const componentSelector = 'icon-upload-large';

export class IconUploadLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--uploadLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--uploadLarge', '', null, 'IconUploadLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--uploadLarge', '', this.size, 'IconUploadLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--uploadLarge"><path d="m11.546 9.796-1.233-1.234 4.453-4.453a1.75 1.75 0 0 1 2.468 0l4.453 4.453-1.233 1.234-3.579-3.57V19.5h-1.75V6.226l-3.579 3.57ZM23 12.5h-3.5v1.75H23a.875.875 0 0 1 .875.875V26.5a.875.875 0 0 1-.875.875H9a.875.875 0 0 1-.875-.875V15.125A.875.875 0 0 1 9 14.25h3.5V12.5H9a2.625 2.625 0 0 0-2.625 2.625V26.5A2.625 2.625 0 0 0 9 29.125h14a2.625 2.625 0 0 0 2.625-2.625V15.125A2.625 2.625 0 0 0 23 12.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUploadLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUploadLarge;
    }
}
