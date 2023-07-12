import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--megaphoneLarge"><path d="M28.25 14.25a4.524 4.524 0 0 0-4.375-4.506V2.875h-2.354l-.271.201a46.213 46.213 0 0 1-4.008 2.94A47.948 47.948 0 0 1 12.116 9H5.5a2.625 2.625 0 0 0-2.625 2.625v5.25A2.625 2.625 0 0 0 5.5 19.5h.236l1.4 7.683h4.375l1.243-7.298a48.465 48.465 0 0 1 4.497 2.625c1.384.9 2.72 1.872 3.999 2.914l.245.201h2.38v-6.869a4.524 4.524 0 0 0 4.375-4.506ZM4.625 16.875v-5.25a.875.875 0 0 1 .875-.875h6.125v7H5.5a.875.875 0 0 1-.875-.875Zm3.973 8.558L7.52 19.5h3.544l-1.015 5.933H8.597Zm13.527-1.558a46.084 46.084 0 0 0-3.894-2.835 52.012 52.012 0 0 0-4.856-2.835V10.33a49.054 49.054 0 0 0 4.856-2.809c1.348-.875 2.625-1.837 3.894-2.835v19.189Zm1.75-6.851V11.51a2.756 2.756 0 0 1 0 5.513Z"></path></svg>';

export class IconMegaphoneLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--megaphoneLarge', '', null, 'IconMegaphoneLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--megaphoneLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--megaphoneLarge', '', newVal, 'IconMegaphoneLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-megaphone-large', IconMegaphoneLarge);
