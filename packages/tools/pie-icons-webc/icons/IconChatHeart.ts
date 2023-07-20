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

const componentSelector = 'icon-chat-heart';

export class IconChatHeart extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--chatHeart';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatHeart', '', null, 'IconChatHeart');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chatHeart', '', this.size, 'IconChatHeart');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chatHeart"><path d="M8 9.75 5.926 7.589a1.347 1.347 0 0 1 0-1.838 1.199 1.199 0 0 1 .875-.376c.329.002.644.134.875.367L8 6.058l.324-.307a1.225 1.225 0 0 1 1.75 0 1.365 1.365 0 0 1 0 1.846L8 9.75Z"></path><path d="M3.538 14.781H2.094V4.5a1.54 1.54 0 0 1 1.531-1.531h8.75A1.54 1.54 0 0 1 13.906 4.5v6.125a1.54 1.54 0 0 1-1.531 1.531H6.25a.254.254 0 0 0-.157.061l-2.555 2.564Zm.087-10.5a.219.219 0 0 0-.219.219v8.557l1.75-1.75a1.522 1.522 0 0 1 1.094-.463h6.125a.219.219 0 0 0 .219-.219V4.5a.219.219 0 0 0-.219-.219h-8.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconChatHeart);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconChatHeart;
    }
}
