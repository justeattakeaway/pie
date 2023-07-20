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

const componentSelector = 'icon-settings-filled-large';

export class IconSettingsFilledLarge extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--settingsFilledLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--settingsFilledLarge', '', null, 'IconSettingsFilledLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--settingsFilledLarge', '', this.size, 'IconSettingsFilledLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--settingsFilledLarge"><path d="M25.564 16.044v-.097a3.412 3.412 0 0 1 .875-2.423l1.409-1.453-2.529-4.375-2.012.517a3.5 3.5 0 0 1-2.582-.455 3.43 3.43 0 0 1-1.654-1.987L18.53 3.75h-5.057l-.57 2.004a3.5 3.5 0 0 1-1.68 2.004 3.5 3.5 0 0 1-2.554.437l-2.013-.516-2.529 4.375 1.374 1.47c.597.662.912 1.532.875 2.424v.104a3.412 3.412 0 0 1-.875 2.424L4.126 19.93l2.53 4.375 2.012-.516a3.5 3.5 0 0 1 2.625.454 3.43 3.43 0 0 1 1.654 1.987l.525 2.021h5.057l.569-2.004a3.78 3.78 0 0 1 4.235-2.441l2.012.516 2.529-4.375-1.374-1.47a3.421 3.421 0 0 1-.936-2.432ZM19.063 16a3.028 3.028 0 0 1-.875 2.17 3.132 3.132 0 0 1-4.323 0 3.063 3.063 0 1 1 5.25-2.17h-.052Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSettingsFilledLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSettingsFilledLarge;
    }
}
