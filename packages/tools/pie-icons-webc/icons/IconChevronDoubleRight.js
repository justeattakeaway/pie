import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M7.754 13.18 13.126 8 7.71 2.82l.875-.963 5.539 5.347a1.164 1.164 0 0 1 0 1.636l-5.469 5.285-.901-.945Z"></path><path d="M2.784 13.18 8.139 8 2.74 2.82l.875-.963L9.18 7.204a1.164 1.164 0 0 1 0 1.671l-5.495 5.25-.901-.945Z"></path></svg>';

export class IconChevronDoubleRight extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleRight', '', null, 'IconChevronDoubleRight');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--chevronDoubleRight');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chevronDoubleRight', '', newVal, 'IconChevronDoubleRight');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--chevronDoubleRight', newVal);
    }
}

customElements.define('icon-chevron-double-right', IconChevronDoubleRight);
