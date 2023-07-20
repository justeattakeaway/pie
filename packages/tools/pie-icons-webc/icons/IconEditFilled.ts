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

const componentSelector = 'icon-edit-filled';

export class IconEditFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--editFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--editFilled', '', null, 'IconEditFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--editFilled', '', this.size, 'IconEditFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--editFilled"><path d="M14.44 3.503 12.498 1.56a1.531 1.531 0 0 0-2.162 0L9.12 2.75l.928.928 2.257 2.248.464.473.464.464 1.207-1.217a1.522 1.522 0 0 0 0-2.143Z"></path><path d="M11.378 6.889 8.193 3.704 2.068 9.829c-.267.259-.437.602-.482.971l-.455 4.077 4.07-.455c.357-.04.69-.2.944-.455l6.125-6.125-.464-.463-.428-.49Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconEditFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconEditFilled;
    }
}
