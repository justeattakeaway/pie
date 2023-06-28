import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--romania"><path fill="#FFDA44" d="M7.997 1a6.91 6.91 0 0 0-2.433.438L1.244 8l4.32 6.563a6.984 6.984 0 0 0 4.867 0L14.751 8l-4.32-6.563A6.986 6.986 0 0 0 7.997 1Z"></path><path fill="#D80027" d="M14.997 8a7 7 0 0 0-4.566-6.563v13.126A7 7 0 0 0 14.997 8Z"></path><path fill="#0052B4" d="M5.564 14.563V1.437a7 7 0 0 0 0 13.126Z"></path></svg>';

export class IconFlagRomania extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconFlagRomania');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconFlagRomania');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-flag-romania', IconFlagRomania);
