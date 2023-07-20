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

const componentSelector = 'icon-chat-help-large';

export class IconChatHelpLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--chatHelpLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatHelpLarge', '', null, 'IconChatHelpLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chatHelpLarge', '', this.size, 'IconChatHelpLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chatHelpLarge"><path d="M25.625 4.625H6.375A2.625 2.625 0 0 0 3.75 7.25v21.875h2.266l4.988-4.996a.92.92 0 0 1 .621-.254h14a2.625 2.625 0 0 0 2.625-2.625v-14a2.625 2.625 0 0 0-2.625-2.625ZM26.5 21.25a.875.875 0 0 1-.875.875h-14c-.696 0-1.363.278-1.855.77l-4.27 4.27V7.25a.875.875 0 0 1 .875-.875h19.25a.875.875 0 0 1 .875.875v14Z"></path><path d="M16.63 19.115a1.26 1.26 0 1 1-1.26-1.26 1.25 1.25 0 0 1 1.26 1.26Zm-1.076-10.99a4.261 4.261 0 0 0-2.8.963l-.061.052 1.207 1.207h.061a2.625 2.625 0 0 1 1.54-.49 1.653 1.653 0 0 1 1.82 1.62c0 1.18-1.024 2.064-2.677 2.327h-.07l.166 2.415h1.339l.157-1.348h.123a3.78 3.78 0 0 0 2.948-3.5c0-1.662-1.154-3.246-3.753-3.246Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChatHelpLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChatHelpLarge;
    }
}
