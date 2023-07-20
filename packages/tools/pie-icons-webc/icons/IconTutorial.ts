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

const componentSelector = 'icon-tutorial';

export class IconTutorial extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--tutorial';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--tutorial', '', null, 'IconTutorial');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--tutorial', '', this.size, 'IconTutorial');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--tutorial"><path fill-rule="evenodd" d="m2.505 7.566.91.383v3.42l.263.201A7.194 7.194 0 0 0 8 12.996h.009a7.194 7.194 0 0 0 4.322-1.426l.263-.201V7.934l2.213-.931V5.795L8.254 3.04h-.508L1.184 5.804V7.01l.008.004v2.569h1.313V7.566Zm5.749 2.202H8.25L8 9.873l-.25-.105h-.004l-.979-.412L4.72 8.5v2.214l.009-.01a5.932 5.932 0 0 0 6.545 0V8.5l-3.02 1.267v.002Zm4.61-3.36L8 4.36 3.135 6.408l.28.117v-.004l4.594 1.925 4.856-2.038Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconTutorial);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconTutorial;
    }
}
