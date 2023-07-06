import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--sponsoredFilled"><path d="M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v8.75a1.54 1.54 0 0 0 1.531 1.531h8.75a1.54 1.54 0 0 0 1.531-1.531v-8.75a1.54 1.54 0 0 0-1.531-1.531ZM10.564 9.75H9.25V7.668L7.59 9.338a.525.525 0 0 0 0 .876l-.937.875a1.828 1.828 0 0 1 0-2.678L8.316 6.74H6.25V5.427h3.22a1.094 1.094 0 0 1 1.094 1.094V9.75Z"></path></svg>';

export class IconSponsoredFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sponsoredFilled', '', null, 'IconSponsoredFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--sponsoredFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sponsoredFilled', '', newVal, 'IconSponsoredFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-sponsored-filled', IconSponsoredFilled);
