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

const componentSelector = 'icon-microphone-large';

export class IconMicrophoneLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--microphoneLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--microphoneLarge', '', null, 'IconMicrophoneLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--microphoneLarge', '', this.size, 'IconMicrophoneLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--microphoneLarge"><path d="M16.875 24.75v2.625H19.5v1.75h-7v-1.75h2.625V24.75A10.5 10.5 0 0 1 5.5 14.25h1.75a8.75 8.75 0 0 0 17.5 0h1.75a10.5 10.5 0 0 1-9.625 10.5Zm-7-10.5V9a6.125 6.125 0 1 1 12.25 0v5.25a6.125 6.125 0 1 1-12.25 0Zm1.75 0a4.375 4.375 0 1 0 8.75 0V9a4.375 4.375 0 1 0-8.75 0v5.25Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMicrophoneLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMicrophoneLarge;
    }
}
