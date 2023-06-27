
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--orderLarge"><path d="M23.875 3.75H8.125A2.625 2.625 0 0 0 5.5 6.375v21.927l3.561-1.898L12.5 28.38l3.5-1.968 3.5 1.968 3.43-1.977 3.57 1.898V6.375a2.625 2.625 0 0 0-2.625-2.625Zm.875 21.639-.989-.525a1.751 1.751 0 0 0-1.688 0l-2.625 1.479-2.625-1.488a1.75 1.75 0 0 0-1.75 0l-2.626 1.488-2.52-1.453a1.75 1.75 0 0 0-1.688 0l-.989.499V6.375a.875.875 0 0 1 .875-.875h15.75a.875.875 0 0 1 .875.875v19.014ZM10.75 16h10.5v1.75h-10.5V16Zm1.75 3.5h7v1.75h-7V19.5Zm2.844-5.766-2.844-2.8 1.242-1.243 1.567 1.575 3.754-3.762 1.312 1.242-5.031 4.988Z"></path></svg>';

export class IconOrderLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconOrderLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconOrderLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-order-large', IconOrderLarge);
