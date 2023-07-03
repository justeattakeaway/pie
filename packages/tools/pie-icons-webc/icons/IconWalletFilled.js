import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--walletFilled"><path d="m9.75 3.065-.263-.735a1.531 1.531 0 0 0-1.995-.831L3.73 3.065h6.02Z"></path><path d="M10.397 11.325a.394.394 0 0 1-.394-.394v-3.15c.001-.075.025-.149.07-.21a.385.385 0 0 1 .298-.184h3.115V5.91a1.531 1.531 0 0 0-1.531-1.532h-8.97a1.549 1.549 0 0 0-.664.123 1.496 1.496 0 0 0-.761.875c-.071.169-.107.35-.105.534v7a1.54 1.54 0 0 0 1.53 1.531h8.97a1.54 1.54 0 0 0 1.53-1.531v-1.584h-3.088Z"></path><path d="M11.316 8.7v1.304h3.019V8.7h-3.02Z"></path></svg>';

export class IconWalletFilled extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--walletFilled', '', null, 'IconWalletFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--walletFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--walletFilled', '', newVal, 'IconWalletFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-wallet-filled', IconWalletFilled);
