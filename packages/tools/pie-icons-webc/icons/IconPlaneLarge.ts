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

const componentSelector = 'icon-plane-large';

export class IconPlaneLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--planeLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--planeLarge', '', null, 'IconPlaneLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--planeLarge', '', this.size, 'IconPlaneLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--planeLarge"><path d="m20.786 28.582-2.905-.97a6.011 6.011 0 0 0-3.762 0l-2.905.97-.062-2.143.456-.263a1.75 1.75 0 0 0 .874-1.531v-3.894l-7.455 1.313V18.45a2.214 2.214 0 0 1 1.13-1.916l6.343-3.868V7.25a3.5 3.5 0 1 1 7 0v5.416l6.352 3.894a2.17 2.17 0 0 1 1.103 1.89v3.614L19.5 20.75v3.894a1.75 1.75 0 0 0 .875 1.531l.455.263-.044 2.143ZM16 25.555a7.75 7.75 0 0 1 1.951.254 3.5 3.5 0 0 1-.201-1.164v-6.02l7.455 1.321V18.45a.446.446 0 0 0-.227-.385L17.75 13.69V7.25a1.75 1.75 0 0 0-3.5 0v6.405L7.057 18.03a.463.463 0 0 0-.262.402v1.532l7.455-1.339v5.985c0 .396-.069.79-.201 1.164A7.748 7.748 0 0 1 16 25.555Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPlaneLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPlaneLarge;
    }
}
