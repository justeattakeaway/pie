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

const componentSelector = 'icon-phone-off';

export class IconPhoneOff extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--phoneOff';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--phoneOff', '', null, 'IconPhoneOff');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--phoneOff', '', this.size, 'IconPhoneOff');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--phoneOff"><path d="m8.954 9.75-1.427 1.925a8.694 8.694 0 0 1-1.277-.971L15 1.875h-1.846L5.279 9.75a9.38 9.38 0 0 1-1.006-1.409l1.67-1.286a1.566 1.566 0 0 0 .43-1.969L4.43 1.42l-1.365.735A2.625 2.625 0 0 0 1.683 4.85a11.216 11.216 0 0 0 2.704 5.871L1 14.125h1.846l2.459-2.476a10.702 10.702 0 0 0 2.091 1.47 10.64 10.64 0 0 0 3.702 1.207h.314a2.624 2.624 0 0 0 2.275-1.391l.876-1.645-3.614-1.986a1.522 1.522 0 0 0-1.995.446ZM2.977 4.675a1.356 1.356 0 0 1 .71-1.365l.2-.105 1.33 2.502a.245.245 0 0 1-.07.307L3.67 7.125a10.045 10.045 0 0 1-.692-2.45Zm9.556 7.7a1.278 1.278 0 0 1-1.26.691A9.396 9.396 0 0 1 8.7 12.34l1.313-1.75a.227.227 0 0 1 .288-.07l2.503 1.391-.271.464Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPhoneOff);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPhoneOff;
    }
}
