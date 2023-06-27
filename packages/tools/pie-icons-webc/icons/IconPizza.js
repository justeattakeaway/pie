
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pizza"><path d="M13.924 4.99C13.1 3.704 10.625.764 5.253 1.087a1.496 1.496 0 0 0-1.41 1.497V15l9.774-8.041a1.496 1.496 0 0 0 .307-1.969Zm-8.75 4.83a1.12 1.12 0 0 0 .875-.324 1.146 1.146 0 0 0 0-1.619 1.164 1.164 0 0 0-.875-.332V4.622a7.114 7.114 0 0 1 5.941 2.704l-5.959 4.856.018-2.362Zm7.63-3.876-.674.551a8.478 8.478 0 0 0-6.974-3.176v-.735a.192.192 0 0 1 .219-.193h.718c4.156 0 6.124 2.293 6.772 3.325a.193.193 0 0 1-.079.228h.018Zm-3.5 1.12a1.006 1.006 0 1 1-.98-1.007A1.006 1.006 0 0 1 9.33 7.064h-.026Z"></path></svg>';

export default class IconPizza extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPizza');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPizza');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-pizza', IconPizza);
