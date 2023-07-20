import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--receipt"><path d="M11.1 2.57a.23.23 0 0 1-.2 0L8 1.26 5.1 2.57a.23.23 0 0 1-.2 0L1.25.92v14.16l3.65-1.65a.23.23 0 0 1 .2 0L8 14.74l2.9-1.31a.23.23 0 0 1 .2 0l3.65 1.65V.92L11.1 2.57Zm2.15 10.19-1.53-.69a1.721 1.721 0 0 0-1.44 0L8 13.1l-2.28-1a1.701 1.701 0 0 0-1.44 0l-1.53.69V3.24l1.53.69a1.72 1.72 0 0 0 1.44 0L8 2.9l2.28 1a1.7 1.7 0 0 0 1.44 0l1.53-.69v9.55Z"></path><path d="M11 5.75H5v1.5h6v-1.5Z"></path><path d="M10 8.75H6v1.5h4v-1.5Z"></path></svg>';

export class IconReceipt extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--receipt', '', null, 'IconReceipt');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--receipt');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--receipt', '', newVal, 'IconReceipt');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-receipt', IconReceipt);
