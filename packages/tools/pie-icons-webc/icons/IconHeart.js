import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M8 14.195 2.234 8.263a3.745 3.745 0 0 1 0-5.128 3.413 3.413 0 0 1 4.9 0l.875.875.875-.875a3.421 3.421 0 0 1 4.909 0 3.754 3.754 0 0 1 0 5.128L8 14.195ZM4.675 3.406a2.082 2.082 0 0 0-1.514.648 2.432 2.432 0 0 0 0 3.29l4.84 4.961 4.838-4.97a2.432 2.432 0 0 0 0-3.281 2.135 2.135 0 0 0-3.045 0L8.735 5.086a1.103 1.103 0 0 1-1.531 0L6.189 4.054a2.1 2.1 0 0 0-1.514-.648Z"></path></svg>';

export class IconHeart extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--heart', '', null, 'IconHeart');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--heart');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--heart', '', newVal, 'IconHeart');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--heart', newVal);
    }
}

customElements.define('icon-heart', IconHeart);
