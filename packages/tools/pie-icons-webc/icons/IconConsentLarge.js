import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--consentLarge"><path d="m14.04 18.616-2.494-2.809-1.312 1.164 2.66 3.002a1.537 1.537 0 0 0 2.257-.009l6.72-7.245-1.286-1.19-6.571 7.079.026.008Z"></path><path d="M27.375 23.543V9.332a2.633 2.633 0 0 0-2.625-2.625H7.25a2.633 2.633 0 0 0-2.625 2.625v14.21h-1.75v1.75h26.25v-1.75h-1.75Zm-1.75 0H6.375V9.332c0-.482.394-.875.875-.875h17.5c.481 0 .875.393.875.875v14.21Z"></path></svg>';

export class IconConsentLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--consentLarge', '', null, 'IconConsentLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--consentLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--consentLarge', '', newVal, 'IconConsentLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-consent-large', IconConsentLarge);
