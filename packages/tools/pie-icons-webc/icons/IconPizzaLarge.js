import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pizzaLarge"><path d="M28.53 10.129c-1.698-2.643-6.834-8.707-17.911-8.042a2.625 2.625 0 0 0-2.494 2.66v25.13L27.988 13.63a2.625 2.625 0 0 0 .542-3.5ZM9.875 16.578a1.618 1.618 0 0 1 .67 3.149 1.62 1.62 0 0 1-.67.07v-3.22Zm0 4.97h.131a3.37 3.37 0 0 0 2.418-5.873 3.37 3.37 0 0 0-2.549-.848V7.872c7.997-.184 12.25 3.754 14.289 6.624L9.875 26.185v-4.637Zm17.001-9.275-1.356 1.102c-2.021-2.765-6.764-7.429-15.645-7.254V4.747a.875.875 0 0 1 .875-.875c.525 0 1.05-.043 1.549-.043 9.047-.035 13.326 4.996 14.761 7.245a.875.875 0 0 1-.184 1.199Zm-9.564-1.523a3.062 3.062 0 1 0 0 6.125 3.062 3.062 0 0 0 0-6.125Zm0 4.375a1.313 1.313 0 1 1 0-2.626 1.313 1.313 0 0 1 0 2.626Z"></path></svg>';

export class IconPizzaLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pizzaLarge', '', null, 'IconPizzaLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--pizzaLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pizzaLarge', '', newVal, 'IconPizzaLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-pizza-large', IconPizzaLarge);
