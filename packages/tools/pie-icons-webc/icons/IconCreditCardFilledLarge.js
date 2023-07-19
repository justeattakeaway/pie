import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--creditCardFilledLarge"><path d="M2.875 13.813V23A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23v-9.188H2.875Zm9.625 6.562H7.25v-1.75h5.25v1.75Zm10.754.621a1.479 1.479 0 0 1-1.129-.516 1.496 1.496 0 1 1 0-1.96 1.497 1.497 0 1 1 1.129 2.476ZM2.875 11.188V9A2.625 2.625 0 0 1 5.5 6.375h21A2.625 2.625 0 0 1 29.125 9v2.188H2.875Z"></path></svg>';

export class IconCreditCardFilledLarge extends HTMLElement {
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

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardFilledLarge', '', null, 'IconCreditCardFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--creditCardFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardFilledLarge', '', newVal, 'IconCreditCardFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-credit-card-filled-large', IconCreditCardFilledLarge);
