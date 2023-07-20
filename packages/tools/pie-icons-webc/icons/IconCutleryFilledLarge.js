import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cutleryFilledLarge"><path d="m24.391 21.25 2.827.464a67.186 67.186 0 0 1-.35 4.803h1.75c.13-1.268.28-2.764.376-5.52.188-4.29.162-8.586-.079-12.872-.157-1.461-.481-2.205-1.12-2.476a1.628 1.628 0 0 0-1.969.647c-.131.184-3.29 4.76-2.774 13.221a1.75 1.75 0 0 0 1.34 1.733Z"></path><path d="M14.25 5.754h-.166l-1.584.761v6.86c0 2.126 1.829 3.404 3.5 3.745v9.38h1.75v-9.398c1.68-.34 3.5-1.618 3.5-3.753V5.71l-1.75.875v6.79c0 1.496-1.855 2.091-2.625 2.091s-2.625-.595-2.625-2.091V5.754Z"></path><path d="m17.759 5.692-1.75.84v6.843h1.75V5.692Z"></path><path d="M5.5 15.886V26.5h1.75V15.886a4.786 4.786 0 0 0 3.185-4.768v-.736c0-2.694-1.82-4.882-4.06-4.882-2.24 0-4.06 2.188-4.06 4.883v.735A4.786 4.786 0 0 0 5.5 15.886Z"></path></svg>';

export class IconCutleryFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cutleryFilledLarge', '', null, 'IconCutleryFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--cutleryFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cutleryFilledLarge', '', newVal, 'IconCutleryFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-cutlery-filled-large', IconCutleryFilledLarge);
