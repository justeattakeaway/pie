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

const componentSelector = 'icon-sun';

export class IconSun extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--sun';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sun', '', null, 'IconSun');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sun', '', this.size, 'IconSun');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--sun"><path d="M7.344 13.425v1.137h1.312v-1.137a5.538 5.538 0 0 1-.656.044 5.538 5.538 0 0 1-.656-.044Z"></path><path d="M8.656 2.575V1.411H7.344v1.164c.217-.028.436-.042.656-.044.22.002.438.016.656.044Z"></path><path d="M13.425 8.639h1.155V7.326h-1.155c.027.224.042.449.044.674a5.11 5.11 0 0 1-.044.639Z"></path><path d="M2.575 7.326H1.42V8.64h1.155A5.11 5.11 0 0 1 2.53 8a5.81 5.81 0 0 1 .044-.674Z"></path><path d="m4.64 3.695-.823-.822-.927.927.814.822c.276-.343.59-.654.936-.927Z"></path><path d="m11.377 12.296.805.805.928-.927-.805-.814c-.273.346-.584.66-.928.936Z"></path><path d="M11.377 12.287c.344-.276.655-.59.928-.936-.27.349-.582.663-.928.936Z"></path><path d="M3.704 4.622c.276-.343.59-.654.936-.927-.348.27-.663.582-.936.927Z"></path><path d="m12.296 4.622.814-.822-.928-.927-.822.822c.346.273.66.584.936.927Z"></path><path d="m3.695 11.36-.805.814.927.927.805-.805a5.863 5.863 0 0 1-.927-.936Z"></path><path d="M4.622 12.296a5.863 5.863 0 0 1-.927-.936c.27.348.582.663.927.936Z"></path><path d="M12.287 4.622a5.863 5.863 0 0 0-.936-.927c.348.27.663.582.936.927Z"></path><path d="M8 3.844a4.156 4.156 0 1 0 0 8.312 4.156 4.156 0 0 0 0-8.312Zm0 7A2.844 2.844 0 1 1 10.844 8 2.853 2.853 0 0 1 8 10.844Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSun);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSun;
    }
}
