import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--deliveryFeeLarge"><path d="M25.424 4.45 15.326 8.125 9.15 21.477l13.799 6.388 6.177-13.326-3.701-10.09Zm-3.299 21.096L11.476 20.63l5.136-11.087 7.77-2.852 2.853 7.77-5.11 11.086ZM9.875 15.125H5.5v-1.75h4.375v1.75Zm1.75-4.375h-8.75V9h8.75v1.75Zm12.25.438a1.312 1.312 0 1 1-2.625 0 1.312 1.312 0 0 1 2.625 0Z"></path></svg>';

export class IconDeliveryFeeLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--deliveryFeeLarge', '', null, 'IconDeliveryFeeLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--deliveryFeeLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--deliveryFeeLarge', '', newVal, 'IconDeliveryFeeLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-delivery-fee-large', IconDeliveryFeeLarge);
