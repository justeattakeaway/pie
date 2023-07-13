import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--numberSymbol"><path d="m13.18 6.049.184-1.295h-1.96l.472-3.247h-1.312l-.473 3.247H6.854l.472-3.247H6.022l-.48 3.247H3.545l-.184 1.295h2.013L4.806 9.95H2.82l-.184 1.295h1.96l-.472 3.246h1.312l.473-3.246h3.237l-.472 3.246h1.303l.482-3.246h1.995l.183-1.295h-2.012l.569-3.902h1.986ZM9.33 9.95H6.101L6.67 6.05h3.229L9.33 9.95Z"></path></svg>';

export class IconNumberSymbol extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--numberSymbol', '', null, 'IconNumberSymbol');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--numberSymbol');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--numberSymbol', '', newVal, 'IconNumberSymbol');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-number-symbol', IconNumberSymbol);
