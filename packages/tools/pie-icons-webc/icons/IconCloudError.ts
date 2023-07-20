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

const componentSelector = 'icon-cloud-error';

export class IconCloudError extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--cloudError';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cloudError', '', null, 'IconCloudError');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cloudError', '', this.size, 'IconCloudError');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cloudError"><g clip-path="url(#prefix__clip0_15_700)"><path d="M13.145 7.431A5.18 5.18 0 0 0 2.969 6.75 3.342 3.342 0 0 0 1 9.81a3.378 3.378 0 0 0 3.378 3.378h7.638a2.993 2.993 0 0 0 1.129-5.758Zm-1.129 4.445H4.378a2.065 2.065 0 0 1-2.065-2.065 2.039 2.039 0 0 1 1.426-1.96l.385-.113.061-.394a3.867 3.867 0 0 1 7.683.586v.516l.498.114a1.68 1.68 0 0 1-.358 3.316h.008Zm-1.802-4.751L8.928 8.438l1.286 1.312-.928.875L8 9.365l-1.286 1.26-.928-.875 1.287-1.312-1.287-1.313.928-.875L8 7.51l1.286-1.26.928.875Z"></path></g><defs><clipPath id="prefix__clip0_15_700"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconCloudError);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCloudError;
    }
}
