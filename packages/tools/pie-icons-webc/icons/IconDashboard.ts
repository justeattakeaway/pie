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

const componentSelector = 'icon-dashboard';

export class IconDashboard extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--dashboard';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--dashboard', '', null, 'IconDashboard');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--dashboard', '', this.size, 'IconDashboard');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--dashboard"><path d="M14.781 9.75c-.001.9-.18 1.793-.525 2.625h-1.461a5.435 5.435 0 0 0 .306-4.585l.945-1.085a6.71 6.71 0 0 1 .735 3.045ZM8 4.281c.845 0 1.678.198 2.432.578l.875-1.015A6.773 6.773 0 0 0 1.22 9.75c.001.9.18 1.793.525 2.625h1.461A5.469 5.469 0 0 1 8 4.281Zm2.012 5.031a2.406 2.406 0 1 1-.988-.875L13.25 3.67l.989.875-4.227 4.768Zm-1.242.543a1.076 1.076 0 0 0-1.54 0 1.085 1.085 0 1 0 1.54 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconDashboard);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconDashboard;
    }
}
