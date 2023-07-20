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

const componentSelector = 'icon-caret-left';

export class IconCaretLeft extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--caretLeft';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--caretLeft', '', null, 'IconCaretLeft');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--caretLeft', '', this.size, 'IconCaretLeft');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--caretLeft"><path d="M11.588 2.925a1.269 1.269 0 0 0-.613-.175 1.286 1.286 0 0 0-.744.227L4.29 7.064a1.286 1.286 0 0 0-.578 1.102 1.313 1.313 0 0 0 .613 1.085l5.941 3.771c.212.134.458.204.709.202a1.303 1.303 0 0 0 1.313-1.313V4.09a1.32 1.32 0 0 0-.7-1.164Zm-.613 8.986L5.025 8.14l5.95-4.051v7.822Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCaretLeft);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCaretLeft;
    }
}
