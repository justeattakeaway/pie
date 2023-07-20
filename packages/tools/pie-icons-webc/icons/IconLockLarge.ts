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

const componentSelector = 'icon-lock-large';

export class IconLockLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--lockLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--lockLarge', '', null, 'IconLockLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--lockLarge', '', this.size, 'IconLockLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--lockLarge"><path d="M23.875 14.25h-1.75v-3.5a6.125 6.125 0 1 0-12.25 0v3.5h-1.75v-3.5a7.875 7.875 0 0 1 15.75 0v3.5Z"></path><path d="M16 29.125a18.209 18.209 0 0 1-11.043-3.692l-.332-.263V13.375h22.75V25.17l-.332.262A17.92 17.92 0 0 1 16 29.126Zm-9.625-4.804A16.625 16.625 0 0 0 16 27.375a16.267 16.267 0 0 0 9.625-3.054v-9.196H6.375v9.196Z"></path><path d="M16.875 17.75h-1.75V23h1.75v-5.25Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLockLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLockLarge;
    }
}
