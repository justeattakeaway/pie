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

const componentSelector = 'icon-arrow-down-circle';

export class IconArrowDownCircle extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--arrowDownCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowDownCircle', '', null, 'IconArrowDownCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowDownCircle', '', this.size, 'IconArrowDownCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--arrowDownCircle"><path d="M7.344 1.577v7.167L5.445 6.845l-.945.928 2.713 2.712a1.084 1.084 0 0 0 1.54 0L11.5 7.773l-.945-.928-1.899 1.899V1.577H7.344Z"></path><path d="M9.969 1.315V2.75a5.46 5.46 0 1 1-3.938 0V1.315a6.781 6.781 0 1 0 3.938 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconArrowDownCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconArrowDownCircle;
    }
}
