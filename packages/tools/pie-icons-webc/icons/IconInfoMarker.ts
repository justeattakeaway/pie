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

const componentSelector = 'icon-info-marker';

export class IconInfoMarker extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--infoMarker';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--infoMarker', '', null, 'IconInfoMarker');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--infoMarker', '', this.size, 'IconInfoMarker');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--infoMarker"><path d="M12.281 1h-8.75A1.54 1.54 0 0 0 2 2.531v7.875a1.54 1.54 0 0 0 1.531 1.531H5.16l2.747 2.748 2.748-2.748h1.627a1.54 1.54 0 0 0 1.531-1.53V2.53A1.54 1.54 0 0 0 12.283 1Zm.219 9.406a.218.218 0 0 1-.219.219h-2.17L7.906 12.83l-2.205-2.205h-2.17a.218.218 0 0 1-.219-.219V2.531a.219.219 0 0 1 .22-.219h8.75a.219.219 0 0 1 .218.22v7.874ZM7.25 6.197h1.313v3.334H7.25V6.197Zm1.531-1.916a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconInfoMarker);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconInfoMarker;
    }
}
