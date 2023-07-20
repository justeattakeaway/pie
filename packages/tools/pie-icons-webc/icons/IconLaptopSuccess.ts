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

const componentSelector = 'icon-laptop-success';

export class IconLaptopSuccess extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--laptopSuccess';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopSuccess', '', null, 'IconLaptopSuccess');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopSuccess', '', this.size, 'IconLaptopSuccess');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--laptopSuccess"><path d="M13.031 9.479V3.625A1.54 1.54 0 0 0 11.5 2.094h-7a1.54 1.54 0 0 0-1.531 1.531v5.854l-1.75 1.75v1.146a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531v-1.146l-1.75-1.75Zm-8.75-5.854a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v5.469H4.28V3.625Zm9.188 8.75a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-.604l1.365-1.365h8.208l1.365 1.365v.604ZM9.374 4.5l.927.875-2.957 2.992-1.645-1.653.927-.928.718.718L9.374 4.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLaptopSuccess);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLaptopSuccess;
    }
}
