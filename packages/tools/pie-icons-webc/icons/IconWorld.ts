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

const componentSelector = 'icon-world';

export class IconWorld extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--world';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--world', '', null, 'IconWorld');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--world', '', this.size, 'IconWorld');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--world"><path d="M8 1.28a6.72 6.72 0 1 0 0 13.44A6.72 6.72 0 0 0 8 1.28Zm4.594 3.876c.206.346.377.713.507 1.094l-1.724 1.986V6.154l-1.12-.175a.386.386 0 0 1-.262-.175.543.543 0 0 1-.122-.429.367.367 0 0 1 .385-.245l2.336.026Zm-7-1.995v1.812l-1.488.813-.105.377-.875-.464A5.46 5.46 0 0 1 5.594 3.16Zm.455 5.495h.621l.586.49-.428 1.479a2.423 2.423 0 0 1-1.392-1.453l.613-.516ZM8 13.408A5.408 5.408 0 0 1 2.593 8c-.002-.35.034-.699.105-1.041l1.312.691c.122.227.288.426.49.586l-.446.377v.323c0 .097.114 2.345 3.019 3.194l.63.184 1.04-3.632-1.618-1.338H5.743a.569.569 0 0 1-.604-.368l.087-.306 1.68-.875V2.75h-.183A5.548 5.548 0 0 1 8 2.592a5.399 5.399 0 0 1 3.5 1.252h-1.242A1.636 1.636 0 0 0 8.595 5.12a1.811 1.811 0 0 0 .777 1.916c.197.123.419.204.65.237l.07 2.625 1.504.157L13.4 7.87a.963.963 0 0 1 0 .157A5.407 5.407 0 0 1 8 13.408Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconWorld);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconWorld;
    }
}
