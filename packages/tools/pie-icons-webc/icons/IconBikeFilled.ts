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

const componentSelector = 'icon-bike-filled';

export class IconBikeFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--bikeFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bikeFilled', '', null, 'IconBikeFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bikeFilled', '', this.size, 'IconBikeFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bikeFilled"><path d="M12.138 7.405 11.01 4.159c0-.114 0-.228.167-.28l1.198-.447v-1.4l-1.627.613a1.523 1.523 0 0 0-.998 1.934l.36 1.015h-.36a2.433 2.433 0 0 0-1.925.962l-1.207 1.61-1.059-2.135h.691V4.72h-3.5V6.03h1.348l.717 1.461a2.87 2.87 0 0 0-.735-.105 2.826 2.826 0 1 0 2.827 2.818v-.201l1.968-2.66a1.111 1.111 0 0 1 .875-.438h.832l.253.718a2.844 2.844 0 1 0 1.313-.219h-.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBikeFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBikeFilled;
    }
}
