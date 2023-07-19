import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--geolocationCircleFilled"><path d="M8.359 9.164 9.12 6.88l-2.284.761c.65.343 1.18.874 1.523 1.523Z"></path><path fill-rule="evenodd" d="M8 1.42a6.58 6.58 0 1 0 0 13.16A6.58 6.58 0 0 0 8 1.42ZM5.68 8.613l-1.33-.333V7.064l6.878-2.249-2.293 6.878H7.764l-.333-1.33a2.345 2.345 0 0 0-1.75-1.75Z" clip-rule="evenodd"></path></svg>';

export class IconGeolocationCircleFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--geolocationCircleFilled', '', null, 'IconGeolocationCircleFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--geolocationCircleFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--geolocationCircleFilled', '', newVal, 'IconGeolocationCircleFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-geolocation-circle-filled', IconGeolocationCircleFilled);
