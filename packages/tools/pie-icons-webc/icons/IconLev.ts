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

const componentSelector = 'icon-lev';

export class IconLev extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--lev';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--lev', '', null, 'IconLev');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--lev', '', this.size, 'IconLev');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--lev"><g clip-path="url(#prefix__clip0_18_2449)"><path d="M2.969 3.844H7.78v8.426H6.47V5.156H4.28c0 2.249-.332 6.782-3.281 6.782v-1.313c1.75 0 1.969-3.841 1.969-6.125v-.656ZM15 9.899a2.45 2.45 0 0 1-2.695 2.327H9.313V3.81h2.835a2.231 2.231 0 0 1 2.467 2.266 1.96 1.96 0 0 1-1.12 1.75A2.109 2.109 0 0 1 15 9.899Zm-4.463-2.477h1.47a1.242 1.242 0 0 0 1.374-1.268 1.223 1.223 0 0 0-1.365-1.26H10.53l.008 2.528ZM13.75 9.82a1.303 1.303 0 0 0-1.47-1.339h-1.75v2.625h1.75A1.293 1.293 0 0 0 13.74 9.82h.009Z"></path></g><defs><clipPath id="prefix__clip0_18_2449"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconLev);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLev;
    }
}
