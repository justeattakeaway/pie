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

const componentSelector = 'icon-user-shield';

export class IconUserShield extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--userShield';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userShield', '', null, 'IconUserShield');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userShield', '', this.size, 'IconUserShield');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userShield"><path d="M13.127 3.791 8 1.14 2.872 3.791a1.525 1.525 0 0 0-.831 1.374v3.588c0 .043.07 4.637 5.793 6.124l.166.044.166-.043c5.723-1.497 5.793-6.082 5.793-6.134V5.165c0-.577-.316-1.102-.832-1.374ZM3.362 5.165c0-.087.044-.157.123-.201L8 2.628l4.515 2.345c.07.035.122.113.122.2v3.58c0 .166-.122 3.56-4.637 4.812-4.524-1.26-4.629-4.664-4.638-4.812V5.165Z"></path><path d="M9.251 8.149a1.787 1.787 0 0 0-1.278-3.036c-.98 0-1.784.805-1.784 1.785 0 .49.2.936.525 1.26-1.147.385-1.97 1.25-1.97 2.24h1.313c0-.464.744-1.138 1.917-1.138 1.172 0 1.968.656 1.968 1.138h1.313c0-1.015-.832-1.882-2.013-2.258l.009.009ZM7.974 6.425a.47.47 0 0 1 .472.473.47.47 0 0 1-.472.472.47.47 0 0 1-.473-.472.47.47 0 0 1 .473-.473Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconUserShield);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconUserShield;
    }
}
