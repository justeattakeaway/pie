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

const componentSelector = 'icon-sound-on-filled';

export class IconSoundOnFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--soundOnFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnFilled', '', null, 'IconSoundOnFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnFilled', '', this.size, 'IconSoundOnFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--soundOnFilled"><path d="m11.5 1.219-.193.183A21.624 21.624 0 0 1 9.348 3.1a23.625 23.625 0 0 1-2.406 1.619H4.5A1.54 1.54 0 0 0 2.969 6.25v3.5A1.54 1.54 0 0 0 4.5 11.281h2.441c.837.487 1.64 1.028 2.407 1.619a22.87 22.87 0 0 1 1.986 1.697l.192.184h1.505V1.22H11.5Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSoundOnFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSoundOnFilled;
    }
}
