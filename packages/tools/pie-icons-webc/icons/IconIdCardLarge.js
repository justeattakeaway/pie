import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--idCardLarge"><path d="M26.5 6.375h-21A2.625 2.625 0 0 0 2.875 9v14A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23V9A2.625 2.625 0 0 0 26.5 6.375ZM27.375 23a.875.875 0 0 1-.875.875h-21A.875.875 0 0 1 4.625 23V9a.875.875 0 0 1 .875-.875h21a.875.875 0 0 1 .875.875v14Z"></path><path d="M12.5 9.875H9A2.625 2.625 0 0 0 6.375 12.5V16A2.625 2.625 0 0 0 9 18.625h3.5A2.625 2.625 0 0 0 15.125 16v-3.5A2.625 2.625 0 0 0 12.5 9.875ZM13.375 16a.875.875 0 0 1-.875.875H9A.875.875 0 0 1 8.125 16v-3.5A.875.875 0 0 1 9 11.625h3.5a.875.875 0 0 1 .875.875V16Z"></path><path d="m24.409 18.625.875-1.75h-6.659v1.75h5.784Z"></path><path d="m22.659 22.125.875-1.75h-4.909v1.75h4.034Z"></path></svg>';

export class IconIdCardLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--idCardLarge', '', null, 'IconIdCardLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--idCardLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--idCardLarge', '', newVal, 'IconIdCardLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-id-card-large', IconIdCardLarge);
