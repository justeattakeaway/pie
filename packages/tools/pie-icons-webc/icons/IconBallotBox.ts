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

const componentSelector = 'icon-ballot-box';

export class IconBallotBox extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--ballotBox';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--ballotBox', '', null, 'IconBallotBox');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--ballotBox', '', this.size, 'IconBallotBox');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--ballotBox"><path d="M3.625 6.469V7.78h8.75V6.47h-1.094V3.625a2.406 2.406 0 0 0-2.406-2.406H4.719v5.25H3.625ZM6.031 2.53h2.844a1.094 1.094 0 0 1 1.094 1.094v2.844H6.03V2.53Zm8.75 1.313v8.312H1.22V3.844h2.406v1.312H2.531v5.688H13.47V5.156h-1.094V3.844h2.406Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBallotBox);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBallotBox;
    }
}
