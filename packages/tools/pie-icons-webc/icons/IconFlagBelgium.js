
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--belgium"><path fill="#FFDA44" d="M10.433 1.438a6.986 6.986 0 0 0-4.867 0L4.956 8l.61 6.562a6.984 6.984 0 0 0 4.867 0L11.043 8l-.61-6.562Z"></path><path fill="#D80027" d="M15 8a7 7 0 0 0-4.567-6.562v13.124A7.001 7.001 0 0 0 15 8Z"></path><path fill="#333" d="M1 8a7 7 0 0 0 4.566 6.562V1.438A6.999 6.999 0 0 0 1 8Z"></path></svg>';

export default class IconFlagBelgium extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconFlagBelgium');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconFlagBelgium');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-flag-belgium', IconFlagBelgium);
