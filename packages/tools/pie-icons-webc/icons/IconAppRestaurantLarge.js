import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--appRestaurantLarge"><path d="M27.375 8.781a4.567 4.567 0 0 0-1.461-3.342l-2.039-1.925a2.31 2.31 0 0 0-1.575-.639H9.744c-.586 0-1.15.226-1.575.63L6.112 5.43a4.637 4.637 0 0 0-1.487 3.369 4.541 4.541 0 0 0 1.75 3.561v13.265a3.5 3.5 0 0 0 3.5 3.5h12.25a3.5 3.5 0 0 0 3.5-3.5V12.36a4.576 4.576 0 0 0 1.75-3.579Zm-3.5 16.844a1.75 1.75 0 0 1-1.75 1.75H9.875a1.75 1.75 0 0 1-1.75-1.75V13.226h.114a4.856 4.856 0 0 0 4.418-1.225 4.84 4.84 0 0 0 6.686 0 4.857 4.857 0 0 0 4.418 1.225h.114v12.399Zm-.481-14.079a3.027 3.027 0 0 1-3.299-1.365h-1.47a3.027 3.027 0 0 1-5.162 0h-1.558a3.027 3.027 0 0 1-3.299 1.365 2.809 2.809 0 0 1-1.303-4.83l2.064-1.934c.1-.1.235-.156.377-.157H22.3a.56.56 0 0 1 .376.157l2.074 1.925a2.86 2.86 0 0 1 .24 3.856c-.405.5-.968.846-1.596.983ZM17.53 23.875a1.531 1.531 0 1 1-3.063 0 1.531 1.531 0 0 1 3.063 0Z"></path></svg>';

export class IconAppRestaurantLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--appRestaurantLarge', '', null, 'IconAppRestaurantLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--appRestaurantLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--appRestaurantLarge', '', newVal, 'IconAppRestaurantLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-app-restaurant-large', IconAppRestaurantLarge);
