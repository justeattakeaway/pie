import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--checkboxSelected"><path d="M12.375 2.094h-8.75c-.84 0-1.531.691-1.531 1.531v8.75c0 .84.691 1.531 1.531 1.531h8.75c.84 0 1.531-.691 1.531-1.531v-8.75c0-.84-.691-1.531-1.531-1.531Zm.219 10.281a.217.217 0 0 1-.219.219h-8.75a.217.217 0 0 1-.219-.219v-8.75c0-.123.096-.219.219-.219h8.75c.123 0 .219.096.219.219v8.75Zm-2.45-6.799.962.893-3.36 3.622a.979.979 0 0 1-.726.315c-.271 0-.534-.114-.726-.315L4.955 8.586l.98-.875L7.02 8.936l3.124-3.369v.01Z"></path></svg>';

export class IconCheckboxSelected extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--checkboxSelected', '', null, 'IconCheckboxSelected');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--checkboxSelected');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--checkboxSelected', '', newVal, 'IconCheckboxSelected');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-checkbox-selected', IconCheckboxSelected);
