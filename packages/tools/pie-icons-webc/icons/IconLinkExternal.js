import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--linkExternal"><path d="M13.25 3.564 8.21 8.63l-.928-.928 5.093-5.066H9.662V1.324h3.833a1.093 1.093 0 0 1 1.067 1.093V6.25H13.25V3.564Z"></path><path d="M11.302 12.831c.343-.34.537-.804.54-1.287V7.598h1.312v3.946a3.141 3.141 0 0 1-3.142 3.132h-5.46a3.141 3.141 0 0 1-3.14-3.132V6.075a3.132 3.132 0 0 1 3.14-3.132h3.79v1.312h-3.79a1.829 1.829 0 0 0-1.802 1.82v5.469a1.829 1.829 0 0 0 1.802 1.82h5.46c.484 0 .948-.192 1.29-.533Z"></path></svg>';

export class IconLinkExternal extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--linkExternal', '', null, 'IconLinkExternal');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--linkExternal');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--linkExternal', '', newVal, 'IconLinkExternal');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-link-external', IconLinkExternal);
