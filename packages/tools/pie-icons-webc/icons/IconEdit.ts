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

const componentSelector = 'icon-edit';

export class IconEdit extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--edit';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--edit', '', null, 'IconEdit');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--edit', '', this.size, 'IconEdit');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--edit"><path d="M14.44 3.502 12.498 1.56a1.54 1.54 0 0 0-2.17 0L2.033 9.855a1.61 1.61 0 0 0-.455.945l-.447 4.069 4.07-.447c.356-.043.688-.203.944-.455l8.295-8.295a1.54 1.54 0 0 0 0-2.17ZM5.218 13.04a.236.236 0 0 1-.167.07l-2.432.271.262-2.432a.297.297 0 0 1 .08-.166l6.124-6.126 2.249 2.25-6.116 6.133Zm8.295-8.295-1.217 1.207-2.248-2.248 1.207-1.217c.043-.04.1-.061.158-.06a.21.21 0 0 1 .157.06l1.943 1.943a.236.236 0 0 1 0 .315Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEdit);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEdit;
    }
}
