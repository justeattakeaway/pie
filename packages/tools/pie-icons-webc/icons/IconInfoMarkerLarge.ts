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

const componentSelector = 'icon-info-marker-large';

export class IconInfoMarkerLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--infoMarkerLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--infoMarkerLarge', '', null, 'IconInfoMarkerLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--infoMarkerLarge', '', this.size, 'IconInfoMarkerLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--infoMarkerLarge"><path d="M24.75 3.024H7.25a2.625 2.625 0 0 0-2.625 2.625v15.75a2.625 2.625 0 0 0 2.625 2.625h3.439L16 29.335l5.311-5.311h3.439a2.625 2.625 0 0 0 2.625-2.625V5.649a2.625 2.625 0 0 0-2.625-2.625Zm.875 18.375a.875.875 0 0 1-.875.875h-4.165L16 26.859l-4.585-4.585H7.25a.875.875 0 0 1-.875-.875V5.649a.875.875 0 0 1 .875-.875h17.5a.875.875 0 0 1 .875.875v15.75Zm-10.5-9.774h1.75V19.5h-1.75v-7.875Zm2.188-3.063a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconInfoMarkerLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconInfoMarkerLarge;
    }
}
