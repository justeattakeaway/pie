import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--components"><g clip-path="url(#prefix__clip0_7066_3730)"><path d="M11.903 5.025 8.928 8l2.975 2.975L14.878 8l-2.975-2.975ZM10.783 8l1.12-1.12L13.023 8l-1.12 1.12L10.783 8Z"></path><path d="M10.975 4.098 8 1.123 5.025 4.098 8 7.073l2.975-2.975ZM8 2.978l1.12 1.12L8 5.218l-1.12-1.12L8 2.978Z"></path><path d="M5.025 11.903 8 14.878l2.975-2.975L8 8.928l-2.975 2.975ZM8 13.023l-1.12-1.12L8 10.783l1.12 1.12L8 13.023Z"></path><path d="M4.098 5.025 1.123 8l2.975 2.975L7.073 8 4.098 5.025ZM2.978 8l1.12-1.12L5.218 8l-1.12 1.12L2.978 8Z"></path></g><defs><clipPath id="prefix__clip0_7066_3730"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconComponents extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--components', '', null, 'IconComponents');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--components');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--components', '', newVal, 'IconComponents');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-components', IconComponents);
