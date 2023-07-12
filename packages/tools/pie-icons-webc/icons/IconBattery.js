import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--battery"><path d="M14.781 6.25h-.875v-.875a1.54 1.54 0 0 0-1.531-1.531H2.75a1.54 1.54 0 0 0-1.531 1.531v5.25a1.54 1.54 0 0 0 1.531 1.531h9.625a1.54 1.54 0 0 0 1.531-1.531V9.75h.875v-3.5Zm-2.187 4.375a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-5.25a.219.219 0 0 1 .219-.219h9.625a.219.219 0 0 1 .219.219v5.25ZM3.844 6.25h1.312v3.5H3.844v-3.5Zm2.625 0H7.78v3.5H6.47v-3.5Z"></path></svg>';

export class IconBattery extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--battery', '', null, 'IconBattery');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--battery');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--battery', '', newVal, 'IconBattery');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-battery', IconBattery);
