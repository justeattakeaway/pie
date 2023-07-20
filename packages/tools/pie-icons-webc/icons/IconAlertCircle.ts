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

const componentSelector = 'icon-alert-circle';

export class IconAlertCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--alertCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--alertCircle', '', null, 'IconAlertCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--alertCircle', '', this.size, 'IconAlertCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--alertCircle"><path d="M8 14.781A6.782 6.782 0 1 1 14.781 8 6.79 6.79 0 0 1 8 14.781Zm0-12.25A5.469 5.469 0 1 0 8 13.47 5.469 5.469 0 0 0 8 2.53Z"></path><path d="M7.055 4.631a3.5 3.5 0 0 1 1.89 0l-.481 4.244h-.928l-.481-4.244Zm1.82 5.994a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconAlertCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconAlertCircle;
    }
}
