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

const componentSelector = 'icon-law-large';

export class IconLawLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--lawLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--lawLarge', '', null, 'IconLawLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--lawLarge', '', this.size, 'IconLawLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--lawLarge"><path fill-rule="evenodd" d="m19.21 19.255-1.233-1.234v-.009l.849-.848-1.908-1.908L6.103 26.071 4.87 24.837l10.806-10.814-1.881-1.882-.85.849-1.233-1.234 6.921-6.921 1.234 1.234-.849.848 5.032 5.032.848-.849 1.234 1.234-6.921 6.921ZM17.786 8.16l-2.757 2.756 5.032 5.023 2.747-2.748-5.022-5.031Z" clip-rule="evenodd"></path><path d="m26.08 23.14-.472-1.741h-8.506l-.472 1.741h9.45Z"></path><path d="M26.692 25.476H16.01l-.464 1.75h11.62l-.473-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLawLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLawLarge;
    }
}
