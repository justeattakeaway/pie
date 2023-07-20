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

const componentSelector = 'icon-laptop-error';

export class IconLaptopError extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--laptopError';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopError', '', null, 'IconLaptopError');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopError', '', this.size, 'IconLaptopError');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--laptopError"><path d="m8.919 6.25.971-.963-.928-.927L8 5.305l-.963-.945-.927.927.945.963h.07l-1.015.963.927.927L8 7.195l.962.945.928-.928-.945-.962h-.026Z"></path><path d="M13.031 9.111V4.062a1.54 1.54 0 0 0-1.531-1.53h-7a1.54 1.54 0 0 0-1.531 1.53v5.05l-1.75 2.624v.201A1.54 1.54 0 0 0 2.75 13.47h10.5a1.54 1.54 0 0 0 1.531-1.531v-.202l-1.75-2.625Zm-8.75-5.049a.219.219 0 0 1 .219-.218h7a.219.219 0 0 1 .219.219v4.593H4.28V4.062Zm8.969 8.094H9.566l-.315-.717H6.75l-.315.717H2.75a.227.227 0 0 1-.175-.087l1.4-2.1h8.05l1.4 2.1a.228.228 0 0 1-.175.087Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLaptopError);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLaptopError;
    }
}
