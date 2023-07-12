import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--basketLarge"><path d="M16.875 15.125h-1.75v7h1.75v-7Z"></path><path d="m12.518 22.125-.858-7H9.875l.875 7h1.768Z"></path><path d="m21.88 9.875-1.75-5.25h-1.846l1.75 5.25h-8.068l1.75-5.25H11.87l-1.75 5.25H2v1.75h1.873L5.84 25.126a2.625 2.625 0 0 0 2.625 2.249H23.56a2.625 2.625 0 0 0 2.625-2.249l1.943-13.501H30v-1.75h-8.12Zm2.546 14.997a.875.875 0 0 1-.875.753H8.44a.875.875 0 0 1-.875-.753L5.64 11.625h20.72l-1.934 13.247Z"></path><path d="m20.358 15.125-.85 7h1.76l.857-7h-1.767Z"></path></svg>';

export class IconBasketLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--basketLarge', '', null, 'IconBasketLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--basketLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--basketLarge', '', newVal, 'IconBasketLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-basket-large', IconBasketLarge);
