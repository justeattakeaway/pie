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

const componentSelector = 'icon-foundations';

export class IconFoundations extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--foundations';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--foundations', '', null, 'IconFoundations');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--foundations', '', this.size, 'IconFoundations');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--foundations"><g clip-path="url(#prefix__clip0_7066_3748)"><path d="M10.739 1.945H5.252v5.486h5.487V1.945ZM9.426 6.119H6.565V3.258h2.861v2.86Z"></path><path d="M1.875 14.169h5.486V8.683H1.875v5.486Zm1.313-4.174h2.86v2.861h-2.86V9.995Z"></path><path d="M8.621 8.674v5.486h5.486V8.674H8.622Zm4.174 4.174H9.934V9.986h2.861v2.861Z"></path></g><defs><clipPath id="prefix__clip0_7066_3748"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconFoundations);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFoundations;
    }
}
