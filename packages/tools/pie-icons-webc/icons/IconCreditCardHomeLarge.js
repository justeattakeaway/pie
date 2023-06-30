import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M8.125 24.75h2.625v1.75H6.375V12.797a129.859 129.859 0 0 0-2.249 2.083L2.92 13.62c.288-.245 7.227-6.939 11.602-9.494a3.15 3.15 0 0 1 2.94 0c4.375 2.573 11.375 9.231 11.62 9.511l-1.207 1.26s-.928-.874-2.249-2.082V16h-1.75v-4.769a55.803 55.803 0 0 0-7.28-5.6 1.444 1.444 0 0 0-1.216 0 55.251 55.251 0 0 0-7.254 5.6V24.75Zm21-4.375V26.5a2.625 2.625 0 0 1-2.625 2.625H15.125A2.625 2.625 0 0 1 12.5 26.5v-6.125a2.625 2.625 0 0 1 2.625-2.625H26.5a2.625 2.625 0 0 1 2.625 2.625Zm-14.875 0v.875h13.125v-.875a.875.875 0 0 0-.875-.875H15.125a.875.875 0 0 0-.875.875ZM27.375 26.5V23H14.25v3.5a.875.875 0 0 0 .875.875H26.5a.875.875 0 0 0 .875-.875ZM16 26.5h2.625v-1.75H16v1.75Z"></path></svg>';

export class IconCreditCardHomeLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeLarge', '', null, 'IconCreditCardHomeLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--creditCardHomeLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeLarge', '', newVal, 'IconCreditCardHomeLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--creditCardHomeLarge', newVal);
    }
}

customElements.define('icon-credit-card-home-large', IconCreditCardHomeLarge);
