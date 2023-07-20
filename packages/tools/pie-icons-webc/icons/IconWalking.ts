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

const componentSelector = 'icon-walking';

export class IconWalking extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--walking';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--walking', '', null, 'IconWalking');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--walking', '', this.size, 'IconWalking');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--walking"><g clip-path="url(#prefix__clip0_751_191)"><path d="M12.646 7.125A4.086 4.086 0 0 1 9.89 4.937l-.14-.376h-.245a2.083 2.083 0 1 0-3.255.184A5.18 5.18 0 0 0 2.934 7.44L2.286 8.7l1.164.595L4.106 8a3.841 3.841 0 0 1 1.645-1.654v2.529a2.757 2.757 0 0 0 1.094 2.179 6.61 6.61 0 0 1-.787.42L3.23 12.777l.56 1.182 2.8-1.322a5.576 5.576 0 0 0 1.365-.875l1.138.77 1.146 2.687 1.207-.516-1.216-2.862a.666.666 0 0 0-.236-.28l-1.12-.717c.172-.25.315-.516.429-.796.133-.328.219-.673.253-1.024l.193-2.03a5.311 5.311 0 0 0 2.546 1.426l.639.184.35-1.269-.639-.21ZM7.79 2.61a.77.77 0 1 1 0 1.54.77.77 0 0 1 0-1.54Zm-.088 7.438a1.461 1.461 0 0 1-.638-1.173V5.909c.177-.013.356-.013.534 0h.97l-.306 2.966a2.625 2.625 0 0 1-.166.665c-.08.19-.18.372-.297.543l-.097-.036Z"></path></g><defs><clipPath id="prefix__clip0_751_191"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconWalking);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconWalking;
    }
}
