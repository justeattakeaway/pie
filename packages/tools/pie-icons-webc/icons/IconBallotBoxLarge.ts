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

const componentSelector = 'icon-ballot-box-large';

export class IconBallotBoxLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--ballotBoxLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--ballotBoxLarge', '', null, 'IconBallotBoxLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--ballotBoxLarge', '', this.size, 'IconBallotBoxLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--ballotBoxLarge"><path d="m17.855 7.53 1.286 1.19L16 12.115a1.189 1.189 0 0 1-1.35.286 1.217 1.217 0 0 1-.4-.277l-1.26-1.374 1.304-1.164.831.893 2.73-2.949Zm-7.98 6.72V3.75h7.875a4.375 4.375 0 0 1 4.375 4.375v6.125h1.75V16H8.125v-1.75h1.75Zm1.75 0h8.75V8.125A2.625 2.625 0 0 0 17.75 5.5h-6.125v8.75ZM28.25 9v18.375H3.75V9h4.375v1.75H5.5v8.75h21v-8.75h-2.625V9h4.375ZM26.5 25.625V21.25h-21v4.375h21Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconBallotBoxLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconBallotBoxLarge;
    }
}
