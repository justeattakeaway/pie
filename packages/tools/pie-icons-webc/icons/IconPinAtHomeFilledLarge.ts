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

const componentSelector = 'icon-pin-at-home-filled-large';

export class IconPinAtHomeFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pinAtHomeFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeFilledLarge', '', null, 'IconPinAtHomeFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeFilledLarge', '', this.size, 'IconPinAtHomeFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pinAtHomeFilledLarge"><path d="M17.461 4.109a3.15 3.15 0 0 0-2.94 0C10.146 6.68 3.208 13.375 2.92 13.62l1.207 1.26s.928-.875 2.25-2.083V26.5h19.25V12.797a130.695 130.695 0 0 1 2.248 2.083l1.251-1.26c-.332-.245-7.271-6.939-11.664-9.511ZM9.438 20.375a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPinAtHomeFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPinAtHomeFilledLarge;
    }
}
