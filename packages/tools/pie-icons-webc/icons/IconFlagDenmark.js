import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"></path><path fill="#D80027" d="M6.476 7.087h8.463A7 7 0 0 0 8 1a7.027 7.027 0 0 0-1.523.164v5.923Zm-1.823 0V1.85A7.005 7.005 0 0 0 1.06 7.087h3.593Zm0 1.826H1.06a7.005 7.005 0 0 0 3.593 5.236V8.913Zm1.823 0v5.92a7 7 0 0 0 8.463-5.92H6.476Z"></path></svg>';

export class IconFlagDenmark extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--denmark', '', null, 'IconFlagDenmark');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--denmark');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--denmark', '', newVal, 'IconFlagDenmark');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--denmark', newVal);
    }
}

customElements.define('icon-flag-denmark', IconFlagDenmark);
