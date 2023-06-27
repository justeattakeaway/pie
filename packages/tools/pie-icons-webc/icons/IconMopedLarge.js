
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--mopedLarge"><g clip-path="url(#prefix__clip0_4_686)"><path d="M12.5 9.875H2.875v1.75H12.5v-1.75Z"></path><path d="M28.723 20.777a4.375 4.375 0 0 0-3.5-1.233 4.377 4.377 0 0 0-.097-2.179l-3.5-11.742a2.625 2.625 0 0 0-2.555-1.873h-3.946L16 5.5h3.071a.875.875 0 0 1 .875.621l3.5 11.751a2.626 2.626 0 0 1-.42 2.363 2.425 2.425 0 0 1-1.96 1.015H16.15l-1.637-5.889a2.625 2.625 0 0 0-2.537-1.986h-7.35A2.625 2.625 0 0 0 2 16v7h2.713a4.288 4.288 0 0 0 1.198 3.955 4.331 4.331 0 0 0 6.169 0A4.313 4.313 0 0 0 13.287 23h8.06a4.374 4.374 0 1 0 7.375-2.205v-.018Zm-17.877 4.944a2.625 2.625 0 0 1-3.701 0 2.555 2.555 0 0 1-.612-2.712h4.934a2.563 2.563 0 0 1-.62 2.712ZM3.75 21.25V16a.875.875 0 0 1 .875-.875h7.35a.875.875 0 0 1 .875.674l1.479 5.451H3.75Zm23.73 4.48a2.625 2.625 0 0 1-3.71-3.71 2.625 2.625 0 0 1 4.478 1.855c0 .696-.276 1.363-.768 1.855Z"></path></g><defs><clipPath id="prefix__clip0_4_686"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>';

export default class IconMopedLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconMopedLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconMopedLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-moped-large', IconMopedLarge);
