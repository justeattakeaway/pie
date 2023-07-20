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

const componentSelector = 'icon-phone-filled';

export class IconPhoneFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--phoneFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--phoneFilled', '', null, 'IconPhoneFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--phoneFilled', '', this.size, 'IconPhoneFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--phoneFilled"><path d="M11.097 14.344h.315a2.624 2.624 0 0 0 2.284-1.374l.875-1.645-3.623-2.004a1.522 1.522 0 0 0-1.994.429l-1.427 1.925a9.625 9.625 0 0 1-3.255-3.334l1.672-1.286a1.566 1.566 0 0 0 .428-1.969L4.43 1.42l-1.365.735A2.625 2.625 0 0 0 1.682 4.85a11.13 11.13 0 0 0 1.155 3.614 10.937 10.937 0 0 0 4.559 4.672 10.64 10.64 0 0 0 3.701 1.208Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPhoneFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPhoneFilled;
    }
}
