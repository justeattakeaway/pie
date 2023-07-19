import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--sync"><path d="M8.875 2.164A5.906 5.906 0 0 1 13.906 8a5.845 5.845 0 0 1-1.75 4.174l-.927-.928a4.587 4.587 0 0 0 0-6.492 4.507 4.507 0 0 0-2.354-1.251V4.78L6.25 2.75 8.875 1v1.164ZM3.406 8a4.568 4.568 0 0 0 1.348 3.246 4.506 4.506 0 0 0 2.371 1.252V11.22l2.625 2.03L7.125 15v-1.164A5.906 5.906 0 0 1 2.094 8a5.845 5.845 0 0 1 1.75-4.174l.91.928A4.567 4.567 0 0 0 3.406 8Z"></path></svg>';

export class IconSync extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sync', '', null, 'IconSync');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--sync');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sync', '', newVal, 'IconSync');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-sync', IconSync);
