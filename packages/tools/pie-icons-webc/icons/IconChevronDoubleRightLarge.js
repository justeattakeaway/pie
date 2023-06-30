import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M13.979 26.124 24.46 16a.131.131 0 0 0 0-.096L13.961 5.84l1.225-1.216 10.5 10.063a1.907 1.907 0 0 1 0 2.624L15.178 27.376l-1.2-1.251Z"></path><path d="M5.806 26.124 16.298 16a.131.131 0 0 0 0-.096L5.797 5.84l1.224-1.216 10.5 10.063a1.908 1.908 0 0 1 0 2.624L7.006 27.376l-1.199-1.251Z"></path></svg>';

export class IconChevronDoubleRightLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleRightLarge', '', null, 'IconChevronDoubleRightLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--chevronDoubleRightLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleRightLarge', '', newVal, 'IconChevronDoubleRightLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--chevronDoubleRightLarge', newVal);
    }
}

customElements.define('icon-chevron-double-right-large', IconChevronDoubleRightLarge);
