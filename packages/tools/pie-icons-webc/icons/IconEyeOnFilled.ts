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

const componentSelector = 'icon-eye-on-filled';

export class IconEyeOnFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--eyeOnFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOnFilled', '', null, 'IconEyeOnFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOnFilled', '', this.size, 'IconEyeOnFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--eyeOnFilled"><path d="M12.017 4.789a5.337 5.337 0 0 0-8.033 0L1.062 8l2.922 3.211a5.337 5.337 0 0 0 8.032 0l2.923-3.21-2.922-3.212Zm-2.32 4.909a2.398 2.398 0 1 1 0-3.395 2.38 2.38 0 0 1 0 3.395Z"></path><path d="M8 6.906a1.059 1.059 0 0 0-.77.324 1.085 1.085 0 1 0 1.54 0A1.059 1.059 0 0 0 8 6.906Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEyeOnFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEyeOnFilled;
    }
}
