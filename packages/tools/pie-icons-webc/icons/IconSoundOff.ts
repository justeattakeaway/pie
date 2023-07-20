import {
    html, LitElement, TemplateResult, css,
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

const componentSelector = 'icon-sound-off';

export class IconSoundOff extends LitElement implements IconProps {
    static styles = css`
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    `;

    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class = 'c-pieIcon c-pieIcon--soundOff';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOff', '', null, 'IconSoundOff');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOff', '', this.size, 'IconSoundOff');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--soundOff"><path d="M11.281 4.736v-3.5H9.75l-.166.167A21.623 21.623 0 0 1 7.598 3.1 23.625 23.625 0 0 1 5.19 4.719H2.75A1.54 1.54 0 0 0 1.219 6.25v3.5a1.54 1.54 0 0 0 1.531 1.531h2.441c.837.487 1.64 1.028 2.407 1.619a22.864 22.864 0 0 1 1.986 1.697l.192.184h1.505v-3.5L9.97 12.594v.586c-.508-.464-1.033-.875-1.566-1.313a26.789 26.789 0 0 0-2.372-1.6V5.75c.82-.49 1.61-1.024 2.372-1.601.533-.411 1.058-.875 1.566-1.312v.586l1.312 1.312ZM4.72 9.97H2.75a.219.219 0 0 1-.219-.219v-3.5a.219.219 0 0 1 .219-.219h1.969V9.97Z"></path><path d="M14.633 6.058 12.69 8l1.943 1.943-.928.927-1.943-1.942L9.82 10.87l-.928-.927L10.835 8 8.892 6.058l.928-.928 1.942 1.943 1.943-1.943.928.928Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSoundOff);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSoundOff;
    }
}
