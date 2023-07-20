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

const componentSelector = 'icon-pound';

export class IconPound extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--pound';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pound', '', null, 'IconPound');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pound', '', this.size, 'IconPound');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pound"><path d="M12.585 11.885c-.315 1.277-1.33 1.803-2.695 1.803H3.625v-1.47h1.12v-3.5h-1.12V7.353h1.12V5.83c0-2.327 1.295-3.727 3.692-3.727A3.911 3.911 0 0 1 11.5 3.328l-1.05 1.067a2.625 2.625 0 0 0-2.012-.822c-1.278 0-2.048.647-2.048 2.187v1.593h3.587v1.365H6.39v3.5h3.5a1.18 1.18 0 0 0 1.277-.823l1.418.49Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconPound);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconPound;
    }
}
