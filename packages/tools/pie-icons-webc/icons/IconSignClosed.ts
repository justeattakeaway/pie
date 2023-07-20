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

const componentSelector = 'icon-sign-closed';

export class IconSignClosed extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--signClosed';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--signClosed', '', null, 'IconSignClosed');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--signClosed', '', this.size, 'IconSignClosed');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--signClosed"><path d="M13.25 4.719h-2.126L8.507 1.464H7.494L4.867 4.719H2.75A1.54 1.54 0 0 0 1.219 6.25v5.25a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531V6.25a1.54 1.54 0 0 0-1.531-1.531ZM8 2.969l1.444 1.75H6.556L8 2.969Zm5.469 8.531a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219V6.25a.219.219 0 0 1 .219-.219h10.5a.219.219 0 0 1 .219.219v5.25Zm-3.5-3.692L8.928 8.874l1.076 1.068-.936.936L8 9.803l-1.067 1.076-.937-.936 1.076-1.068-1.076-1.067.936-.937L8 7.947l1.068-1.076.9.936Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSignClosed);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSignClosed;
    }
}
