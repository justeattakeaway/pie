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

const componentSelector = 'icon-face-happy';

export class IconFaceHappy extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--faceHappy';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--faceHappy', '', null, 'IconFaceHappy');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--faceHappy', '', this.size, 'IconFaceHappy');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--faceHappy"><path d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm0 12.25A5.469 5.469 0 1 1 8 2.53a5.469 5.469 0 0 1 0 10.938Z"></path><path d="M5 6.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"></path><path d="M9.5 6.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"></path><path d="M11.125 9H9.751a1.846 1.846 0 0 1-3.377 0H5a3.168 3.168 0 0 0 6.125 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFaceHappy);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFaceHappy;
    }
}
