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

const componentSelector = 'icon-copy';

export class IconCopy extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--copy';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--copy', '', null, 'IconCopy');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--copy', '', this.size, 'IconCopy');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--copy"><g clip-path="url(#prefix__clip0_1597_572)"><path d="M8.184 6.501h-3.44v1.356h3.44V6.502Z"></path><path d="M8.184 9.135h-3.44v1.356h3.44V9.135Z"></path><path d="M14.212 1.627a1.356 1.356 0 0 0-.875-.56L7.265 0A1.374 1.374 0 0 0 5.69 1.111l-.166.963h1.32l.123-.726a.061.061 0 0 1 .07-.044l6.073 1.041.044.079-1.085 6.326v3.036a1.356 1.356 0 0 0 .97-1.067l1.4-8.094a1.391 1.391 0 0 0-.227-.998Z"></path><path d="M9.54 14H3.415a1.365 1.365 0 0 1-1.365-1.365V4.428A1.356 1.356 0 0 1 3.389 3.07h6.125a1.357 1.357 0 0 1 1.365 1.357v8.19A1.366 1.366 0 0 1 9.539 14ZM3.415 4.375a.061.061 0 0 0-.061.061v8.19a.061.061 0 0 0 .06.062H9.54a.07.07 0 0 0 .07-.062V4.428a.07.07 0 0 0-.07-.053H3.415Z"></path></g><defs><clipPath id="prefix__clip0_1597_572"><rect width="14" height="14" transform="translate(1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconCopy);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCopy;
    }
}
