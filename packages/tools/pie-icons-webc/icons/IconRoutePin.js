import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--routePin"><path d="M13.031 2.575a4.646 4.646 0 0 0-6.562 0 4.655 4.655 0 0 0 0 6.571l3.281 3.281 3.281-3.28a4.655 4.655 0 0 0 0-6.572Zm-.927 5.644L9.75 10.573 7.396 8.218a3.325 3.325 0 1 1 4.708 0Zm-1.076-2.442a1.277 1.277 0 1 1-2.555 0 1.277 1.277 0 0 1 2.554 0Zm-6.738 7.7 6.344.053v1.313L4.29 14.79a1.523 1.523 0 0 1-1.295-2.319l1.041-1.75a.21.21 0 0 0 0-.219.21.21 0 0 0-.192-.113H1V9.094h2.826a1.522 1.522 0 0 1 1.313 2.319l-1.042 1.75a.219.219 0 0 0 .193.332v-.018Z"></path></svg>';

export class IconRoutePin extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--routePin', '', null, 'IconRoutePin');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--routePin');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--routePin', '', newVal, 'IconRoutePin');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-route-pin', IconRoutePin);
