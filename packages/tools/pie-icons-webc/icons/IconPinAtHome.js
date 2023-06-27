
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pinAtHome"><path d="m14.694 7.125-.91.875s-.298-.289-.753-.7v1.575H11.72V6.154a27.329 27.329 0 0 0-3.5-2.713.534.534 0 0 0-.403 0 26.933 26.933 0 0 0-3.5 2.704v6.44h8.75v1.313H2.97V7.335c-.455.411-.744.691-.753.7l-.91-.91a42.972 42.972 0 0 1 5.819-4.813 1.75 1.75 0 0 1 1.75-.008 42.882 42.882 0 0 1 5.819 4.821ZM7.124 9.75a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm1.75.875a.875.875 0 1 0 1.751 0 .875.875 0 0 0-1.75 0Zm3.5-.875a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Z"></path></svg>';

export default class IconPinAtHome extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPinAtHome');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPinAtHome');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-pin-at-home', IconPinAtHome);
