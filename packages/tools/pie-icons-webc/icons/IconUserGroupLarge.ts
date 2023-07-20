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

const componentSelector = 'icon-user-group-large';

export class IconUserGroupLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--userGroupLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userGroupLarge', '', null, 'IconUserGroupLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userGroupLarge', '', this.size, 'IconUserGroupLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userGroupLarge"><path d="M9 13.375a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm14 5.25a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm5.994 9.52a4.795 4.795 0 0 0-4.55-3.395h-3.5a4.627 4.627 0 0 0-1.208.175 3.762 3.762 0 0 0-7.49 0 4.627 4.627 0 0 0-1.207-.175h-3.5a4.795 4.795 0 0 0-4.55 3.404L2.41 19.5H4.25l.42-1.313A3.063 3.063 0 0 1 7.556 16h3.5c.547 0 1.082.158 1.54.455a3.772 3.772 0 0 0 6.825 0A2.826 2.826 0 0 1 20.952 16h3.5a3.063 3.063 0 0 1 2.923 2.188l.42 1.312h1.837l-.638-1.855ZM16 16.875a2.04 2.04 0 1 1 0-4.078 2.04 2.04 0 0 1 0 4.078Zm6.125 6.029.604 1.846H20.89l-.42-1.313a3.054 3.054 0 0 0-2.887-2.187h-3.168a3.053 3.053 0 0 0-2.887 2.188l-.42 1.312H9.27l.604-1.846a4.812 4.812 0 0 1 4.541-3.404h3.168a4.812 4.812 0 0 1 4.54 3.404Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserGroupLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserGroupLarge;
    }
}
