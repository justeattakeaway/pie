import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userMarkerLarge"><path d="M16 15.125a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm5.25 8.566.691 1.934H20.07l-.499-1.313a2.204 2.204 0 0 0-2.126-1.312h-2.511a2.205 2.205 0 0 0-2.127 1.313l-.498 1.312h-1.873l.726-1.934A3.972 3.972 0 0 1 14.932 16h2.512a3.972 3.972 0 0 1 3.806 2.441ZM26.5 4.625h-21A2.625 2.625 0 0 0 2.875 7.25v14.875A2.625 2.625 0 0 0 5.5 24.75h6.641L16 28.609l3.859-3.859H26.5a2.625 2.625 0 0 0 2.625-2.625V7.25A2.625 2.625 0 0 0 26.5 4.625Zm.875 17.5A.875.875 0 0 1 26.5 23h-7.359L16 26.141 12.859 23H5.5a.875.875 0 0 1-.875-.875V7.25a.875.875 0 0 1 .875-.875h21a.875.875 0 0 1 .875.875v14.875Z"></path></svg>';

export class IconUserMarkerLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userMarkerLarge', '', null, 'IconUserMarkerLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--userMarkerLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userMarkerLarge', '', newVal, 'IconUserMarkerLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-user-marker-large', IconUserMarkerLarge);
