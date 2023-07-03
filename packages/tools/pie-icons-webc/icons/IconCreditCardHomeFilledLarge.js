import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--creditCardHomeFilledLarge"><path d="M11.625 20.375V26.5h-5.25V12.797a130.828 130.828 0 0 0-2.249 2.083L2.92 13.62c.288-.245 7.227-6.939 11.602-9.494.39-.216.824-.345 1.269-.376H16.122c.467.01.925.126 1.34.341 4.374 2.573 11.374 9.231 11.62 9.511l-1.208 1.26s-.928-.874-2.249-2.082v4.095h-10.5a3.5 3.5 0 0 0-3.5 3.5ZM13.375 23H28.25v3.5a1.75 1.75 0 0 1-1.75 1.75H15.125a1.75 1.75 0 0 1-1.75-1.75V23ZM16 26.5h2.625v-1.75H16v1.75Zm10.5-7.875H15.125a1.75 1.75 0 0 0-1.75 1.75v.875H28.25v-.875a1.75 1.75 0 0 0-1.75-1.75Z"></path></svg>';

export class IconCreditCardHomeFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeFilledLarge', '', null, 'IconCreditCardHomeFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--creditCardHomeFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeFilledLarge', '', newVal, 'IconCreditCardHomeFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-credit-card-home-filled-large', IconCreditCardHomeFilledLarge);
