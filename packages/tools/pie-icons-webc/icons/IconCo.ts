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

const componentSelector = 'icon-co';

export class IconCo extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--co';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--co', '', null, 'IconCo');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--co', '', this.size, 'IconCo');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--co"><path d="m14.466 9.094-1.216.437c.257.627.282 1.325.07 1.969 0 .053-.131.193-.534.193-.402 0-.534-.272-.875-.875l-.114-.193-.06-.105c-.193-.315-.368-.683-.552-1.059a4.611 4.611 0 0 0 2.625-1.864 1.488 1.488 0 0 0 .053-1.19 1.75 1.75 0 0 0-1.584-.936 2.16 2.16 0 0 1-.543-.096c0-.088.044-.228.061-.324a1.75 1.75 0 0 0-.62-2.047 2.363 2.363 0 0 0-2.302.157c-.647.28-.875.315-.945.201a2.319 2.319 0 0 0-1.846-.945 1.864 1.864 0 0 0-1.453.744c-.726 1.006-1.163.928-1.662.875a1.461 1.461 0 0 0-1.208.158 1.488 1.488 0 0 0-.63 1.032c.024.935.367 1.834.972 2.546a7.516 7.516 0 0 0-.875 3.5 1.75 1.75 0 0 0 .463 1.27 1.539 1.539 0 0 0 1.12.49h9.975a1.854 1.854 0 0 0 1.61-.753c.779-1.111.14-2.975.07-3.185ZM2.461 5.252a1.4 1.4 0 0 1 .272 0c.875.15 1.846.184 2.966-1.365a.551.551 0 0 1 .429-.2 1.067 1.067 0 0 1 .813.463c.744.919 1.75.464 2.477.166.42-.175.875-.367 1.058-.245.184.123.166.105.044.656a1.497 1.497 0 0 0 .271 1.54c.375.302.84.468 1.322.473.176.014.35.052.516.114a.15.15 0 0 1 0 .148 3.71 3.71 0 0 1-2.004 1.278 4.375 4.375 0 0 0-4.13-2.686 6.352 6.352 0 0 0-1.75.227 4.419 4.419 0 0 0-1.75.875 2.564 2.564 0 0 1-.56-1.321c.009-.07.035-.105.026-.123Zm.342 6.467a.226.226 0 0 1-.167-.079.41.41 0 0 1-.105-.306c.114-2.459.893-3.798 2.538-4.209.465-.121.945-.18 1.426-.175 2.039 0 2.678 1.365 3.421 2.94.216.502.467.987.753 1.452l.122.21c0 .07.07.14.114.21l-8.102-.043Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconCo);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconCo;
    }
}
