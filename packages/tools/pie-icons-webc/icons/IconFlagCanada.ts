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

const componentSelector = 'icon-flag-canada';

export class IconFlagCanada extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--canada';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--canada', '', null, 'IconFlagCanada');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--canada', '', this.size, 'IconFlagCanada');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--canada"><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"></path><path fill="#D80027" d="M15 8a7 7 0 0 0-3.957-6.305v12.61A7 7 0 0 0 15 8ZM1 8a7 7 0 0 0 3.957 6.306V1.694A7 7 0 0 0 1 8Zm8.217.913 1.217-.612L9.827 8v-.61L8.61 8l.607-1.217H8.61L8 5.867l-.61.914h-.607l.607 1.216-1.217-.61V8l-.607.304 1.217.61-.306.61h1.222v.91h.602v-.91h1.22l-.304-.61Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFlagCanada);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFlagCanada;
    }
}
