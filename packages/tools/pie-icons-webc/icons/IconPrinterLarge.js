import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M29.125 13.375A2.625 2.625 0 0 0 26.5 10.75H23v-7H9v7H5.5a2.625 2.625 0 0 0-2.625 2.625V24.75H9v3.5h14v-3.5h6.125V13.375ZM10.75 5.5h10.5v5.25h-10.5V5.5Zm10.5 21h-10.5v-6.125h10.5V26.5Zm6.125-3.5H23v-2.625h1.75v-1.75H7.25v1.75H9V23H4.625v-9.625A.875.875 0 0 1 5.5 12.5h21a.875.875 0 0 1 .875.875V23Zm-6.125-7.875h3.5v1.75h-3.5v-1.75Z"></path></svg>';

export class IconPrinterLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--printerLarge', '', null, 'IconPrinterLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--printerLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--printerLarge', '', newVal, 'IconPrinterLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--printerLarge', newVal);
    }
}

customElements.define('icon-printer-large', IconPrinterLarge);
