import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M11.938 3.135a5.574 5.574 0 0 0-7.875 7.875L8 15l3.938-3.938a5.575 5.575 0 0 0 0-7.927Zm-.928 7L8 13.101l-3.01-3.01a4.27 4.27 0 0 1 0-6.029 4.27 4.27 0 0 1 6.02 0 4.27 4.27 0 0 1 0 6.03v.043ZM8 4.719A2.406 2.406 0 1 0 8 9.53 2.406 2.406 0 0 0 8 4.72Zm0 3.5A1.094 1.094 0 1 1 8 6.03 1.094 1.094 0 0 1 8 8.22Z"></path></svg>';

export class IconLocationPin extends HTMLElement {
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

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPin', '', null, 'IconLocationPin');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--locationPin');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPin', '', newVal, 'IconLocationPin');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--locationPin', newVal);
    }
}

customElements.define('icon-location-pin', IconLocationPin);
