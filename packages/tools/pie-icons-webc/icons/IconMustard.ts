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

const componentSelector = 'icon-mustard';

export class IconMustard extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--mustard';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--mustard', '', null, 'IconMustard');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--mustard', '', this.size, 'IconMustard');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--mustard"><path d="M11.576 7.586v-.122c0-.4-.165-.801-.496-1.132l-.915-.758-.035-1.63h-.618l-.933-2.787H7.334l-.872 2.788h-.61l-.017 1.629-.967.793c-.287.287-.453.679-.453 1.088v.122l.044.114a6.731 6.731 0 0 1 .287 4.138l-.322 1.307-.018.157a1.54 1.54 0 0 0 1.542 1.542h4.077a1.54 1.54 0 0 0 1.543-1.543l-.34-1.454a6.796 6.796 0 0 1 .287-4.139l.044-.113h.017Zm-5.828-.244 1.385-1.141v-.932h1.725l.018.932L10.2 7.299s.043.052.052.087c-.052.13-.078.27-.113.4H5.86c-.043-.13-.07-.27-.122-.4 0-.018.009-.035 0-.035l.009-.009Zm4.025 3.546H6.236a7.82 7.82 0 0 0-.07-1.803h3.685a7.802 7.802 0 0 0-.07 1.803h-.008Zm.27 2.648H5.966a.233.233 0 0 1-.227-.183l.288-1.167H9.99l.287 1.167a.233.233 0 0 1-.226.183h-.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMustard);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMustard;
    }
}
