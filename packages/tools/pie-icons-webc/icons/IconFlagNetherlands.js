import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"></path><path fill="#A2001D" d="M8 1a7 7 0 0 0-6.563 4.566h13.126A7 7 0 0 0 8 1Z"></path><path fill="#0052B4" d="M8 15a7 7 0 0 0 6.563-4.566H1.437A7 7 0 0 0 8 15Z"></path></svg>';

export class IconFlagNetherlands extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--netherlands', '', null, 'IconFlagNetherlands');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--netherlands');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--netherlands', '', newVal, 'IconFlagNetherlands');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--netherlands', newVal);
    }
}

customElements.define('icon-flag-netherlands', IconFlagNetherlands);
