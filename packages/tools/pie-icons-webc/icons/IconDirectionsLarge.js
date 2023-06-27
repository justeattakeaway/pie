
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--directionsLarge"><path d="M28.451 13.664 20.9 7.25h-6.65V5.5a1.75 1.75 0 0 0-1.75-1.75h-1.75A1.75 1.75 0 0 0 9 5.5v1.75H2.875v14.875H9v5.25h1.75v-5.25h1.75v5.25h1.75v-5.25h6.65l7.499-5.495a1.91 1.91 0 0 0 .726-1.505 1.873 1.873 0 0 0-.674-1.461ZM10.75 5.938a.438.438 0 0 1 .438-.438h.874a.438.438 0 0 1 .438.438V7.25h-1.75V5.937Zm9.45 14.437H4.625V9H20.2l7.175 6.125-7.175 5.25Z"></path><path d="m19.78 14.197-2.861-2.87-1.234 1.243 1.68 1.68H10.75v6.125h1.75V16h4.865l-1.68 1.68 1.234 1.242 2.861-2.87a1.303 1.303 0 0 0 0-1.854Z"></path></svg>';

export default class IconDirectionsLarge extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);

        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        const defaultSize = getDefaultIconSize('IconDirectionsLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconDirectionsLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-directions-large', IconDirectionsLarge);
