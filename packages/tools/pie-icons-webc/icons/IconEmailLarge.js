import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--emailLarge"><path d="M26.5 6.375h-21A2.625 2.625 0 0 0 2.875 9v14A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23V9A2.625 2.625 0 0 0 26.5 6.375Zm.875 3.01v13.519l-7.297-6.755 7.297-6.764Zm-11.856 9.888c.16.145.37.226.586.227a.875.875 0 0 0 .595-.236l2.091-1.925 7.061 6.536H6.165l7.21-6.545 2.144 1.943ZM26.168 8.125l-10.063 9.31L5.85 8.125h20.318ZM12.08 16.149l-7.455 6.764V9.376l7.455 6.773Z"></path></svg>';

export class IconEmailLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconEmailLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconEmailLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-email-large', IconEmailLarge);
