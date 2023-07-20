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

const componentSelector = 'icon-consent';

export class IconConsent extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--consent';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--consent', '', null, 'IconConsent');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--consent', '', this.size, 'IconConsent');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--consent"><path d="M13.924 11.57v-7c0-.84-.691-1.531-1.531-1.531h-8.75c-.84 0-1.532.691-1.532 1.531v7h-.849v1.313h13.502V11.57h-.84Zm-10.5 0v-7c0-.122.096-.219.218-.219h8.75c.123 0 .22.097.22.22v7H3.423Z"></path><path d="m10.126 5.541-3.123 3.37-1.085-1.226-.98.875L5.97 9.724l.306.341a.993.993 0 0 0 1.453 0l.315-.341 3.045-3.281-.963-.893v-.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconConsent);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconConsent;
    }
}
