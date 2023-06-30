import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M17.461 4.109a3.15 3.15 0 0 0-2.94 0C10.146 6.68 3.208 13.375 2.92 13.62l1.207 1.26s.928-.875 2.25-2.083V26.5h19.25V12.797a130.695 130.695 0 0 1 2.248 2.083l1.251-1.26c-.332-.245-7.271-6.939-11.664-9.511ZM9.438 20.375a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Z"></path></svg>';

export class IconPinAtHomeFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeFilledLarge', '', null, 'IconPinAtHomeFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--pinAtHomeFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeFilledLarge', '', newVal, 'IconPinAtHomeFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--pinAtHomeFilledLarge', newVal);
    }
}

customElements.define('icon-pin-at-home-filled-large', IconPinAtHomeFilledLarge);
