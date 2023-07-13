import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--basket"><path d="M6.031 11.5 5.594 8h1.312l.438 3.5H6.03ZM9.094 8l-.438 3.5H9.97l.437-3.5H9.094ZM15 5.594v1.312h-.752l-.945 5.714a1.522 1.522 0 0 1-1.506 1.286H4.202a1.522 1.522 0 0 1-1.505-1.286l-.945-5.714H1V5.594h3.876L5.918 2.75h1.39L6.25 5.594h3.5L8.691 2.75h1.391l1.042 2.844H15Zm-2.082 1.312H3.082l.874 5.504a.219.219 0 0 0 .21.184h7.595a.219.219 0 0 0 .21-.184l.946-5.504Z"></path></svg>';

export class IconBasket extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--basket', '', null, 'IconBasket');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--basket');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--basket', '', newVal, 'IconBasket');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-basket', IconBasket);
