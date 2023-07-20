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

const componentSelector = 'icon-microphone';

export class IconMicrophone extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--microphone';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--microphone', '', null, 'IconMicrophone');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--microphone', '', this.size, 'IconMicrophone');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--microphone"><path d="M8.656 12.996V15H7.344v-2.004a5.915 5.915 0 0 1-5.25-5.871h1.312a4.594 4.594 0 0 0 9.188 0h1.312a5.915 5.915 0 0 1-5.25 5.871ZM4.72 7.125V4.5a3.281 3.281 0 1 1 6.562 0v2.625a3.281 3.281 0 0 1-6.562 0Zm1.312 0a1.969 1.969 0 0 0 3.938 0V4.5a1.969 1.969 0 0 0-3.938 0v2.625Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconMicrophone);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconMicrophone;
    }
}
