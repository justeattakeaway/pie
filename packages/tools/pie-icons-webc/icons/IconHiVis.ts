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

const componentSelector = 'icon-hi-vis';

export class IconHiVis extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--hiVis';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--hiVis', '', null, 'IconHiVis');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--hiVis', '', this.size, 'IconHiVis');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--hiVis"><g clip-path="url(#prefix__clip0_3329_5152)"><path d="M14.204 6.679a1.034 1.034 0 0 0-.735-.306.384.384 0 0 1-.272-.114.384.384 0 0 1-.113-.271V2.645a1.115 1.115 0 0 0-1.112-1.094h-1.706L9.225 2.645H6.81L5.769 1.551H4.062c-.603 0-1.093.49-1.093 1.094v3.351a.434.434 0 0 1-.123.272.384.384 0 0 1-.271.113c-.28 0-.543.105-.744.307a1.039 1.039 0 0 0-.306.743l.026 5.381a1.66 1.66 0 0 0 1.645 1.646h3.701c.412 0 .797-.14 1.103-.403.306.254.691.402 1.102.402h3.737c.9 0 1.645-.743 1.645-1.645l.026-5.38c0-.28-.105-.543-.306-.744v-.01Zm-3.387-3.824h.928v3.133c.009.455.192.883.507 1.198.254.254.587.42.937.473v.271H8.674V5.078l2.135-2.232.008.009ZM2.811 9.251h4.506v1.269H2.82V9.251H2.81Zm5.863 0h4.506v1.269H8.674V9.251ZM3.739 7.195c.323-.324.498-.744.498-1.199V2.855h.945l2.135 2.231V7.94H2.811v-.271c.35-.053.674-.22.936-.473H3.74Zm3.456 5.819a.417.417 0 0 1-.298.122H3.161a.332.332 0 0 1-.332-.332v-.972h4.488v.884a.417.417 0 0 1-.122.298Zm5.644.122H9.102a.417.417 0 0 1-.42-.42v-.883h4.498v.98a.34.34 0 0 1-.341.332v-.009Z"></path></g><defs><clipPath id="prefix__clip0_3329_5152"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconHiVis);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconHiVis;
    }
}
