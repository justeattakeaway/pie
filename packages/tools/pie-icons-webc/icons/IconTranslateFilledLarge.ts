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

const componentSelector = 'icon-translate-filled-large';

export class IconTranslateFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--translateFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--translateFilledLarge', '', null, 'IconTranslateFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--translateFilledLarge', '', this.size, 'IconTranslateFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--translateFilledLarge"><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm-.079 15.461a11.906 11.906 0 0 1-2.292-1.461 11.997 11.997 0 0 1-3.5 2.065l-.534-1.383c1.08-.4 2.088-.973 2.984-1.697a10.253 10.253 0 0 1-1.287-1.671l1.208-.814a9.79 9.79 0 0 0 1.094 1.409 8.148 8.148 0 0 0 1.592-2.721h-5.74V11.45h3.5v-.875h1.479v.875h3.5v1.488h-1.172A9.275 9.275 0 0 1 15.72 15.3c-.302.483-.644.94-1.024 1.365.545.443 1.131.832 1.75 1.164l-.525 1.382Zm6.125 2.223-.192-.49-.306-.788h-3.08l-.5 1.278h-1.487l.193-.49.472-1.173.35-.875.21-.516 1.05-2.712v.052l.455-1.129h1.619l2.756 6.825-1.54.018Z"></path><path d="m19.483 17.531-.35.91-.193.482h2.152l-1.076-2.748-.533 1.356Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconTranslateFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconTranslateFilledLarge;
    }
}
