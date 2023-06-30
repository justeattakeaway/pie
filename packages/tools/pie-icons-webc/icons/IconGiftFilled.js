import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M7.333 4.966h1.334V7.63H14V4.966H8.667a1.663 1.663 0 0 1 2-1.59v-1.34c-.116-.01-.223-.036-.338-.036C9.378 2 8.542 2.453 8 3.137A2.995 2.995 0 0 0 5.671 2c-.115 0-.222.018-.338.036v1.332c.107-.018.223-.036.338-.036.907 0 1.645.728 1.662 1.625H2v2.664h5.333V4.957v.009Z"></path><path d="M8.667 14.29h2.853c.88 0 1.591-.72 1.591-1.59V8.963H8.667v5.328Z"></path><path d="M2.889 8.962v3.739c0 .879.711 1.589 1.591 1.589h2.853V8.962H2.89Z"></path></svg>';

export class IconGiftFilled extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--giftFilled', '', null, 'IconGiftFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--giftFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--giftFilled', '', newVal, 'IconGiftFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--giftFilled', newVal);
    }
}

customElements.define('icon-gift-filled', IconGiftFilled);
