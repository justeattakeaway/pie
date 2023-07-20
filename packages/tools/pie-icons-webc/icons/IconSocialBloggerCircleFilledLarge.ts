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

const componentSelector = 'icon-social-blogger-circle-filled-large';

export class IconSocialBloggerCircleFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--bloggerCircleFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bloggerCircleFilledLarge', '', null, 'IconSocialBloggerCircleFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bloggerCircleFilledLarge', '', this.size, 'IconSocialBloggerCircleFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--bloggerCircleFilledLarge"><path d="M13.375 14.399c.081.009.164.009.245 0h2.537a.875.875 0 0 0-.052-1.706h-2.721a.875.875 0 0 0 0 1.67l-.009.036Z"></path><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.93 14.691a4.471 4.471 0 0 1-3.316 4.314 4.55 4.55 0 0 1-1.138.14h-4.821a4.445 4.445 0 0 1-4.331-3.456 4.533 4.533 0 0 1-.114-.971v-4.935a4.454 4.454 0 0 1 3.342-4.297c.364-.09.737-.137 1.112-.14h2.266a4.454 4.454 0 0 1 4.445 4.428.875.875 0 0 0 .578.805.875.875 0 0 0 .332.061h.77c.192 0 .379.068.525.192a.874.874 0 0 1 .35.7v3.16Z"></path><path d="M18.826 17.75a.956.956 0 0 0-.271 0h-4.918a1.067 1.067 0 0 0-.262 0 .813.813 0 0 0-.613.534.778.778 0 0 0 .158.796.805.805 0 0 0 .639.28h5.153a.804.804 0 0 0 .088-1.584l.026-.026Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialBloggerCircleFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialBloggerCircleFilledLarge;
    }
}
