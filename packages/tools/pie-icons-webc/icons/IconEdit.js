import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--edit"><path d="M14.44 3.502 12.498 1.56a1.54 1.54 0 0 0-2.17 0L2.033 9.855a1.61 1.61 0 0 0-.455.945l-.447 4.069 4.07-.447c.356-.043.688-.203.944-.455l8.295-8.295a1.54 1.54 0 0 0 0-2.17ZM5.218 13.04a.236.236 0 0 1-.167.07l-2.432.271.262-2.432a.297.297 0 0 1 .08-.166l6.124-6.126 2.249 2.25-6.116 6.133Zm8.295-8.295-1.217 1.207-2.248-2.248 1.207-1.217c.043-.04.1-.061.158-.06a.21.21 0 0 1 .157.06l1.943 1.943a.236.236 0 0 1 0 .315Z"></path></svg>';

export class IconEdit extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--edit', '', null, 'IconEdit');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--edit');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--edit', '', newVal, 'IconEdit');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-edit', IconEdit);
