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

const componentSelector = 'icon-navigation-collapse';

export class IconNavigationCollapse extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--navigationCollapse';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationCollapse', '', null, 'IconNavigationCollapse');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationCollapse', '', this.size, 'IconNavigationCollapse');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--navigationCollapse"><path d="M2.32 2.373V13.45h8.64a3.325 3.325 0 0 0 3.331-3.322V2.373H2.321Zm1.338 1.33h1.33v8.417h-1.33V3.703Zm9.304 6.424a1.994 1.994 0 0 1-1.994 1.993H6.317V3.703h6.645v6.424Z"></path><path d="M11.793 9.666v-3.5L9.187 7.99l2.606 1.675Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconNavigationCollapse);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconNavigationCollapse;
    }
}
