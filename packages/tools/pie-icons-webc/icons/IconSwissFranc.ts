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

const componentSelector = 'icon-swiss-franc';

export class IconSwissFranc extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--swissFranc';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--swissFranc', '', null, 'IconSwissFranc');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--swissFranc', '', this.size, 'IconSwissFranc');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--swissFranc"><path d="M2.295 8.131A1.444 1.444 0 0 0 4.29 9.537a1.54 1.54 0 0 0 .508-.33l.06-.06.788.795-.052.062a2.52 2.52 0 0 1-1.89.77 2.563 2.563 0 0 1-2.625-2.625 2.564 2.564 0 0 1 2.625-2.625 2.573 2.573 0 0 1 1.89.726l.052.061-.787.814-.061-.088A1.531 1.531 0 0 0 3.695 6.6a1.435 1.435 0 0 0-1.4 1.531Zm7.236-.586H7.545V5.559H6.329v5.127h1.216V8.612h1.986v2.074h1.225V5.56H9.531v1.986Zm5.425-.875V5.559H11.79v5.127h1.225V8.822h1.864V7.755h-1.864v-1.12l1.942.035Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSwissFranc);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSwissFranc;
    }
}
