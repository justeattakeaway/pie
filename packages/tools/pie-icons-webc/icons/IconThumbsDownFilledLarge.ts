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

const componentSelector = 'icon-thumbs-down-filled-large';

export class IconThumbsDownFilledLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--thumbsDownFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsDownFilledLarge', '', null, 'IconThumbsDownFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsDownFilledLarge', '', this.size, 'IconThumbsDownFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--thumbsDownFilledLarge"><path d="m26.587 17.242-4.724 1.164.97 4.839c.145.65.093 1.33-.148 1.951a3.43 3.43 0 0 1-3.754 2.179s-4.611-9.249-5.39-10.404c-.307-.43-.585-.88-.831-1.347a12.119 12.119 0 0 1-1.085-5.312 8.521 8.521 0 0 1 1.094-4.374c.245-.454.517-.892.814-1.313h8.88A4.375 4.375 0 0 1 26.5 7.39l1.986 6.545a2.625 2.625 0 0 1-1.899 3.307ZM11.18 5.072a10.29 10.29 0 0 0-1.304 5.24 13.842 13.842 0 0 0 1.286 6.126c.088.175.184.332.271.48H3.75V4.626h7.682l-.253.446Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconThumbsDownFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconThumbsDownFilledLarge;
    }
}
