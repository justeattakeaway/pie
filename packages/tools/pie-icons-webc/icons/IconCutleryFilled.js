import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cutleryFilled"><g clip-path="url(#prefix__clip0_6127_3639)"><path d="m4.719 7.134 1.312-.018-.07-5.591-1.303.63.06 4.979Z"></path><path d="m11.133 11.701 2.135.333c-.018 1.216-.123 2.196-.184 2.966h1.321a91.89 91.89 0 0 0 .166-12.031c-.087-.963-.323-1.479-.778-1.672a1.137 1.137 0 0 0-1.357.43 13.869 13.869 0 0 0-2.24 8.75 1.217 1.217 0 0 0 .937 1.224Z"></path><path d="m3.336 1.525-1.312.63v4.821a3.08 3.08 0 0 0 2.695 2.888V15H6.03V9.82a3.045 3.045 0 0 0 2.555-2.844V1.525l-1.312.63v4.821c0 1.164-1.391 1.636-1.969 1.636-.577 0-1.969-.472-1.969-1.636V1.525Z"></path></g><defs><clipPath id="prefix__clip0_6127_3639"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconCutleryFilled extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--cutleryFilled');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--cutleryFilled', '', newVal, 'IconCutleryFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-cutlery-filled', IconCutleryFilled);
