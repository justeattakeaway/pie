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

const componentSelector = 'icon-sound-on-filled-large';

export class IconSoundOnFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--soundOnFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnFilledLarge', '', null, 'IconSoundOnFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnFilledLarge', '', this.size, 'IconSoundOnFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--soundOnFilledLarge"><path d="M21.688 3.75h-2.39l-.253.245a49.875 49.875 0 0 1-4.016 3.439 48.477 48.477 0 0 1-4.961 3.316H6.813a2.625 2.625 0 0 0-2.625 2.625v5.25a2.625 2.625 0 0 0 2.625 2.625h3.255a47.09 47.09 0 0 1 4.96 3.316 48.293 48.293 0 0 1 4.008 3.439l.254.245h2.398V3.75Z"></path><path d="M23.438 10.129v1.864a4.375 4.375 0 0 1 0 8.014v1.864a6.125 6.125 0 0 0 0-11.742Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSoundOnFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSoundOnFilledLarge;
    }
}
