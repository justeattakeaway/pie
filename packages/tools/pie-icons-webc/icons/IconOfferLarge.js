import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--offerLarge"><path d="M22.125 5.211c.113-.169.242-.327.385-.472a3.369 3.369 0 0 1 4.76 0l1.242-1.234a5.136 5.136 0 0 0-7.245 0c-.43.44-.78.953-1.032 1.514l-4.156-.394a2.31 2.31 0 0 0-1.83.656L2.692 16.796l11.944 13.125 12.092-12.127a2.336 2.336 0 0 0 .648-1.873L26.369 5.64l-4.244-.429Zm3.377 11.375L14.696 27.375l-9.625-10.5L15.44 6.515a.586.586 0 0 1 .472-.14l3.877.385a5.25 5.25 0 0 0 .472 2.573A1.75 1.75 0 1 0 23 10.75a1.75 1.75 0 0 0-.516-1.242 3.35 3.35 0 0 1-.972-2.625l3.238.367.875 8.864a.577.577 0 0 1-.14.446l.017.026Z"></path></svg>';

export class IconOfferLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--offerLarge', '', null, 'IconOfferLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--offerLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--offerLarge', '', newVal, 'IconOfferLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-offer-large', IconOfferLarge);
