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

const componentSelector = 'icon-sync-large';

export class IconSyncLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--syncLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--syncLarge', '', null, 'IconSyncLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--syncLarge', '', this.size, 'IconSyncLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--syncLarge"><path d="M19.762 4.056 18.1 5.72a10.403 10.403 0 0 1 5.32 2.852 10.499 10.499 0 0 1 0 14.875l-1.234-1.234A8.751 8.751 0 0 0 18.205 7.54l1.557 1.557-1.242 1.243-3.141-3.142a.875.875 0 0 1 0-1.242l3.14-3.141 1.243 1.242Zm-9.948 18.13a8.697 8.697 0 0 0 3.98 2.275l-1.557-1.557 1.243-1.243 3.141 3.141a.874.874 0 0 1 0 1.243l-3.141 3.141-1.243-1.242L13.9 26.28A10.5 10.5 0 0 1 8.57 8.571l1.243 1.243a8.75 8.75 0 0 0 0 12.372Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSyncLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSyncLarge;
    }
}
