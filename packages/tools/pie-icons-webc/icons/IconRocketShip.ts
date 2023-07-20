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

const componentSelector = 'icon-rocket-ship';

export class IconRocketShip extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--rocketShip';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--rocketShip', '', null, 'IconRocketShip');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--rocketShip', '', this.size, 'IconRocketShip');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--rocketShip"><path d="m14.659 1.814-.097-.377-.376-.096A6.317 6.317 0 0 0 7.834 3.24L6.478 4.596a.21.21 0 0 1-.158.061H4.141a1.242 1.242 0 0 0-.98.368L1.954 6.25l7.796 7.752 1.207-1.198a1.277 1.277 0 0 0 .368-.954V9.636a.254.254 0 0 1 .061-.157l1.357-1.357a6.291 6.291 0 0 0 1.916-6.308Zm-2.87 5.381-1.357 1.356c-.282.29-.442.68-.446 1.085v2.24l-.28.272L3.818 6.25l.288-.28H6.32a1.522 1.522 0 0 0 1.085-.446l1.356-1.357a5.057 5.057 0 0 1 4.708-1.645 5.03 5.03 0 0 1-1.68 4.673Zm-.796-2.188a1.138 1.138 0 1 1-1.611 1.608 1.138 1.138 0 0 1 1.61-1.608ZM4.5 10.625 1.945 13.25 1 12.305 3.625 9.75l.875.875Zm.875.875.875.875-1.68 1.75-.945-.945 1.75-1.68Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconRocketShip);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconRocketShip;
    }
}
