import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--geolocationCircle"><path d="M8 1.42a6.58 6.58 0 1 0 0 13.16A6.58 6.58 0 0 0 8 1.42Zm0 11.83a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5Z"></path><path d="m4.351 8.28 1.33.332a2.345 2.345 0 0 1 1.75 1.75l.333 1.33h1.172l2.293-6.877L4.35 7.064V8.28Zm4.769-1.4-.761 2.284A3.649 3.649 0 0 0 6.836 7.64L9.12 6.88Z"></path></svg>';

export class IconGeolocationCircle extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--geolocationCircle', '', null, 'IconGeolocationCircle');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--geolocationCircle');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--geolocationCircle', '', newVal, 'IconGeolocationCircle');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-geolocation-circle', IconGeolocationCircle);
