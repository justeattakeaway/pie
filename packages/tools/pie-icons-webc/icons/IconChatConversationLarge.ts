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

const componentSelector = 'icon-chat-conversation-large';

export class IconChatConversationLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--chatConversationLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatConversationLarge', '', null, 'IconChatConversationLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chatConversationLarge', '', this.size, 'IconChatConversationLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chatConversationLarge"><path d="M22.125 17.75V7.25A2.625 2.625 0 0 0 19.5 4.625h-14A2.625 2.625 0 0 0 2.875 7.25v16.625h2.266l3.238-3.246c.167-.16.39-.25.621-.254h10.5a2.625 2.625 0 0 0 2.625-2.625Zm-14.98 1.645-2.52 2.52V7.25a.875.875 0 0 1 .875-.875h14a.875.875 0 0 1 .875.875v10.5a.875.875 0 0 1-.875.875H9c-.696 0-1.363.278-1.855.77Zm21.98-6.895v16.625H26.85l-3.229-3.246a.92.92 0 0 0-.621-.254H12.5A2.625 2.625 0 0 1 9.875 23v-.875h1.75V23a.875.875 0 0 0 .875.875H23c.688.002 1.35.268 1.846.744l2.529 2.546V12.5a.875.875 0 0 0-.875-.875h-2.625v-1.75H26.5a2.625 2.625 0 0 1 2.625 2.625Zm-15.313 0a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.626 0Zm4.376 0a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Zm-8.75 0a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.625 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChatConversationLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChatConversationLarge;
    }
}
