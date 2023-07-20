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

const componentSelector = 'icon-navigation-expand';

export class IconNavigationExpand extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--navigationExpand';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationExpand', '', null, 'IconNavigationExpand');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationExpand', '', this.size, 'IconNavigationExpand');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--navigationExpand"><path d="M1.93 2.373V13.45h8.64a3.323 3.323 0 0 0 3.322-3.322V2.373H1.93Zm1.33 1.33h3.1v8.417h-3.1V3.703Zm9.303 6.424a1.994 1.994 0 0 1-1.994 1.993H7.69V3.703h4.874v6.424Z"></path><path d="m8.797 9.666 2.605-1.826-2.605-1.674"></path></svg>`;
    }
}

customElements.define(componentSelector, IconNavigationExpand);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconNavigationExpand;
    }
}
