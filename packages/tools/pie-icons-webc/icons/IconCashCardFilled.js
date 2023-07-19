import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cashCardFilled"><path d="M11.605 4.771v-.875a1.426 1.426 0 0 0-1.418-1.417H2.532a1.426 1.426 0 0 0-1.426 1.417v.875h10.5Z"></path><path d="M3.284 6.749h8.321v-.665h-10.5V8.49a1.426 1.426 0 0 0 1.426 1.426h.753V6.75Z"></path><path d="M4.596 8.061v5.793h10.08V8.06H4.596Zm5.04 3.973a1.077 1.077 0 1 1 0-2.154 1.077 1.077 0 0 1 0 2.154Z"></path></svg>';

export class IconCashCardFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCardFilled', '', null, 'IconCashCardFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--cashCardFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCardFilled', '', newVal, 'IconCashCardFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-cash-card-filled', IconCashCardFilled);
