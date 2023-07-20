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

const componentSelector = 'icon-eye-on';

export class IconEyeOn extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--eyeOn';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOn', '', null, 'IconEyeOn');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOn', '', this.size, 'IconEyeOn');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--eyeOn"><path d="M12.016 4.789a5.338 5.338 0 0 0-8.032 0L1.06 8l2.923 3.211a5.337 5.337 0 0 0 8.032 0l2.923-3.21-2.923-3.212Zm-.971 5.539a4.025 4.025 0 0 1-6.125 0L2.838 8l2.117-2.327a4.025 4.025 0 0 1 6.125 0L13.162 8l-2.117 2.328ZM6.303 6.303a2.406 2.406 0 1 0 3.395 0 2.38 2.38 0 0 0-3.395 0ZM8.77 8.77a1.085 1.085 0 0 1-1.54 0 1.094 1.094 0 1 1 1.54 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEyeOn);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEyeOn;
    }
}
