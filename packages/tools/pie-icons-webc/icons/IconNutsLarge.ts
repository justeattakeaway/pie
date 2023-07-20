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

const componentSelector = 'icon-nuts-large';

export class IconNutsLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--nutsLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--nutsLarge', '', null, 'IconNutsLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--nutsLarge', '', this.size, 'IconNutsLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--nutsLarge"><path d="M27.168 19.464a8.038 8.038 0 0 0-.28-1.542 9.684 9.684 0 0 0-2.457-4.175l-3.015-3.006c.244-.331.375-.724.375-1.142 0-.523-.2-1.01-.575-1.377-3.077-3.076-8.079-3.076-11.155 0l-.784.785C7.935 7.673 5.582 5.826 2.88 5.86v1.734c2.074-.044 4.026 1.516 5.16 2.64L6.87 11.403a7.83 7.83 0 0 0-2.309 5.577 7.83 7.83 0 0 0 2.31 5.578c.365.366.853.575 1.376.575.419 0 .81-.13 1.142-.375l2.954 2.954a9.78 9.78 0 0 0 4.13 2.44 8.05 8.05 0 0 0 1.543.288c.227.017.462.035.698.035 1.237 0 2.544-.296 3.825-.88l2.658-1.273 1.02-2.24c.75-1.542 1.072-3.145.941-4.627l.009.009ZM8.405 21.329a.195.195 0 0 1-.148.061.195.195 0 0 1-.148-.061 6.11 6.11 0 0 1-1.804-4.349 6.09 6.09 0 0 1 1.804-4.348l2.213-2.214.14-.104s-.009-.018-.018-.018l.854-.854a6.15 6.15 0 0 1 4.349-1.795 6.15 6.15 0 0 1 4.349 1.795.195.195 0 0 1 .06.148.195.195 0 0 1-.06.149l-11.59 11.59Zm16.244 2.022-.767 1.682-2.074.984c-1.229.558-2.492.802-3.625.698a6.287 6.287 0 0 1-1.22-.227 7.834 7.834 0 0 1-3.381-2.004l-2.937-2.937 9.56-9.56 2.989 2.989a7.97 7.97 0 0 1 2.013 3.416c.113.384.183.793.218 1.22.104 1.168-.166 2.458-.785 3.739h.01Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconNutsLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconNutsLarge;
    }
}
