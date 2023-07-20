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

const componentSelector = 'icon-logo-skip';

export class IconLogoSkip extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--skip';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--skip', '', null, 'IconLogoSkip');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--skip', '', this.size, 'IconLogoSkip');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--skip"><path fill-rule="evenodd" d="M9.421 6.878c-.439-.542-.721-.928-.655-1.353.08-.529.429-1.063 1.04-1.063.672 0 .846.15 1.222.346a.303.303 0 0 0 .14.036c.129 0 .243-.09.28-.222L12 2.548l-.382-.198-.056-.028-.018-.01A3.245 3.245 0 0 0 10.105 2C8.024 2 6.131 3.655 5.82 5.69c-.218 1.423.603 2.427 1.202 3.16l.053.064c.433.516.737.917.663 1.382-.124.807-.721 1.073-1.22 1.073-.79 0-1.02-.137-1.455-.364-.061-.032-.176-.091-.274-.056a.308.308 0 0 0-.194.211l-.526 2-.068.257S5.035 14 6.233 14c1.774 0 3.307-.755 4.217-2.58.228-.467.363-.977.396-1.5.046-1.333-.884-2.38-1.425-3.042Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLogoSkip);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLogoSkip;
    }
}
