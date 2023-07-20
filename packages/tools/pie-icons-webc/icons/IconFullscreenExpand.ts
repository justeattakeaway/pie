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

const componentSelector = 'icon-fullscreen-expand';

export class IconFullscreenExpand extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--fullscreenExpand';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExpand', '', null, 'IconFullscreenExpand');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExpand', '', this.size, 'IconFullscreenExpand');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--fullscreenExpand"><path d="m5.99 3.406.737-1.312H2.094v4.633l1.312-.738V3.406H5.99Z"></path><path d="M10.01 3.406h2.584V5.99l1.312.738V2.094H9.273l.738 1.312Z"></path><path d="M12.594 10.01v2.584H10.01l-.738 1.312h4.633V9.273l-1.312.738Z"></path><path d="m3.406 10.01-1.312-.737v4.633h4.633l-.738-1.312H3.406V10.01Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconFullscreenExpand);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFullscreenExpand;
    }
}
