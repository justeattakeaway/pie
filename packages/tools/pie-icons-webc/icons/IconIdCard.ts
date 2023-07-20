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

const componentSelector = 'icon-id-card';

export class IconIdCard extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--idCard';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--idCard', '', null, 'IconIdCard');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--idCard', '', this.size, 'IconIdCard');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--idCard"><path d="M5.813 9.094h-.875a1.54 1.54 0 0 1-1.532-1.531v-.875a1.54 1.54 0 0 1 1.531-1.532h.875a1.54 1.54 0 0 1 1.532 1.532v.875a1.54 1.54 0 0 1-1.532 1.53Zm-.875-2.625a.219.219 0 0 0-.22.218v.875a.219.219 0 0 0 .22.22h.875a.219.219 0 0 0 .218-.22v-.875a.219.219 0 0 0-.218-.218h-.875Z"></path><path d="M13.25 2.969H2.75A1.54 1.54 0 0 0 1.219 4.5v7a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531v-7a1.54 1.54 0 0 0-1.531-1.531Zm.219 8.531a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-7a.219.219 0 0 1 .219-.219h10.5a.219.219 0 0 1 .219.219v7Z"></path><path d="m11.491 10.406.657-1.312H9.103v1.312"></path></svg>`;
    }
}

customElements.define(componentSelector, IconIdCard);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconIdCard;
    }
}
