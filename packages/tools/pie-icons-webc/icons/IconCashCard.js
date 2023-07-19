import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cashCard"><path d="M9.61 11.894a1.076 1.076 0 1 0 0-2.153 1.076 1.076 0 0 0 0 2.153Z"></path><path d="M3.257 8.464h-.752a.105.105 0 0 1-.114-.105V5.952h7.875v.657h1.313V3.765a1.426 1.426 0 0 0-1.418-1.426H2.505a1.426 1.426 0 0 0-1.426 1.426v4.594A1.426 1.426 0 0 0 2.505 9.75h.752V8.464Zm-.875-4.699a.114.114 0 0 1 .123-.14h7.656a.104.104 0 0 1 .1.07.106.106 0 0 1 .005.044v.875H2.391l-.009-.849Z"></path><path d="M15 14.055H4.229V7.589H15v6.466Zm-9.45-1.313h8.137V8.875H5.541l.009 3.867Z"></path></svg>';

export class IconCashCard extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCard', '', null, 'IconCashCard');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--cashCard');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCard', '', newVal, 'IconCashCard');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-cash-card', IconCashCard);
