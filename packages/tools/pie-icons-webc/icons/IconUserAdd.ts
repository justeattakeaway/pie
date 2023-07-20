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

const componentSelector = 'icon-user-add';

export class IconUserAdd extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--userAdd';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userAdd', '', null, 'IconUserAdd');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userAdd', '', this.size, 'IconUserAdd');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userAdd"><g clip-path="url(#prefix__clip0_18_2070)"><path d="M7.125 7.125a3.062 3.062 0 1 0 0-6.125 3.062 3.062 0 0 0 0 6.125Zm0-4.813a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm2.861 7.674a2.826 2.826 0 0 0-1.557-.455H5.804a2.555 2.555 0 0 0-2.45 1.566l-.455 1.278h-1.4l.639-1.75A3.868 3.868 0 0 1 5.82 8.219h2.625a4.182 4.182 0 0 1 2.267.656l-.727 1.111ZM15 13.031h-1.969V15H11.72v-1.969H9.75V11.72h1.969V9.75h1.312v1.969H15v1.312Z"></path></g><defs><clipPath id="prefix__clip0_18_2070"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconUserAdd);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserAdd;
    }
}
