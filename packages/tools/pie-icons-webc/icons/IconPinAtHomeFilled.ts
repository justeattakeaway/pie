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

const componentSelector = 'icon-pin-at-home-filled';

export class IconPinAtHomeFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pinAtHomeFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeFilled', '', null, 'IconPinAtHomeFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeFilled', '', this.size, 'IconPinAtHomeFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pinAtHomeFilled"><path d="M8.875 2.304a1.75 1.75 0 0 0-1.75.008 42.972 42.972 0 0 0-5.819 4.813l.91.875s.298-.289.753-.7v6.571H13.03V7.335c.455.411.744.691.753.7l.875-.945a42.875 42.875 0 0 0-5.784-4.786Zm-3.5 8.321a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm2.625 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm2.625 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPinAtHomeFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPinAtHomeFilled;
    }
}
