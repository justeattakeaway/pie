import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pickUpLarge"><path d="M25.625 2.875h-8.75c-3.859 0-5.959 3.106-6.659 4.375H5.841l-.157.07a3.194 3.194 0 0 0-1.829 2.03 3.5 3.5 0 0 0 1.75 3.902L3.75 26.692a2.45 2.45 0 0 0 .656 1.794 2.046 2.046 0 0 0 1.47.639H21.75a2.046 2.046 0 0 0 1.47-.639 2.483 2.483 0 0 0 .656-1.872L21.95 12.5a4.042 4.042 0 0 0 1.636-1.75h1.164v1.75H30V2.875h-4.375ZM5.544 9.814c.114-.35.359-.64.682-.814H15.8l-1.278 1.225a2.791 2.791 0 0 0-.796 1.4H6.28a1.75 1.75 0 0 1-.735-1.811Zm16.581 16.948a.684.684 0 0 1-.166.508.305.305 0 0 1-.21.105H5.876a.306.306 0 0 1-.21-.105.674.674 0 0 1-.175-.429l1.83-13.466h6.544a2.835 2.835 0 0 0 2.625 1.75 2.861 2.861 0 0 0 2.013-.831l1.155-1.164c.202-.006.403-.023.603-.053l1.864 13.685ZM22.37 9l-.201.595a2.703 2.703 0 0 1-2.783 1.75l-.41-.044-1.75 1.75a1.095 1.095 0 0 1-1.79-.36 1.059 1.059 0 0 1-.075-.427 1.094 1.094 0 0 1 .333-.779l2.625-2.494a1.015 1.015 0 0 0 .332-1.155.962.962 0 0 0-.9-.586h-5.478a5.748 5.748 0 0 1 4.602-2.625h7.875V9h-2.38Zm5.88 1.75H26.5V4.625h1.75v6.125Z"></path></svg>';

export class IconPickUpLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pickUpLarge', '', null, 'IconPickUpLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--pickUpLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pickUpLarge', '', newVal, 'IconPickUpLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-pick-up-large', IconPickUpLarge);
