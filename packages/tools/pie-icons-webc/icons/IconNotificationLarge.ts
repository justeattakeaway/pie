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

const componentSelector = 'icon-notification-large';

export class IconNotificationLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--notificationLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--notificationLarge', '', null, 'IconNotificationLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--notificationLarge', '', this.size, 'IconNotificationLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--notificationLarge"><path d="m27.375 21.766-.683-.682a9.554 9.554 0 0 1-2.817-6.834v-.875a7.875 7.875 0 0 0-7-7.822V2.875h-1.75v2.678a8.137 8.137 0 0 0-7 8.146v.551a9.555 9.555 0 0 1-2.817 6.808l-.683.708v2.984h6.869a4.506 4.506 0 1 0 9.012 0h6.869v-2.984ZM16 27.375a2.765 2.765 0 0 1-2.765-2.625h5.53A2.765 2.765 0 0 1 16 27.375ZM25.625 23H6.375v-.516l.166-.167a11.28 11.28 0 0 0 3.334-8.067v-.578a6.361 6.361 0 0 1 5.512-6.422 6.072 6.072 0 0 1 4.726 1.549 6.126 6.126 0 0 1 2.012 4.576v.875a11.28 11.28 0 0 0 3.334 8.041l.166.166V23Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconNotificationLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconNotificationLarge;
    }
}
