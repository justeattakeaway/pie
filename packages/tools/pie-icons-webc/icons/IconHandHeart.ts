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

const componentSelector = 'icon-hand-heart';

export class IconHandHeart extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--handHeart';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--handHeart', '', null, 'IconHandHeart');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--handHeart', '', this.size, 'IconHandHeart');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--handHeart"><path d="m8 7.44 2.887-2.887a2.057 2.057 0 0 0 0-2.914A2.1 2.1 0 0 0 8 1.604a2.109 2.109 0 0 0-2.887 0 2.056 2.056 0 0 0 0 2.914L8 7.441ZM6.101 2.629a.639.639 0 0 1 .473-.201.665.665 0 0 1 .472.201L8 3.626l.954-.998a.683.683 0 0 1 .945 0 .656.656 0 0 1 0 .936L8 5.463 6.101 3.564a.656.656 0 0 1 0-.936Z"></path><path d="M13.749 9.313a2.441 2.441 0 0 0-3.063.13l-1.26 1.13c-.198.174-.453.27-.717.27h-.315c.173-.338.263-.713.262-1.093V8.219H5.305c-.473 0-.936.14-1.33.402L1.954 9.97H1v1.312h1.348L4.7 9.75a1.05 1.05 0 0 1 .604-.184h2.039v.184a1.094 1.094 0 0 1-1.094 1.094h-.98l-.665 1.312h4.104a2.424 2.424 0 0 0 1.584-.595l1.268-1.129a1.12 1.12 0 0 1 1.409-.06h.061l-2.406 2.738a1.11 1.11 0 0 1-.814.359H1v1.312h8.846a2.408 2.408 0 0 0 1.794-.805L15 10.205l-1.251-.892Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconHandHeart);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHandHeart;
    }
}
