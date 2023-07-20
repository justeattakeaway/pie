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

const componentSelector = 'icon-logo-skip-circle';

export class IconLogoSkipCircle extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--skipCircle';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--skipCircle', '', null, 'IconLogoSkipCircle');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--skipCircle', '', this.size, 'IconLogoSkipCircle');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--skipCircle"><path d="M8 1a7 7 0 1 0 7 7 7.01 7.01 0 0 0-7-7Zm0 12.645a5.645 5.645 0 1 1 0-11.29 5.645 5.645 0 0 1 0 11.29Z"></path><path fill-rule="evenodd" d="M8.86 7.368c-.268-.315-.442-.54-.401-.786.05-.307.263-.617.637-.617.412 0 .518.087.75.2a.18.18 0 0 0 .257-.108l.338-1.204-.234-.114-.035-.017-.01-.005a2.082 2.082 0 0 0-.882-.182c-1.276 0-2.436.961-2.627 2.142-.134.827.37 1.41.737 1.836l.032.036c.265.3.452.533.406.803-.076.469-.442.623-.747.623-.484 0-.625-.08-.892-.211-.038-.019-.108-.053-.168-.033a.183.183 0 0 0-.119.123l-.322 1.161-.042.149s.635.34 1.369.34c1.087 0 2.026-.44 2.584-1.5.14-.27.222-.566.243-.87.028-.774-.542-1.382-.873-1.766Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconLogoSkipCircle);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLogoSkipCircle;
    }
}
