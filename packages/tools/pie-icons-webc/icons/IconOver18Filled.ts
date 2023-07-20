import {
    html, LitElement, TemplateResult,
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

const componentSelector = 'icon-over18-filled';

export class IconOver18Filled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--over18Filled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--over18Filled', '', null, 'IconOver18Filled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--over18Filled', '', this.size, 'IconOver18Filled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--over18Filled"><path d="M7.497 9.304c.403 0 .73-.253.73-.565 0-.311-.327-.564-.73-.564-.404 0-.73.253-.73.564 0 .312.326.565.73.565Z"></path><path d="M7.716 7.486a.555.555 0 0 1-.22.028.547.547 0 0 1-.59-.529.538.538 0 0 1 .59-.525.542.542 0 0 1 .596.525.555.555 0 0 1-.376.501Z"></path><path fill-rule="evenodd" d="M12.375 2.313h-8.75a1.313 1.313 0 0 0-1.313 1.312v8.75a1.313 1.313 0 0 0 1.313 1.313h8.75a1.313 1.313 0 0 0 1.313-1.313v-8.75a1.313 1.313 0 0 0-1.313-1.313ZM5.051 9.947H4.22V6.8l-.682.254-.28-.704 1.198-.538h.595v4.134Zm2.446.074c-1.085 0-1.606-.564-1.606-1.212a1.01 1.01 0 0 1 .713-.984 1.01 1.01 0 0 1-.555-.914c0-.6.494-1.173 1.448-1.173s1.452.573 1.452 1.173a1.028 1.028 0 0 1-.564.914 1.015 1.015 0 0 1 .722.984c0 .648-.525 1.212-1.61 1.212Zm4.878-1.584H11.5v.876h-.875v-.876H9.75v-.874h.875v-.875h.875v.875h.875v.875Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconOver18Filled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconOver18Filled;
    }
}
