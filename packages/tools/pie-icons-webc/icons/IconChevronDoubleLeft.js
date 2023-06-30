import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M8.25 2.82 2.895 8l5.399 5.197-.875.963-5.565-5.364a1.164 1.164 0 0 1 0-1.671l5.495-5.25.901.945Z"></path><path d="M13.22 2.82 7.865 8l5.399 5.197-.875.963-5.565-5.364a1.164 1.164 0 0 1 0-1.671l5.495-5.25.901.945Z"></path></svg>';

export class IconChevronDoubleLeft extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleLeft', '', null, 'IconChevronDoubleLeft');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--chevronDoubleLeft');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleLeft', '', newVal, 'IconChevronDoubleLeft');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--chevronDoubleLeft', newVal);
    }
}

customElements.define('icon-chevron-double-left', IconChevronDoubleLeft);
