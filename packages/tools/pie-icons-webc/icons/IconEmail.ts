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

const componentSelector = 'icon-email';

export class IconEmail extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--email';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--email', '', null, 'IconEmail');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--email', '', this.size, 'IconEmail');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--email"><path d="M13.451 2.802H2.55A1.566 1.566 0 0 0 1 4.36v7.28a1.566 1.566 0 0 0 1.566 1.557h10.885A1.566 1.566 0 0 0 15 11.64V4.36a1.566 1.566 0 0 0-1.549-1.558Zm.254 2.17v6.204L10.354 8.08l3.351-3.107ZM7.58 9.846a.647.647 0 0 0 .884 0l.945-.875 3.15 2.914H3.362l3.22-2.923.998.884Zm5.145-5.731L8 8.472 3.196 4.097l9.529.018ZM5.603 8.079 2.295 11.08V5.069l3.308 3.01Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEmail);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEmail;
    }
}
