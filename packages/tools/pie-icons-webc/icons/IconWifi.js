import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--wifi"><g clip-path="url(#prefix__clip0_15_321)"><path d="M11.832 10.231A5.023 5.023 0 0 0 8 8.333a5.023 5.023 0 0 0-3.833 1.898l-1.006-.875A6.326 6.326 0 0 1 8 7.02a6.326 6.326 0 0 1 4.839 2.363l-1.007.848Z"></path><path d="M13.95 8.096A7.788 7.788 0 0 0 8 5.156a7.787 7.787 0 0 0-5.95 2.94l-1.006-.875a9.074 9.074 0 0 1 7-3.412 9.074 9.074 0 0 1 7 3.412l-1.094.875Z"></path><path d="M9.794 12.576a2.292 2.292 0 0 0-3.588 0L5.2 11.701A3.666 3.666 0 0 1 8 10.354a3.665 3.665 0 0 1 2.8 1.373l-1.006.85Z"></path></g><defs><clipPath id="prefix__clip0_15_321"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconWifi extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--wifi', '', null, 'IconWifi');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--wifi');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--wifi', '', newVal, 'IconWifi');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-wifi', IconWifi);
