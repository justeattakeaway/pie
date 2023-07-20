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

const componentSelector = 'icon-key-unlock';

export class IconKeyUnlock extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--keyUnlock';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--keyUnlock', '', null, 'IconKeyUnlock');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--keyUnlock', '', this.size, 'IconKeyUnlock');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--keyUnlock"><path d="M14.781 3.625v8.75a1.54 1.54 0 0 1-1.531 1.531H8.875a1.54 1.54 0 0 1-1.531-1.531V11.5h1.312v.875a.219.219 0 0 0 .219.219h4.375a.22.22 0 0 0 .219-.219v-8.75a.219.219 0 0 0-.22-.219H8.876a.219.219 0 0 0-.219.219V4.5H7.344v-.875a1.54 1.54 0 0 1 1.53-1.531h4.376a1.54 1.54 0 0 1 1.531 1.531ZM7.667 10.38l-.437-.446-.175.219a3.317 3.317 0 1 1-2.511-5.478c.858.001 1.682.34 2.292.945h3.211L12.427 8l-2.38 2.38h-.735l-.437-.446-.446.446h-.762ZM7.24 8.07l.805.805.83-.796.806.796.875-.875-1.05-1.067H6.25l-.201-.228a1.986 1.986 0 0 0-1.505-.718 2.013 2.013 0 0 0 0 4.025 1.951 1.951 0 0 0 1.146-.376L7.239 8.07Zm-2.975-.875A.796.796 0 1 0 5.06 8a.796.796 0 0 0-.796-.796v-.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconKeyUnlock);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconKeyUnlock;
    }
}
