import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--deliveryFee"><g clip-path="url(#prefix__clip0_18_2472)"><path d="M13.127 1.735 7.8 3.686 4.64 10.502l7.28 3.37 3.159-6.808-1.952-5.329Zm-2.065 9.818L6.96 9.645l2.117-4.568 3.01-1.102 1.103 3.01-2.127 4.567ZM1.876 6.25H4.5V8H1.875V6.25ZM6.031 4.5H1V2.75h5.031V4.5Z"></path></g><defs><clipPath id="prefix__clip0_18_2472"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconDeliveryFee extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--deliveryFee', '', null, 'IconDeliveryFee');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--deliveryFee');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--deliveryFee', '', newVal, 'IconDeliveryFee');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-delivery-fee', IconDeliveryFee);
