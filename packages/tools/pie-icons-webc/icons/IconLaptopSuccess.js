import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--laptopSuccess"><path d="M13.031 9.479V3.625A1.54 1.54 0 0 0 11.5 2.094h-7a1.54 1.54 0 0 0-1.531 1.531v5.854l-1.75 1.75v1.146a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531v-1.146l-1.75-1.75Zm-8.75-5.854a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v5.469H4.28V3.625Zm9.188 8.75a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-.604l1.365-1.365h8.208l1.365 1.365v.604ZM9.374 4.5l.927.875-2.957 2.992-1.645-1.653.927-.928.718.718L9.374 4.5Z"></path></svg>';

export class IconLaptopSuccess extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopSuccess', '', null, 'IconLaptopSuccess');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--laptopSuccess');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--laptopSuccess', '', newVal, 'IconLaptopSuccess');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-laptop-success', IconLaptopSuccess);
