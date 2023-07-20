import {
    html, LitElement, TemplateResult, css,
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

const componentSelector = 'icon-chat-bot-large';

export class IconChatBotLarge extends LitElement implements IconProps {
    static styles = css`
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    `;

    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class = 'c-pieIcon c-pieIcon--chatBotLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatBotLarge', '', null, 'IconChatBotLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chatBotLarge', '', this.size, 'IconChatBotLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chatBotLarge"><g clip-path="url(#prefix__clip0_18_548)"><path d="M26.36 9.131a11.769 11.769 0 1 0-14.446 16.573l.105 4.453.997-.157c7-1.172 12.25-5.617 14.202-11.891a11.647 11.647 0 0 0-.858-8.978Zm-.814 8.453c-1.627 5.329-6.01 9.187-11.82 10.5l-.097-3.649-.604-.184a10.033 10.033 0 0 1 5.871-19.188 10.027 10.027 0 0 1 6.65 12.52Zm-7.35-1.532 1.698.43a4.016 4.016 0 0 1-7.788 0l1.698-.43a2.266 2.266 0 0 0 4.375 0h.017Zm5.68-2.86-1.698.41a1.365 1.365 0 0 0-2.678 0l-1.697-.41a3.107 3.107 0 0 1 6.072 0Zm-11.323.41a1.365 1.365 0 0 0-2.678 0l-1.697-.41a3.106 3.106 0 0 1 6.072 0l-1.697.41Z"></path></g><defs><clipPath id="prefix__clip0_18_548"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconChatBotLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChatBotLarge;
    }
}
