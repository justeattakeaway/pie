import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--iDeal"><path fill="#000" fill-rule="evenodd" d="M8.853 13.25H1.875V2.75h6.978c2.857.04 5.158 1.969 5.158 5.25 0 3.281-2.301 5.21-5.158 5.25Zm-6.431-.547V3.297h6.374C11.535 3.31 13.47 5.147 13.47 8c0 2.852-1.934 4.69-4.673 4.703H2.422Z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M3.148 8.696h1.82v3.277h-1.82V8.695Zm.91-.486a1.154 1.154 0 1 0 0-2.31 1.154 1.154 0 1 0 0 2.31Z" clip-rule="evenodd"></path><path fill="#E54279" fill-rule="evenodd" d="M12.72 7.545c-.288-3.522-3.928-3.522-3.928-3.522H5.939v7.954h2.853s3.885 0 3.946-3.885h-1.334V5.966h.547v1.579h.77ZM7.52 5.965h1.273v.548h-.726v.24h.669v.486h-.67v.302h.788v.546H7.52V5.962v.005Zm-.81 1.064c0-.516-.34-.516-.34-.516h-.425v-.547h.363s.91 0 .91 1.063-.91 1.063-.91 1.063h-.363v-.547h.424s.341 0 .341-.516ZM9.75 5.966h.744l.639 2.126h-.552l-.114-.403h-.7l-.118.403H9.1l.651-2.126Zm.372.56.192.625H9.93l.193-.625Z" clip-rule="evenodd"></path></svg>';

export class IconPaymentIDeal extends HTMLElement {
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

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        const defaultSize = getDefaultIconSize('IconPaymentIDeal');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPaymentIDeal');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-payment-i-deal', IconPaymentIDeal);
