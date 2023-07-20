import {
    html, LitElement, TemplateResult,
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

const componentSelector = 'icon-caret-up-filled';

export class IconCaretUpFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--caretUpFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--caretUpFilled', '', null, 'IconCaretUpFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--caretUpFilled', '', this.size, 'IconCaretUpFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--caretUpFilled"><path d="M12.996 10.231 8.936 4.29a1.313 1.313 0 0 0-1.076-.577 1.313 1.313 0 0 0-1.085.612l-3.798 5.941a1.33 1.33 0 0 0 0 1.339 1.312 1.312 0 0 0 1.155.682h7.823a1.312 1.312 0 0 0 1.085-2.056h-.044Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCaretUpFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCaretUpFilled;
    }
}
