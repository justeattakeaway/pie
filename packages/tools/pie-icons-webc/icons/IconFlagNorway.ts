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

const componentSelector = 'icon-flag-norway';

export class IconFlagNorway extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--norway';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--norway', '', null, 'IconFlagNorway');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--norway', '', this.size, 'IconFlagNorway');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--norway"><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"></path><path fill="#D80027" d="M1.241 9.827a7.006 7.006 0 0 0 2.5 3.724V9.827h-2.5Zm6.152 5.146a7 7 0 0 0 7.366-5.146H7.392v5.146h.002Zm7.367-8.8a7 7 0 0 0-7.37-5.146v5.146h7.37ZM3.74 2.45a7.005 7.005 0 0 0-2.499 3.724h2.5V2.45Z"></path><path fill="#0052B4" d="M14.94 7.087H6.477v-5.92a6.954 6.954 0 0 0-1.823.683v5.237H1.06a7.06 7.06 0 0 0 0 1.826h3.593v5.237a6.951 6.951 0 0 0 1.823.683v-5.92h8.463a7.077 7.077 0 0 0 0-1.826Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFlagNorway);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFlagNorway;
    }
}
