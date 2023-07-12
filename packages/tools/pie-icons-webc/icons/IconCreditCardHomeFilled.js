import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--creditCardHomeFilled"><path d="m14.939 5.322-.814 1.042a42.997 42.997 0 0 0-5.862-3.92 1.146 1.146 0 0 0-.543 0 42.989 42.989 0 0 0-5.845 3.92l-.814-1.042a46.042 46.042 0 0 1 6.125-4.068 2.082 2.082 0 0 1 1.637 0 45.72 45.72 0 0 1 6.116 4.068ZM2.75 10.406h10.5v2.844a.875.875 0 0 1-.875.875h-8.75a.875.875 0 0 1-.875-.875v-2.844Zm1.75 1.969h1.75V11.5H4.5v.875Zm7.875-5.25h-8.75A.875.875 0 0 0 2.75 8v1.094h10.5V8a.875.875 0 0 0-.875-.875Z"></path></svg>';

export class IconCreditCardHomeFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeFilled', '', null, 'IconCreditCardHomeFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--creditCardHomeFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardHomeFilled', '', newVal, 'IconCreditCardHomeFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-credit-card-home-filled', IconCreditCardHomeFilled);
