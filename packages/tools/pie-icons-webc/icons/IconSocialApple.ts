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

const componentSelector = 'icon-social-apple';

export class IconSocialApple extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--apple';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--apple', '', null, 'IconSocialApple');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--apple', '', this.size, 'IconSocialApple');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--apple"><path d="M12.909 10.704c0 .061-.053.114-.07.166a7.068 7.068 0 0 1-1.558 2.546 1.671 1.671 0 0 1-2.021.28 2.135 2.135 0 0 0-2.144 0c-.31.17-.662.249-1.015.228a1.487 1.487 0 0 1-1.076-.613 7.368 7.368 0 0 1-1.978-5.119c.005-.539.118-1.071.333-1.566A2.844 2.844 0 0 1 7.3 5.121a1.531 1.531 0 0 0 1.514 0c.243-.124.498-.224.761-.297a3.246 3.246 0 0 1 1.925.201 2.17 2.17 0 0 1 1.111.945l-.49.437a2.766 2.766 0 0 0-.481.534 2.686 2.686 0 0 0 .376 3.133c.238.284.545.501.893.63Z"></path><path d="M10.38 1.875a2.31 2.31 0 0 1-.21 1.269A2.432 2.432 0 0 1 8.42 4.63c-.551.114-.543.123-.481-.437a2.739 2.739 0 0 1 2.178-2.319 2.42 2.42 0 0 1 .263 0Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialApple);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialApple;
    }
}
