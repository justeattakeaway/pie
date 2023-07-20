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

const componentSelector = 'icon-user';

export class IconUser extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--user';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--user', '', null, 'IconUser');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--user', '', this.size, 'IconUser');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--user"><path d="m3.205 14.125.674-1.908a2.835 2.835 0 0 1 2.703-1.81h2.835a2.835 2.835 0 0 1 2.704 1.81l.674 1.908h1.391l-.875-2.345a4.138 4.138 0 0 0-3.937-2.686H6.582a4.139 4.139 0 0 0-3.937 2.686l-.831 2.345h1.391Z"></path><path d="M8 8a3.063 3.063 0 1 0 0-6.125A3.063 3.063 0 0 0 8 8Zm0-4.813a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUser);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUser;
    }
}
