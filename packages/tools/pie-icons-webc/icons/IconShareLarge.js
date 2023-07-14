import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--shareLarge"><path d="M23.5 18.25a3.75 3.75 0 0 0-3.165 1.755L12.13 16.9c.074-.294.114-.596.12-.9a4.007 4.007 0 0 0-.12-.9l8.205-3.105A3.75 3.75 0 1 0 19.75 10c.005.199.025.397.06.592L11.5 13.75a3.749 3.749 0 1 0 0 4.5l8.332 3.15c-.043.198-.07.398-.082.6a3.75 3.75 0 1 0 3.75-3.75Zm0-10.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm-15 10.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm15 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"></path></svg>';

export class IconShareLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--shareLarge', '', null, 'IconShareLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--shareLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--shareLarge', '', newVal, 'IconShareLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-share-large', IconShareLarge);
