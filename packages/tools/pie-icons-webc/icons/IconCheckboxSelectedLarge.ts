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

const componentSelector = 'icon-checkbox-selected-large';

export class IconCheckboxSelectedLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--checkboxSelectedLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--checkboxSelectedLarge', '', null, 'IconCheckboxSelectedLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--checkboxSelectedLarge', '', this.size, 'IconCheckboxSelectedLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--checkboxSelectedLarge"><path d="M24.75 27.375H7.25a2.633 2.633 0 0 1-2.625-2.625V7.25A2.633 2.633 0 0 1 7.25 4.625h17.5a2.633 2.633 0 0 1 2.625 2.625v17.5a2.633 2.633 0 0 1-2.625 2.625Zm-17.5-21a.878.878 0 0 0-.875.875v17.5c0 .481.394.875.875.875h17.5a.878.878 0 0 0 .875-.875V7.25a.878.878 0 0 0-.875-.875H7.25Zm6.79 14c.429 0 .84-.184 1.129-.499l6.72-7.245-1.287-1.19-6.57 7.079-2.495-2.809-1.312 1.164 2.66 3.001c.289.315.7.49 1.129.49l.026.009Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCheckboxSelectedLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCheckboxSelectedLarge;
    }
}
