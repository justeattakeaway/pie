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

const componentSelector = 'icon-check-circle-filled';

export class IconCheckCircleFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--checkCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircleFilled', '', null, 'IconCheckCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircleFilled', '', this.size, 'IconCheckCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--checkCircleFilled"><path d="m13.985 4.815-5.04 5.425a1.181 1.181 0 0 1-1.352.282 1.216 1.216 0 0 1-.398-.282L4.99 7.781l.98-.875 2.117 2.38 5.163-5.591a6.737 6.737 0 1 0 .752 1.12h-.017Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCheckCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCheckCircleFilled;
    }
}
