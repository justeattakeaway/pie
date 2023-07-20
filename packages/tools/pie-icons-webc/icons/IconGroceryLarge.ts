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

const componentSelector = 'icon-grocery-large';

export class IconGroceryLarge extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--groceryLarge';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--groceryLarge', '', null, 'IconGroceryLarge');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--groceryLarge', '', this.size, 'IconGroceryLarge');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--groceryLarge"><path d="M29.125 16.866h-2.354l1.155-5.355L26.02 8.38l.341-1.558-2.905-.621-.359 1.662-1.898 1.226-.438-2.835a3.995 3.995 0 0 0-2.468-3.098l-.096-.035a3.963 3.963 0 0 0-4.077.709 3.96 3.96 0 0 0-1.322 3.587l.14.928c-1.014.008-2.038.481-2.642 1.531-.613-.543-1.33-.84-2.056-.857a2.362 2.362 0 0 0-1.917.813c-.77.867-1.04 1.864-.77 2.8.106.359.28.683.5.963a2.702 2.702 0 0 0-.464.315 2.626 2.626 0 0 0-.902 1.995c0 .35.07.674.175.971H2.875v1.75H4.38l1.995 8.207a2.883 2.883 0 0 0 2.809 2.214h13.694c1.338 0 2.493-.91 2.808-2.213l1.995-8.208h1.444v-1.759Zm-8.418 0a4.562 4.562 0 0 0-.175-.901l.464-2.152c.21-.097.49-.193.77-.15.307.044.578.255.84.622l.21.315c.412.621.937 1.4 1.873 1.575.122.026.253.035.376.035h.044l-.14.656h-4.27.008Zm-5.757-3.211c2.039 0 3.71 1.4 3.981 3.211H10.97c.271-1.811 1.942-3.211 3.981-3.211Zm9.45-4.559 1.663 2.73-.534 2.468c-.306.166-.464.166-.508.157-.219-.043-.507-.472-.744-.831-.078-.122-.157-.245-.245-.359-.682-.954-1.47-1.251-2.02-1.338a2.913 2.913 0 0 0-.613-.018l.227-1.041L24.4 9.079v.017Zm-9.135-3.963c.63-.552 1.505-.7 2.284-.403l.096.035c.411.158.744.446.997.796l-2.213.341.262 1.733 2.459-.376.219 1.435-2.459.376.262 1.732 2.46-.376.122.814-.525 2.459c-.998-1.041-2.406-1.707-3.981-1.785l-.718-4.778a2.224 2.224 0 0 1 .735-2.012v.009ZM6.436 15.895c0-.254.114-.508.298-.665.175-.158.411-.21.673-.175 1.357.201 1.61-.621 1.654-.787.053-.228.114-.99-1.093-1.34-.202-.06-.622-.367-.736-.787-.104-.35.035-.735.403-1.146.131-.149.324-.236.578-.227.42 0 .857.27 1.242.734.464.56.963.57 1.216.517.7-.132.972-.823 1.033-1.015.28-.805.945-.989 1.505-.893l.297 1.986c-2.327.57-4.086 2.468-4.313 4.778H7.539c-.814 0-1.103-.508-1.103-.971v-.009ZM23.99 26.413a1.141 1.141 0 0 1-1.111.875H9.184c-.534 0-.989-.36-1.111-.875l-1.89-7.797h19.696l-1.89 7.797Z"></path><path d="M18.074 21.128H14.39v1.75h3.684v-1.75Z"></path></svg>`;
    }
}

customElements.define(componentSelector, IconGroceryLarge);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconGroceryLarge;
    }
}
