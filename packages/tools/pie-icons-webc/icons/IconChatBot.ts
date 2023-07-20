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

const componentSelector = 'icon-chat-bot';

export class IconChatBot extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--chatBot';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatBot', '', null, 'IconChatBot');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chatBot', '', this.size, 'IconChatBot');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chatBot"><path d="M9.907 1.481a5.915 5.915 0 0 0-3.92 11.156l.053 2.258.752-.122a8.602 8.602 0 0 0 7.044-5.898 5.923 5.923 0 0 0-3.929-7.394Zm2.67 7a7.2 7.2 0 0 1-5.25 4.839v-1.636l-.447-.14A4.611 4.611 0 0 1 8.175 2.53c.457.008.911.082 1.347.219a4.61 4.61 0 0 1 3.054 5.731Zm-3.422-.779L10.424 8A2.415 2.415 0 0 1 5.75 8l1.269-.324a1.102 1.102 0 0 0 2.135 0v.026Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChatBot);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChatBot;
    }
}
