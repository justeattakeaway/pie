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

const componentSelector = 'icon-copy-large';

export class IconCopyLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--copyLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--copyLarge', '', null, 'IconCopyLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--copyLarge', '', this.size, 'IconCopyLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--copyLarge"><path d="M26.15 4.345 12.894 2.044a2.45 2.45 0 0 0-2.81 1.986l-.21 1.33h1.75l.176-1.033a.682.682 0 0 1 .787-.55l13.265 2.292a.673.673 0 0 1 .552.779L24.11 20.095v6.221a2.38 2.38 0 0 0 .963-1.566l3.053-17.605a2.425 2.425 0 0 0-1.977-2.8Z"></path><path d="M17.584 14.031h-8.75v1.75h8.75v-1.75Z"></path><path d="M17.584 17.811h-8.75v1.75h8.75v-1.75Z"></path><path d="M17.584 21.591h-8.75v1.75h8.75v-1.75Z"></path><path d="M19.929 29.86H6.479a2.432 2.432 0 0 1-2.423-2.433V9.534A2.424 2.424 0 0 1 6.48 7.11h13.449a2.432 2.432 0 0 1 2.432 2.424v17.893a2.442 2.442 0 0 1-2.432 2.433Zm-13.45-21a.674.674 0 0 0-.673.674v17.893a.682.682 0 0 0 .674.683h13.449a.683.683 0 0 0 .682-.683V9.534a.674.674 0 0 0-.682-.674H6.479Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCopyLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCopyLarge;
    }
}
