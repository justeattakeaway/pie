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

const componentSelector = 'icon-logo-skip-circle-filled-large';

export class IconLogoSkipCircleFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--skipCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--skipCircleFilledLarge', '', null, 'IconLogoSkipCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--skipCircleFilledLarge', '', this.size, 'IconLogoSkipCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--skipCircleFilledLarge"><path fill-rule="evenodd" d="M28.5 16.25a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-11.841-3.284c-.078.478.257.912.779 1.522l.114.132c.65.748 1.629 1.876 1.577 3.29-.04.589-.2 1.163-.47 1.687-1.08 2.053-2.901 2.903-5.007 2.903-1.423 0-2.652-.657-2.652-.657l.08-.288.626-2.25a.355.355 0 0 1 .23-.238c.116-.04.252.027.325.063l.063.03c.478.237.766.38 1.665.38.592 0 1.301-.3 1.448-1.208.088-.523-.273-.974-.787-1.555l-.063-.07-.001-.003c-.712-.825-1.685-1.954-1.427-3.554C13.53 10.862 15.78 9 18.25 9a4.033 4.033 0 0 1 1.709.352l.02.01.068.032.453.222-.656 2.334a.348.348 0 0 1-.498.209 11.178 11.178 0 0 1-.165-.084c-.346-.178-.593-.305-1.286-.305-.726 0-1.14.601-1.235 1.196Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLogoSkipCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLogoSkipCircleFilledLarge;
    }
}
