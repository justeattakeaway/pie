import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--houseFilledLarge"><path d="M17.488 5.027a2.993 2.993 0 0 0-3.002 0c-4.375 2.8-11.305 10.098-11.611 10.37l1.269 1.207s.918-.954 2.231-2.249v13.02h19.25v-13.02a102.43 102.43 0 0 1 2.214 2.249l1.286-1.208c-.306-.271-7.245-7.569-11.637-10.369Zm-3.054 16.914a1.566 1.566 0 1 1 3.132 0v3.684h-3.132v-3.684Z"></path></svg>';

export class IconHouseFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--houseFilledLarge', '', null, 'IconHouseFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--houseFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--houseFilledLarge', '', newVal, 'IconHouseFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-house-filled-large', IconHouseFilledLarge);
