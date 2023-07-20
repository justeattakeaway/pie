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

const componentSelector = 'icon-fried-chicken';

export class IconFriedChicken extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--friedChicken';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--friedChicken', '', null, 'IconFriedChicken');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--friedChicken', '', this.size, 'IconFriedChicken');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--friedChicken"><g clip-path="url(#prefix__clip0_18_757)"><path d="M4.29 4.412a2.625 2.625 0 0 1-.438-1.277 1.444 1.444 0 0 1 .648-1.26c.062.367.183.722.359 1.05.148.245.332.438.577.875.13.231.218.483.263.744.043.299-.006.604-.14.875A1.75 1.75 0 0 1 4.5 6.25c0-.481.105-.875.07-1.155a1.549 1.549 0 0 0-.28-.683Zm2.905-.874v.936a1.391 1.391 0 0 0 .875-.709c.1-.216.14-.455.114-.691A2.004 2.004 0 0 0 8 2.487c-.21-.315-.341-.472-.473-.656A2.844 2.844 0 0 1 7.17 1a1.146 1.146 0 0 0-.552 1.015c.024.372.145.73.35 1.041.109.153.186.325.228.508v-.026Zm7.752 5.425a3.58 3.58 0 0 1-2.327 3.29c-.534.997-1.995 2.152-4.524 1.268-2.721-.936-3.272-.498-3.666.114-.394.613-.805 1.199-1.374 1.199a1.251 1.251 0 0 1-.639-.201 1.225 1.225 0 0 1-.542-1.287 1.4 1.4 0 0 0 0-.525 2.24 2.24 0 0 0-.411-.673 1.286 1.286 0 0 1-.289-1.523A1.067 1.067 0 0 1 2.75 10.1a1.513 1.513 0 0 0 1.321 0c.508-.201.875-.875 1.216-1.636.525-1.059 1.164-2.363 2.625-2.582a4.375 4.375 0 0 1 2.783-1.224 3.5 3.5 0 0 1 2.494 1.172 3.159 3.159 0 0 1 1.758 3.133Zm-1.312 0c0-1.567-.875-1.917-1.015-1.943l-.166-.061-.132-.131a2.24 2.24 0 0 0-1.636-.876 3.229 3.229 0 0 0-2.012.998l-.184.175h-.263c-.813.053-1.216.744-1.75 1.881a4.12 4.12 0 0 1-1.89 2.275 2.8 2.8 0 0 1-2.003.114c.216.265.393.56.525.875.098.245.146.507.14.77l.105-.166c1.032-1.601 2.817-1.374 5.171-.595 2.354.778 2.975-.726 2.975-.779l.114-.297.315-.097a2.337 2.337 0 0 0 1.706-2.143Z"></path></g><defs><clipPath id="prefix__clip0_18_757"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconFriedChicken);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFriedChicken;
    }
}
