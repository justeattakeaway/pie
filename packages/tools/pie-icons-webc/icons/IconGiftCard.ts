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

const componentSelector = 'icon-gift-card';

export class IconGiftCard extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--giftCard';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--giftCard', '', null, 'IconGiftCard');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--giftCard', '', this.size, 'IconGiftCard');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--giftCard"><path d="M12.646 2.969H3.354L1.219 5.104v5.792l2.135 2.135h9.292l2.135-2.135V5.104l-2.135-2.135Zm.823 7.385-1.365 1.365H3.896l-1.365-1.365V5.646l1.365-1.365h8.208l1.365 1.365v4.708Zm-2.844-3.798L9.242 6.25l-.665-1.225a.691.691 0 0 0-1.154 0L6.758 6.25l-1.383.306a.648.648 0 0 0-.499.455.656.656 0 0 0 .167.657l.953.97-.201 1.427a.665.665 0 0 0 .954.674L8 10.1l1.251.639a.63.63 0 0 0 .306.07.604.604 0 0 0 .377-.123.639.639 0 0 0 .271-.621l-.201-1.426.971-.971a.657.657 0 0 0-.35-1.112Zm-1.75 1.391a.639.639 0 0 0-.184.552l.07.498-.437-.218a.665.665 0 0 0-.595 0l-.438.219.07-.5a.639.639 0 0 0-.236-.55l-.332-.342.498-.096a.639.639 0 0 0 .446-.332L8 6.748l.236.43a.639.639 0 0 0 .446.332l.5.096-.307.341Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGiftCard);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGiftCard;
    }
}
