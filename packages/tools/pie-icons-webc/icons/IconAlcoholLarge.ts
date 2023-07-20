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

const componentSelector = 'icon-alcohol-large';

export class IconAlcoholLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--alcoholLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--alcoholLarge', '', null, 'IconAlcoholLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--alcoholLarge', '', this.size, 'IconAlcoholLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--alcoholLarge"><path d="M12.386 10.811V5.5a2.625 2.625 0 0 0-2.625-2.625H8.466A2.625 2.625 0 0 0 5.841 5.5v5.311a4.655 4.655 0 0 1-1.085 3.01 8.671 8.671 0 0 0-1.75 5.679v7a2.52 2.52 0 0 0 2.38 2.625h7.499a2.511 2.511 0 0 0 2.371-2.625v-7a8.75 8.75 0 0 0-1.75-5.679 4.612 4.612 0 0 1-1.12-3.01ZM7.591 5.5a.875.875 0 0 1 .875-.875H9.77a.875.875 0 0 1 .875.875v2.625H7.591V5.5Zm-1.4 9.31a6.248 6.248 0 0 0 1.4-3.999v-.936h3.045v.936a6.248 6.248 0 0 0 1.4 3.999c.27.38.516.778.735 1.19H5.5c.184-.429.438-.805.691-1.19ZM13.49 26.5c0 .473-.28.875-.622.875H5.37c-.341 0-.63-.402-.63-.875v-7c-.005-.586.042-1.172.14-1.75h8.496c.098.578.145 1.164.14 1.75l-.026 7Zm15.286-12.329V6.918H17.453v7.253a5.679 5.679 0 0 0 4.786 5.591v7.613h-3.22v1.75h8.199v-1.75h-3.23v-7.613a5.67 5.67 0 0 0 4.787-5.59Zm-1.75-5.503v2.528c-2.406.7-3.325.403-4.375.044a6.825 6.825 0 0 0-3.5-.42V8.668h7.875Zm-7.822 5.503V12.58a5.127 5.127 0 0 1 2.896.315 6.93 6.93 0 0 0 2.45.481 10.232 10.232 0 0 0 2.476-.359v1.155a3.911 3.911 0 1 1-7.822 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconAlcoholLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconAlcoholLarge;
    }
}
