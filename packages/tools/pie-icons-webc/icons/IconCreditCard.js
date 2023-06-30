import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--creditCard"><path d="M3.625 9.094H6.25v1.312H3.625V9.094ZM14.781 4.5v7a1.54 1.54 0 0 1-1.531 1.531H2.75A1.54 1.54 0 0 1 1.219 11.5v-7A1.54 1.54 0 0 1 2.75 2.969h10.5A1.54 1.54 0 0 1 14.781 4.5Zm-12.25 0v1.094H13.47V4.5a.219.219 0 0 0-.219-.219H2.75a.219.219 0 0 0-.219.219Zm10.938 7V6.906H2.53V11.5a.219.219 0 0 0 .219.219h10.5a.219.219 0 0 0 .219-.219Z"></path></svg>';

export class IconCreditCard extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCard', '', null, 'IconCreditCard');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--creditCard');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCard', '', newVal, 'IconCreditCard');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-credit-card', IconCreditCard);
