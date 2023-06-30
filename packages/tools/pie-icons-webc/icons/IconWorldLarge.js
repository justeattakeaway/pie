import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--worldLarge"><path d="M16 3.811a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm7.551 6.598.727-.77a10.378 10.378 0 0 1 1.898 3.955l-4.06 4.375-.105-4.892-1.828-.288a1.156 1.156 0 0 1-.805-.499 1.426 1.426 0 0 1-.21-1.111 1.085 1.085 0 0 1 1.146-.805l3.237.035ZM11.88 6.375v3.841L8.842 11.87l-.306 1.103-2.161-1.13a10.5 10.5 0 0 1 5.504-5.468ZM16 26.5A10.5 10.5 0 0 1 5.5 16c.007-.844.112-1.684.315-2.502l2.756 1.452c.304.633.8 1.153 1.418 1.488l-1.182.988v.429c0 .175.21 4.375 5.723 5.985l.875.245 1.864-6.571-2.888-2.389h-2.625a1.557 1.557 0 0 1-1.627-1.076l.271-1.015 3.299-1.75V5.84A10.597 10.597 0 0 1 16 5.561c2.63-.001 5.161.993 7.087 2.783l-.297.315h-2.476a2.835 2.835 0 0 0-2.861 2.178 3.193 3.193 0 0 0 .49 2.486 2.912 2.912 0 0 0 1.977 1.233l.376.062.079 5.048 2.336.254 3.789-4.06v.166A10.5 10.5 0 0 1 16 26.5Zm-3.806-9.625h1.557l1.505 1.26-1.059 3.736c-2.694-1.067-3.394-2.887-3.57-3.692l1.567-1.304Z"></path></svg>';

export class IconWorldLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--worldLarge', '', null, 'IconWorldLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--worldLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--worldLarge', '', newVal, 'IconWorldLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-world-large', IconWorldLarge);
