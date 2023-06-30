import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--imageAdd"><path d="M13.469 7.469v.35a2.748 2.748 0 0 1-1.208 1.619l-.061.043c-1.75 1.103-2.922.525-4.375-.192-1.453-.718-3.063-1.514-5.25-.525v-5.25h7V2.219H1.219V14.03H14.78V7.47H13.47Zm0 5.25H2.53V10.25c1.969-1.12 3.229-.507 4.699.21a6.922 6.922 0 0 0 3.08.945 4.856 4.856 0 0 0 2.581-.805c.202-.13.395-.273.578-.429v2.547Z"></path><path d="M14.125 4.844h-1.969V2.875h-1.312v1.969H8.875v1.312h1.969v1.969h1.312V6.156h1.969V4.844Z"></path></svg>';

export class IconImageAdd extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--imageAdd');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--imageAdd', '', newVal, 'IconImageAdd');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-image-add', IconImageAdd);
