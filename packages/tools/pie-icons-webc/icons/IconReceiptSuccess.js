import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--receiptSuccess"><path d="M10.713 3.249a.201.201 0 0 1-.175 0L8 2.102 5.463 3.25a.201.201 0 0 1-.176 0L2.094 1.805v12.39l3.193-1.444a.202.202 0 0 1 .176 0L8 13.898l2.537-1.147a.202.202 0 0 1 .175 0l3.194 1.444V1.805l-3.194 1.444Zm1.88 8.916-1.338-.604a1.506 1.506 0 0 0-1.26 0L8 12.463l-1.995-.875a1.488 1.488 0 0 0-1.26 0l-1.339.603V3.835l1.339.604a1.505 1.505 0 0 0 1.26 0L8 3.537l1.995.875a1.487 1.487 0 0 0 1.26 0l1.339-.603v8.356Z"></path><path d="m11.019 6.547-.963-.953-2.905 2.905-1.207-1.217-.963.954 2.17 2.17 3.868-3.859Z"></path></svg>';

export class IconReceiptSuccess extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--receiptSuccess', '', null, 'IconReceiptSuccess');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--receiptSuccess');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--receiptSuccess', '', newVal, 'IconReceiptSuccess');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-receipt-success', IconReceiptSuccess);
