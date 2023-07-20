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

const componentSelector = 'icon-over21-filled';

export class IconOver21Filled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--over21Filled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--over21Filled', '', null, 'IconOver21Filled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--over21Filled', '', this.size, 'IconOver21Filled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--over21Filled"><path d="M12.375 2.313h-8.75a1.313 1.313 0 0 0-1.313 1.312v8.75a1.313 1.313 0 0 0 1.313 1.313h8.75a1.313 1.313 0 0 0 1.313-1.313v-8.75a1.313 1.313 0 0 0-1.313-1.313ZM6.617 9.947H3.625v-.573c0-.8.464-1.138 1.129-1.492.665-.354.875-.508.875-.875 0-.368-.254-.477-.617-.477a1.129 1.129 0 0 0-.875.394l-.481-.59a1.842 1.842 0 0 1 1.421-.596c.875 0 1.427.473 1.427 1.243 0 .687-.438 1.107-1.15 1.452-.644.324-.876.503-.876.722v.044H6.6l.018.748Zm2.354 0H8.14V6.8l-.683.254-.28-.704 1.195-.538h.6v4.134Zm3.404-1.51H11.5v.876h-.875v-.876H9.75v-.874h.875v-.875h.875v.875h.875v.875Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconOver21Filled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconOver21Filled;
    }
}
