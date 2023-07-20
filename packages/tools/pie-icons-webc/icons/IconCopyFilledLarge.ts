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

const componentSelector = 'icon-copy-filled-large';

export class IconCopyFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--copyFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--copyFilledLarge', '', null, 'IconCopyFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--copyFilledLarge', '', this.size, 'IconCopyFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--copyFilledLarge"><path d="M12.596 2.079 25.844 4.37A2.424 2.424 0 0 1 27.82 7.18L24.75 24.811a2.388 2.388 0 0 1-.945 1.54V9.57a4.183 4.183 0 0 0-4.174-4.183H9.56l.227-1.33a2.38 2.38 0 0 1 .963-1.566 2.45 2.45 0 0 1 1.846-.411Z"></path><path fill-rule="evenodd" d="M6.183 7.136h13.44a2.433 2.433 0 0 1 2.432 2.433v17.885a2.432 2.432 0 0 1-2.433 2.432H6.182a2.432 2.432 0 0 1-2.432-2.432V9.569a2.433 2.433 0 0 1 2.433-2.433Zm2.344 6.93h8.75v1.75h-8.75v-1.75Zm8.75 3.78h-8.75v1.75h8.75v-1.75Zm-8.75 3.771h8.75v1.75h-8.75v-1.75Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCopyFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCopyFilledLarge;
    }
}
