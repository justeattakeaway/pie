import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--link"><path d="M2.531 8.438c-.01-.861.302-1.695.875-2.337a2.791 2.791 0 0 1 2.074-.945h1.645V3.844H5.48a4.121 4.121 0 0 0-3.036 1.365 4.813 4.813 0 0 0-1.225 3.229 4.445 4.445 0 0 0 4.26 4.593h1.646V11.72H5.48A3.133 3.133 0 0 1 2.53 8.438Z"></path><path d="M10.52 3.844H8.875v1.312h1.645a3.133 3.133 0 0 1 2.949 3.282c.01.86-.302 1.694-.875 2.336a2.792 2.792 0 0 1-2.065.945H8.875v1.312h1.645a4.12 4.12 0 0 0 3.036-1.365 4.813 4.813 0 0 0 1.225-3.229 4.445 4.445 0 0 0-4.261-4.593Z"></path><path d="M5.471 9.094h5.058l.603-1.313H4.867l.604 1.313Z"></path></svg>';

export class IconLink extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--link', '', null, 'IconLink');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--link');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--link', '', newVal, 'IconLink');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-link', IconLink);
