import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--restaurantMenuLarge"><path d="M19.5 22.125h-7v1.75h7v-1.75Z"></path><path d="M23.875 3.75H8.125A2.625 2.625 0 0 0 5.5 6.375v21.927l.088-.052h20.825l.087.052V6.375a2.625 2.625 0 0 0-2.625-2.625ZM7.25 26.5V6.375a.875.875 0 0 1 .875-.875h15.75a.875.875 0 0 1 .875.875V26.5H7.25Z"></path><path d="M21.25 18.625h-10.5v1.75h10.5v-1.75Z"></path><path d="M21.171 13.375a5.25 5.25 0 0 0-4.296-4.296.254.254 0 0 0 0-.079.875.875 0 0 0-1.75 0 .254.254 0 0 0 0 .079 5.25 5.25 0 0 0-4.296 4.296c-.049.29-.075.582-.079.875v.875h10.5v-.875a5.807 5.807 0 0 0-.079-.875Zm-8.548 0a3.5 3.5 0 0 1 6.755 0h-6.755Z"></path></svg>';

export class IconRestaurantMenuLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--restaurantMenuLarge', '', null, 'IconRestaurantMenuLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--restaurantMenuLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--restaurantMenuLarge', '', newVal, 'IconRestaurantMenuLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-restaurant-menu-large', IconRestaurantMenuLarge);
