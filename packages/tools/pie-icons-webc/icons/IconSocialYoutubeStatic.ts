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

const componentSelector = 'icon-social-youtube-static';

export class IconSocialYoutubeStatic extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--youtubeStatic';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeStatic', '', null, 'IconSocialYoutubeStatic');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeStatic', '', this.size, 'IconSocialYoutubeStatic');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--youtubeStatic"><path fill="red" d="M13.95 4.985a1.567 1.567 0 0 0-1.093-1.118c-.964-.264-4.831-.264-4.831-.264s-3.867 0-4.831.264a1.567 1.567 0 0 0-1.093 1.118c-.259.987-.259 3.045-.259 3.045s0 2.058.259 3.045c.142.544.56.973 1.093 1.119.964.264 4.83.264 4.83.264s3.867 0 4.832-.264a1.567 1.567 0 0 0 1.093-1.119c.258-.986.258-3.045.258-3.045s0-2.058-.258-3.045Z"></path><path fill="#fff" d="M6.761 9.899 9.993 8.03 6.761 6.161V9.9Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconSocialYoutubeStatic);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialYoutubeStatic;
    }
}
