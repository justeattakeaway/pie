import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--foodReady"><path d="M13.941 12.935v-2.923a5.95 5.95 0 0 0-5.25-5.897 1.278 1.278 0 1 0-1.347 0 5.95 5.95 0 0 0-5.25 5.897v2.923h-.656v1.313h13.124v-1.313h-.62Zm-10.57-2.923a4.629 4.629 0 0 1 9.258 0v2.923H3.37v-2.923Z"></path><path d="M7.151 10.152 5.944 8.937 4.98 9.9l2.17 2.17L11.02 8.2l-.963-.953-2.905 2.904Z"></path></svg>';

export class IconFoodReady extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--foodReady', '', null, 'IconFoodReady');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--foodReady');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--foodReady', '', newVal, 'IconFoodReady');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-food-ready', IconFoodReady);
