import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bulgaria"><path fill="#496E2D" d="M15.002 7.999a6.91 6.91 0 0 0-.437-2.434L8 5.259l-6.563.306a6.987 6.987 0 0 0 0 4.868L8 10.739l6.564-.306a6.91 6.91 0 0 0 .437-2.434Z"></path><path fill="#D80027" d="M8.001 15a7 7 0 0 0 6.564-4.567H1.438A7 7 0 0 0 8 15Z"></path><path fill="#EEE" d="M1.438 5.565h13.127a7.002 7.002 0 0 0-13.127 0Z"></path></svg>';

export class IconFlagBulgaria extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bulgaria', '', null, 'IconFlagBulgaria');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--bulgaria');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bulgaria', '', newVal, 'IconFlagBulgaria');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-flag-bulgaria', IconFlagBulgaria);
