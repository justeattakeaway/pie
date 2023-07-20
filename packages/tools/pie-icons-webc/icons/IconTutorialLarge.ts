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

const componentSelector = 'icon-tutorial-large';

export class IconTutorialLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--tutorialLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--tutorialLarge', '', null, 'IconTutorialLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--tutorialLarge', '', this.size, 'IconTutorialLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--tutorialLarge"><path fill-rule="evenodd" d="m24.557 15.479 4.612-1.938v-1.61L16.34 6.541h-.682L2.83 11.931v1.392h-.009V19h1.75v-4.728l2.862 1.202v6.746l.306.263a12.666 12.666 0 0 0 8.251 3.036v-.009c2.783 0 5.565-.901 7.866-2.721l.7-.551v-6.76Zm-17.123-1.9v-.003L16 17.181l10.57-4.445L16 8.3 5.43 12.736l2.004.843Zm15.338 7.846c-3.98 3.15-9.633 3.115-13.588-.018v-5.18L16 19.09l6.807-2.861v5.17l-.035.027Z" clip-rule="evenodd"></path></svg>`;
    }
}

customElements.define(componentSelector, IconTutorialLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconTutorialLarge;
    }
}
