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

const componentSelector = 'icon-cutlery';

export class IconCutlery extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--cutlery';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cutlery', '', null, 'IconCutlery');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cutlery', '', this.size, 'IconCutlery');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cutlery"><g clip-path="url(#prefix__clip0_18_2024)"><path d="m4.719 7.134 1.312-.018-.07-5.591-1.304.63.062 4.979Z"></path><path d="m11.132 11.701 2.135.333c-.017 1.216-.122 2.196-.183 2.966h1.32c.32-4.002.375-8.022.167-12.031-.087-.963-.324-1.479-.779-1.672a1.137 1.137 0 0 0-1.356.43 13.869 13.869 0 0 0-2.24 8.75 1.216 1.216 0 0 0 .936 1.224ZM13.25 2.89v.201c.153 2.54.173 5.088.061 7.63l-1.811-.289c-.18-2.632.43-5.258 1.75-7.542Z"></path><path d="m3.336 1.525-1.312.63v4.821a3.08 3.08 0 0 0 2.695 2.888V15H6.03V9.82a3.045 3.045 0 0 0 2.555-2.844V1.525l-1.312.63v4.821c0 1.164-1.392 1.636-1.97 1.636-.577 0-1.968-.472-1.968-1.636V1.525Z"></path></g><defs><clipPath id="prefix__clip0_18_2024"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconCutlery);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCutlery;
    }
}
